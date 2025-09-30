import { useLocalStorage } from "../hooks/useLocalStorage";

const Deficiencias = () => {

const [formData] = useLocalStorage('formulario-inspeccion', {
    nombreBuque: '',
    pabellonBuque: '',
    tipoBuque: '',
    distintivo: '',
    matricula: '',
    arqueoBruto: '',
    anioConstruccion: '',
    pesoMuerto: ''
});


    const { nombreBuque, matricula, pabellonBuque } = formData;


    return (
        <div className="text-center">
            <p className="font-bold">INFORME DE MEDIDAS ADOPTADAS</p>
            <p>(Formulario aplicable en inspecciones extraordinarias)</p>
            <hr></hr>
            <div className="grid grid-cols-4 justify-items-center items-center">
                <label className="font-bold" htmlFor="nombreBuque">Nombre del buque</label>
                <input type="text" id="nombreBuque" value={nombreBuque}></input>
                <label className="font-bold" htmlFor="pabellonBuqueMatricula">Bandera y matricula</label>
                <input type="text" id="pabellonBuqueMatricula" value={pabellonBuque + ' ' + matricula}></input>
                <label className="font-bold" htmlFor="fechaPrimera">Fecha de la Primera Inspección</label>
                <input type="date" id="fechaPrimera"></input>
                <label className="font-bold" htmlFor="lugarID">Lugar de Inspección (ID)</label>
                <input type="text" id="lugarID"></input>
                <label className="font-bold" htmlFor="fechaSegunda">Fecha de la Segunda Inspección</label>
                <input type="date" id="fechaSegunda"></input>
                <label className="font-bold" htmlFor="lugarIS1">Lugar de Inspección (IS)</label>
                <input type="text" id="lugarIS1"></input>
                <label className="font-bold" htmlFor="fechaTercera">Fecha de la Tercera Inspección</label>
                <input type="date" id="fechaTercera"></input>
                <label className="font-bold" htmlFor="lugarIS2">Lugar de Inspección (IS)</label>
                <input type="text" id="lugarIS2"></input>
                <label className="font-bold" htmlFor="fechaCuarta">Fecha de la Cuarta Inspección</label>
                <input type="date" id="fechaCuarta"></input>
                <label className="font-bold" htmlFor="lugarIS3">Lugar de Inspección (IS)</label>
                <input type="text" id="lugarIS3"></input>
            </div>
            <hr></hr>
            <div className="grid grid-cols-3 items-center justify-between">
            <h3>27. Código y naturaleza de la deficiencia </h3>
            <h3>Norma / Reglamento</h3>
            <h3>Medidas adoptadas</h3>
            </div>
            <hr></hr>
        </div>
    )
}

export default Deficiencias;