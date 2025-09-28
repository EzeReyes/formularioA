import React, { useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function Firma() {
  const [capitanFirmas, setCapitanFirmas] = useState([]);
  const [inspectorFirmas, setInspectorFirmas] = useState([]);

  // 🔁 Recuperar firmas guardadas al cargar
  useEffect(() => {
    const recuperarFirmas = (tipo) => {
      const firmas = [];
      for (let key in localStorage) {
        if (key.startsWith(`firma_${tipo}_imagen_`)) {
          const id = key.replace(`firma_${tipo}_imagen_`, '');
          const imagen = localStorage.getItem(key);
          const nombre = localStorage.getItem(`firma_${tipo}_nombre_${id}`) || '';
          firmas.push({
            id: Number(id),
            ref: React.createRef(),
            nombre,
            guardada: true,
            imagen
          });
        }
      }
      return firmas;
    };

    setCapitanFirmas(recuperarFirmas('capitan'));
    setInspectorFirmas(recuperarFirmas('inspector'));
  }, []);

  const agregarFirma = (tipo) => {
    const nuevaFirma = {
      id: Date.now(),
      ref: React.createRef(),
      nombre: '',
      guardada: false,
      imagen: ''
    };
    tipo === 'capitan'
      ? setCapitanFirmas((prev) => [...prev, nuevaFirma])
      : setInspectorFirmas((prev) => [...prev, nuevaFirma]);
  };

    const guardarFirma = (firma, tipo) => {
    if (firma.ref.current) {
        const dataURL = firma.ref.current.getCanvas().toDataURL('image/png');
        localStorage.setItem(`firma_${tipo}_imagen_${firma.id}_${firma.nombre}`, dataURL);
        localStorage.setItem(`firma_${tipo}_nombre_${firma.id}`, firma.nombre);
        const actualizado = { ...firma, guardada: true, imagen: dataURL };
        tipo === 'capitan'
        ? setCapitanFirmas((prev) =>
            prev.map((f) => (f.id === firma.id ? actualizado : f))
            )
        : setInspectorFirmas((prev) =>
            prev.map((f) => (f.id === firma.id ? actualizado : f))
            );
    }
    };

  const eliminarFirma = (id, tipo) => {
    localStorage.removeItem(`firma_${tipo}_imagen_${id}`);
    localStorage.removeItem(`firma_${tipo}_nombre_${id}`);
    tipo === 'capitan'
      ? setCapitanFirmas((prev) => prev.filter((f) => f.id !== id))
      : setInspectorFirmas((prev) => prev.filter((f) => f.id !== id));
  };

  const limpiarFirma = (ref) => {
    if (ref.current) {
      ref.current.clear();
    }
  };

  const modificarFirma = (firma, tipo) => {
    const actualizado = { ...firma, guardada: false, imagen: '' };
    tipo === 'capitan'
      ? setCapitanFirmas((prev) =>
          prev.map((f) => (f.id === firma.id ? actualizado : f))
        )
      : setInspectorFirmas((prev) =>
          prev.map((f) => (f.id === firma.id ? actualizado : f))
        );
  };

  const renderFirmas = (firmas, tipo) =>
    firmas.map((firma) => (
      <div
        key={firma.id}
        className={`relative group ${
          firma.guardada ? 'p-0 m-0 border-none shadow-none' : 'border p-2 mb-4 shadow'
        } rounded w-fit bg-white`}
      >
        {/* Botones visibles en hover SIEMPRE */}
        <div className='absolute top-0 right-0 hidden group-hover:flex gap-1'>
          <button
            onClick={() => eliminarFirma(firma.id, tipo)}
            className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs'
          >
            Eliminar
          </button>
          <button
            onClick={() => {
              if (!firma.guardada) limpiarFirma(firma.ref);
            }}
            disabled={firma.guardada}
            className={`px-2 py-1 rounded text-xs ${
              firma.guardada
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-yellow-500 text-white hover:bg-yellow-600'
            }`}
          >
            Limpiar
          </button>
          <button
            onClick={() => modificarFirma(firma, tipo)}
            className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs'
          >
            Modificar
          </button>
        </div>

        <span className='font-bold block mb-1'>
          Firma del {tipo === 'capitan' ? 'Capitán' : 'Inspector'}:
        </span>

        {firma.guardada ? (
          <img
            src={firma.imagen}
            alt='Firma guardada'
            className='w-[200px] h-[70px]'
          />
        ) : (
          <SignatureCanvas
            ref={firma.ref}
            penColor='black'
            canvasProps={{
              width: window.innerWidth < 768 ? window.innerWidth - 40 : 400,
              height: 150,
              className: 'border border-black rounded bg-white touch-none'
            }}
          />
        )}

                <div className='mt-2'>
          <span className='font-bold'>Nombre y Apellido:</span>
          <input
            type='text'
            className='border-b border-dotted ml-2'
            value={firma.nombre}
            onChange={(e) => {
              const nuevoNombre = e.target.value;
              tipo === 'capitan'
                ? setCapitanFirmas((prev) =>
                    prev.map((f) =>
                      f.id === firma.id ? { ...f, nombre: nuevoNombre } : f
                    )
                  )
                : setInspectorFirmas((prev) =>
                    prev.map((f) =>
                      f.id === firma.id ? { ...f, nombre: nuevoNombre } : f
                    )
                  );
            }}
          />
        </div>

        {!firma.guardada && (
          <button
            onClick={() => guardarFirma(firma, tipo)}
            className='bg-green-500 text-white px-2 py-1 mt-2 rounded hover:bg-green-600'
          >
            Guardar firma
          </button>
        )}


      </div>
    ));

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <div>
          {renderFirmas(capitanFirmas, 'capitan')}
          <button
            onClick={() => agregarFirma('capitan')}
            className='bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700'
          >
            Agregar firma del Capitán/Armador
          </button>
            <p className='text-xs font-bold border-t mt-2'>Firma del Capitán/Armador:</p>
        </div>

        <div className={`grid gap-4 ${inspectorFirmas.length > 2 ? 'grid-cols-2' : ''}`}>
          <h2 className='text-xl font-bold mb-2 col-span-2'>Firma/s de Inspector/es:</h2>
          {renderFirmas(inspectorFirmas, 'inspector')}
          <button
            onClick={() => agregarFirma('inspector')}
            className='bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 mt-2 col-span-2'
          >
            Agregar firma de Inspector
          </button>
        </div>
      </div>

      <div className='mt-6'>
        <button
          onClick={() => window.print()}
          className='bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800'
        >
          Imprimir documento
        </button>
      </div>
    </div>
  );
}

export default Firma;