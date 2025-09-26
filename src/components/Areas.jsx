import { useLocalStorage } from "../hooks/useLocalStorage";

const Areas = () => {

    const areas = [
        { "nombreArea": "Puente de mando", "id": "puente" },
        { "nombreArea" : "Bodegas / Tanques de carga", "id": "bodegas" },
        { "nombreArea" : "Tanque de Lastre", "id": "lastre" },
        { "nombreArea" : "Sala de Máquinas", "id": "maquinas" },
        { "nombreArea" : "Cuarto timón de emergencia", "id" : "cuartoTimon" },
        { "nombreArea" : "Estiba de la carga", "id" : "estiba"}, 
        { "nombreArea" : "Conjunto de Barcazas", "id" : "barcazas" },
        { "nombreArea" : "Puesto de reunión", "id" : "reunion" },
        { "nombreArea" : "Alojamientos / cocina", "id" : "alojamientos"},
        { "nombreArea" : "Espacios de pasajeros", "id" : "pasajeros"},
        { "nombreArea" : "Cubierta de vehiculos", "id" : "cubiertaVehiculos"},
        { "nombreArea" : "Otros", "id" : "otros" }
    ]

    const [formData, setFormData] = useLocalStorage('formulario-inspeccion', {
        puente: false,
        bodegas: false,
        lastre: false,
        maquinas: false,
        cuartoTimon: false,
        estiba: false,
        barcazas: false,
        reunion: false,
        alojamientos: false,
        pasajeros: false,
        cubiertaVehiculos: false,
        otros: false
    });

    return (
        <>
        
            <h3 className="font-bold">14. Areas Inspeccionadas:</h3>
        <div className="grid grid-cols-3 font-bold items-center justify-around">
            {areas.map((area) =>  
            <div key={area.id}>
                <input type="checkbox" name={area.id} id={area.id} checked={formData[area.id]}                     
                    onClick={(e) =>
                    setFormData({ ...formData, [area.id]: e.target.checked })
                    }/>
                <label htmlFor={area.id}>{area.nombreArea}</label>
            </div>
            )}
        </div>
        </>
    )
}

export default Areas;