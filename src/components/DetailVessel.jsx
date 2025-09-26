import { useLocalStorage } from '../hooks/useLocalStorage';

const DetailVessel = () => {
  const detail = [
    { detailName: "1. Nombre del buque:", id: "nombreBuque" },
    { detailName: "2. Pabellón del buque:", id: "pabellonBuque" },
    { detailName: "3. Tipo de buque:", id: "tipoBuque" },
    { detailName: "4. Distintivo de llamada:", id: "distintivo" },
    { detailName: "5. Matrícula / OMI:", id: "matricula" },
    { detailName: "6. Arqueo Bruto:", id: "arqueoBruto" },
    { detailName: "7. Año de Construcción:", id: "anioConstruccion" },
    { detailName: "8. Peso Muerto (cuando proceda):", id: "pesoMuerto" }
  ];

  const [formData, setFormData] = useLocalStorage('formulario-inspeccion', {
    nombreBuque: '',
    pabellonBuque: '',
    tipoBuque: '',
    distintivo: '',
    matricula: '',
    arqueoBruto: '',
    anioConstruccion: '',
    pesoMuerto: ''
  });


    return (
        <div className="grid grid-cols-2 bg-white/10 backdrop-blur-md border-gray-300 shadow-lg">
            {detail.map((det) => 
                <div key={det.id}>
                <label htmlFor={det.id} className="font-bold">{det.detailName}</label>
                <input
                    name={det.id}
                    id={det.id}
                    placeholder={det.id === "matricula" ? `Ingrese la ${det.id}` : `Ingrese el ${det.id}`}
                    value={formData[det.id] || ''}
                    onChange={(e) =>
                    setFormData({ ...formData, [det.id]: e.target.value })
                    }
                    className="border border-dotted border-gray-400 rounded-md p-1 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>
            )}
        </div>
    )
}

export default DetailVessel;