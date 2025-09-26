import { useLocalStorage } from '../hooks/useLocalStorage';


const Controles = () => {

    const controls = [
        { "nombreArea": "Abandono del buque", "id": "abandono"},
        { "nombreArea" : "Lucha contra incendio", "id": "lucha" },
        { "nombreArea" : "Bomba de Incendio Emergencia", "id": "bomba" },
        { "nombreArea" : "Equipo separador hidrocarburo", "id": "equipoHidrocarburo" },
        { "nombreArea" : "Generador de emergencia", "id" : "generador"},
        { "nombreArea" : "Timón de emergencia", "id" : "timonEmergencia" }, 
        { "nombreArea" : "Equipos de comunicaciones", "id" : "comunicaciones"},
        { "nombreArea" : "Control de averías", "id" : "controlAverias"},
        { "nombreArea" : "Otros", "id" : "otros"}
    ]

    const [ formData, setFormData ] = useLocalStorage('formulario-inspeccion', {
        abandono: false,
        lucha: false,
        bomba: false,
        equipoHidrocarburo: false,
        generador: false,
        timonEmergencia: false,
        comunicaciones: false,
        controlAverias: false,
        otros: false
    });

    return (
        <>
        
            <h3 className="font-bold">15. Controles Operacionales (si los hay):</h3>
        <div className="grid grid-cols-3 font-bold items-center justify-around">
            {controls.map((control) =>  
            <div key={control.id}>
                <input 
                    type="checkbox" 
                    name={control.id} 
                    id={control.id}
                    checked={formData[control.id]}                     
                    onClick={(e) =>
                    setFormData({ ...formData, [control.id]: e.target.checked })
                    }    
                />
                <label htmlFor={control.id}>{control.nombreArea}</label>
            </div>
            )}
        </div>
        </>
    )
}

export default Controles;