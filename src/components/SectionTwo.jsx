import { useLocalStorage } from "../hooks/useLocalStorage";
import Firma from "./Firma";
import Footer from "./Footer";
const SectionTwo = () => {

    const [formData, setFormData] = useLocalStorage('formulario-inspeccion', {
        deficienciasSi: false,
        deficienciasNo: false,
        impedimentoSi: false,
        impedimentoNo: false,
        fechaImpedimento: '',
        horaImpedimento: '',
        fechaLevantamiento: '',
        horaLevantamiento: '',
        fechaETA: '',
        horaETA: '',
        puertoProcedencia: '',
        puertoDestino: '',
        carga: '',
        eslora: '',
        NAN: '',
        TripulacionMinima: '',
        CaladoEnProa: '',
        NAT: '',
        CantidadABordo: '',
        CaladoEnPopa: '',
        PotMaq: '',
        PotElec: ''
    });

    return (
        <>
        <div className="flex items-center justify-between">
            <h3 className="font-bold">18. Deficiencias:</h3>
            <label htmlFor="deficienciasSi" className="font-bold">Si</label>
            <input type="checkbox" checked={formData.deficienciasSi} onChange={(e) => setFormData({...formData, deficienciasSi: e.target.checked})} id="deficienciasSi" name="deficienciasSi"/>
            <label htmlFor="deficienciasNo" className="font-bold">No</label>
            <input type="checkbox" checked={formData.deficienciasNo} onChange={(e) => setFormData({...formData, deficienciasNo: e.target.checked})}  id="deficienciasNo" name="deficienciasNo"/>
        </div>
        <hr></hr>
        <div className="flex items-center justify-between">
            <h3 className="font-bold">19. Buque con impedimento de salida:</h3>
            <label htmlFor="impedimentoSi" className="font-bold">Si</label>
            <input type="checkbox" checked={formData.impedimentoSi || false} onChange={(e) => setFormData({...formData, impedimentoSi: e.target.checked})}  id="impedimentoSi" name="impedimentoSi"/>
            <label htmlFor="impedimentoNo" className="font-bold">No</label>
            <input type="checkbox" checked={formData.impedimentoNo || false} onChange={(e) => setFormData({...formData, impedimentoNo: e.target.checked})}  id="impedimentoNo" name="impedimentoNo"/>
        </div>
        <hr></hr>
        <div className="flex items-center justify-between">
            <div>
                <h3 className="font-bold">20. Fecha y hora de Impedimento de salida (si corresponde):</h3>
                <input type="date" value={formData.fechaImpedimento || ''} onChange={(e) => setFormData({...formData, fechaImpedimento: e.target.value})} id="fechaImpedimento" name="fechaImpedimento" className="border-b border-dotted w-auto mr-2"/>
                <input type="time" value={formData.horaImpedimento || ''} onChange={(e) => setFormData({...formData, horaImpedimento: e.target.value})} id="horaImpedimento" name="horaImpedimento" className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <h3 className="font-bold">21. Fecha y hora que se levantó el Impedimento de salida:</h3>
                <input type="date" value={formData.fechaLevantamiento || ''} onChange={(e) => setFormData({...formData, fechaLevantamiento: e.target.value})} id="fechaLevantamiento" name="fechaLevantamiento" className="border-b border-dotted w-auto mr-2"/>
                <input type="time" value={formData.horaLevantamiento || ''} onChange={(e) => setFormData({...formData, horaLevantamiento: e.target.value})} id="horaLevantamiento" name="horaLevantamiento" className="border-b border-dotted w-auto"/>
            </div>
        </div>
        <hr></hr>
        <div className="flex items-center justify-between">
        <div>
        <h3 className="font-bold">22. Puerto de procedencia:</h3>
        <input type="text" value={formData.puertoProcedencia || ''} onChange={(e) => setFormData({...formData, puertoProcedencia: e.target.value})} className="border-b border-dotted w-auto"/>
        </div>
        <div>
        <h3 className="font-bold">23. Puerto de destino:</h3>
        <input type="text" value={formData.puertoDestino|| ''} onChange={(e) => setFormData({...formData, puertoDestino: e.target.value})} className="border-b border-dotted w-auto"/>
        </div>
        <div>
        <h3 className="font-bold">24. Estimativa de arribo (ETA):</h3>
                <input type="date" value={formData.fechaETA || ''} onChange={(e) => setFormData({...formData, fechaETA: e.target.value})} id="fechaETA" name="fechaETA" className="border-b border-dotted w-auto mr-2"/>
                <input type="time" value={formData.horaETA || ''} onChange={(e) => setFormData({...formData, horaETA: e.target.value})} id="horaETA" name="horaETA" className="border-b border-dotted w-auto"/>
        </div>
        </div>
        <hr></hr>
        <div className="flex items-center justify-between">
            <div>
                <h3 className="font-bold">25. Cantidad y tipo de carga:</h3>
                <input type="text" value={formData.carga} onChange={(e) => setFormData({...formData, carga: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <h3 className="font-bold">26. Cantidad e identificación de las barcazas (si corresponde):</h3>
                <input type="text" value="no corresponde" disabled className="border-b border-dotted w-auto"/>
            </div>
        </div>
        <hr></hr>
        <div className="grid grid-cols-3 gap-2 border border-solid pb-2">
            <div>
                <label className="font-bold" htmlFor="eslora">Eslora</label>
                <input type="text" id="eslora" name="eslora" value={formData.eslora} onChange={(e) => setFormData({...formData, eslora: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <label className="font-bold" htmlFor="NAN">NAN</label>
                <input type="text" id="NAN" name="NAN" value={formData.NAN} onChange={(e) => setFormData({...formData, NAN: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <label className="font-bold" htmlFor="TripulacionMinima">Tripulación Mínima</label>
                <input type="text" id="TripulacionMinima" name="TripulacionMinima" value={formData.TripulacionMinima} onChange={(e) => setFormData({...formData, TripulacionMinima: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <label className="font-bold" htmlFor="CaladoEnProa">Calado en proa</label>
                <input type="text" id="CaladoEnProa" name="CaladoEnProa" value={formData.CaladoEnProa} onChange={(e) => setFormData({...formData, CaladoEnProa: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <label className="font-bold" htmlFor="NAT">NAT</label>
                <input type="text" id="NAT" name="NAT" value={formData.NAT} onChange={(e) => setFormData({...formData, NAT: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <label className="font-bold" htmlFor="CantidadABordo">Cantidad a bordo</label>
                <input type="text" id="CantidadABordo" name="CantidadABordo" value={formData.CantidadABordo} onChange={(e) => setFormData({...formData, CantidadABordo: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <label className="font-bold" htmlFor="CaladoEnPopa">Calado en popa</label>
                <input type="text" id="CaladoEnPopa" name="CaladoEnPopa" value={formData.CaladoEnPopa} onChange={(e) => setFormData({...formData, CaladoEnPopa: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <label className="font-bold" htmlFor="PotMaq">Pot. Máq. (KW)</label>
                <input type="text" id="PotMaq" name="PotMaq" value={formData.PotMaq} onChange={(e) => setFormData({...formData, PotMaq: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
            <div>
                <label className="font-bold" htmlFor="PotElec">Pot. Eléct. (KW)</label>
                <input type="text" id="PotElec" name="PotElec" value={formData.PotElec} onChange={(e) => setFormData({...formData, PotElec: e.target.value})} className="border-b border-dotted w-auto"/>
            </div>
        </div>
        <hr></hr>
        <Firma />
        <Footer />
        </>
    )
}

export default SectionTwo;
