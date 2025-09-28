import { useLocalStorage } from '../hooks/useLocalStorage';

const Reconocimiento = () => {
    const reconocimientos = Array.from({ length: 10 }, (_, i) => i + 1);

        const [ formData, setFormData ] = useLocalStorage('formulario-inspeccion', {
        habilitado: false,
        reconocimiento1: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento2: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento3: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento4: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento5: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento6: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento7: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento8: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento9: {fecha: '', autoridad: '', puerto: ''},
        reconocimiento10: {fecha: '', autoridad: '', puerto: ''}
        });

    return (
    <div className="text-xs">
        <p>17. Información del último reconocimiento anual o intermedia</p>

        <div className="mb-2">
        <label htmlFor="habilitar" className="mr-2 font-bold">Habilitar edición</label>
        <input
            type="checkbox"
            id="habilitar"
            name="habilitar"
            checked={formData.habilitado || false}
            onChange={(e) => setFormData({...formData, habilitado: e.target.checked})}
            className="transform scale-150"
        />
        </div>

        <div className="grid grid-cols-3 gap-2 font-bold mb-2">
            <p>Fecha de reconocimiento:</p>
            <p>Autoridad que efectuó el reconocimiento:</p>
            <p>Puerto / País:</p>
        </div>

        {reconocimientos.map((num) => (
        <div key={num} className="grid grid-cols-3 gap-2 mb-1">
            <div>
            <label htmlFor={`fecha-${num}`} className="font-bold">{num}.</label>
            <input
                type="date"
                id={`fecha-${num}`}
                disabled={!formData.habilitado}
                placeholder='dd/mm/aaaa'
                onChange={(e) => setFormData({...formData, [`reconocimiento${num}`]: {
                    ...formData[`reconocimiento${num}`],
                    fecha: e.target.value
                }})}              
                value={formData[`reconocimiento${num}`]?.fecha || ''}
                className={`border-b border-dotted w-auto ${!formData.habilitado ? 'line-through text-gray-400 bg-gray-100' : ''}`}
            />
            </div>
            <div>
            <input
                type="text"
                id={`reconocimiento-${num}`}
                value={formData[`reconocimiento${num}`]?.autoridad || ''}
                onChange={(e) => setFormData({...formData, [`reconocimiento${num}`]: {
                    ...formData[`reconocimiento${num}`],
                    autoridad: e.target.value
                }})}
                disabled={!formData.habilitado}
                placeholder='reconocimiento'
                className={`border-b border-dotted w-auto ${!formData.habilitado ? 'line-through text-gray-400 bg-gray-100' : ''}`}
            />
            </div>
            <div>
            <input
                type="text"
                id={`puertoPais-${num}`}
                value={formData[`reconocimiento${num}`]?.puerto || ''}
                onChange={(e) => setFormData({...formData, [`reconocimiento${num}`]: {
                    ...formData[`reconocimiento${num}`],
                    puerto: e.target.value
                }})}
                disabled={!formData.habilitado}
                placeholder='puerto / país'
                className={`border-b border-dotted w-auto ${!formData.habilitado ? 'line-through text-gray-400 bg-gray-100' : ''}`}
            />
            </div>
        </div>
        ))}
    </div>
    );
};

export default Reconocimiento;