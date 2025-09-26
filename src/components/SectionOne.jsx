import { useLocalStorage } from "../hooks/useLocalStorage";

const SectionOne = () => {

        const [formData, setFormData] = useLocalStorage('formulario-inspeccion', {
        nombreCapitan: '',
        LE: '',
        sociedadClasificacion: '',
        propietario: '',
        compania: '',
        inspecciónInicial: false,
        inspecciónDetallada: false
        });

    return (
        <>
        <div className="flex items-center justify-around gap-10">
            <div className="flex items-center justify-center">
            <label htmlFor="nombreCapitan" className="font-bold">9. Apellido y nombre del capitan:</label>
            <input 
                name="nombreCapitan" 
                id="nombreCapitan" 
                placeholder="Ingrese el Nombre del Capitán"
                value={formData.nombreCapitan || ''}
                onChange={(e) => setFormData({
                    ...formData, nombreCapitan: e.target.value
                })}
                >
            </input>
            <label htmlFor="LE">L.E</label>
            <input 
                name="LE" 
                id="LE" 
                placeholder="Ingrese Libreta de embarco"
                value={formData.LE || ''}
                onChange={(e) => setFormData({
                    ...formData, LE: e.target.value
                })}
                ></input>
            </div>
            <div>
            <label htmlFor="sociedadClasificacion" className="font-bold">Sociedad de Clasificación:</label>
            <input 
                name="sociedadClasificacion" 
                id="sociedadClasificacion" 
                placeholder="Ingrese la Sociedad de Clasificación"
                value={formData.sociedadClasificacion || ''}
                onChange={(e) => setFormData({
                    ...formData, sociedadClasificacion: e.target.value
                })}
                ></input>
            </div>
        </div>
        <hr></hr>
        <div>
            <label htmlFor="propietario" className="font-bold">10. Identificación y pormenores del Propietario registrado:</label>
            <input 
                name="propietario" 
                id="propietario" 
                placeholder="Ingrese Identificación y pormenores del Propietario"
                value={formData.propietario || ''}
                onChange={(e) => setFormData({
                    ...formData, propietario: e.target.value
                })}
                ></input>
        </div>
        <hr></hr>
        <div>
            <label htmlFor="compania" className="font-bold">11. Identificación y pormenores de la Compañía:</label>
            <input 
                name="compania" 
                id="compania" 
                placeholder="Ingrese Identificación y pormenores de la Compañía"
                value={formData.compania || ''}
                onChange={(e) => setFormData({
                    ...formData, compania: e.target.value
                })}
                ></input>
        </div>
        <hr/>
        <div className="flex justify-around items-center gap-4">
            <span className="font-bold">TIPO DE INSPECCIÓN:</span>
            <div>
                <label htmlFor="inspecciónInicial" className="font-bold">Inspección Inicial (II):</label>
                <input 
                    type="checkbox" 
                    name="inspecciónInicial" 
                    id="inspecciónInicial" 
                    checked={formData.inspecciónInicial || false}
                    onClick={(e) => setFormData({
                        ...formData, inspecciónInicial: e.target.checked
                    })}
                    />
            </div>
            <div>
                <label htmlFor="inspecciónDetallada" className="font-bold">Inspección Más Detallada (ID):</label>
                <input 
                    type="checkbox" 
                    name="inspecciónDetallada" 
                    id="inspecciónDetallada" 
                    checked={formData.inspecciónDetallada || false}
                    onClick={(e) => setFormData({
                        ...formData, inspecciónDetallada: e.target.checked
                    })}
                    />
            </div>
        </div>
        </>
    )
}

export default SectionOne;