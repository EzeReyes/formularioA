import { useLocalStorage } from "../hooks/useLocalStorage";

const Certificados = () => {

    const certificados = [ 
        { "id": "certificado1", "nombreCertificado": "1- Cert. de arqueo" },
        { "id": "certificado2", "nombreCertificado": "2- Cert. de Matricula" },
        { "id": "certificado3", "nombreCertificado": "3- Cert. de Dotación Mínima" },
        { "id": "certificado4", "nombreCertificado": "4- Cert. de Seguridad de la Navegación" }, 
        { "id": "certificado5", "nombreCertificado": "5- Cert. de Prev. Cont. Aguas Sucias" },
        { "id": "certificado6", "nombreCertificado": "6- Licencia Estación de Radio" },
        { "id": "certificado7", "nombreCertificado": "7- Cert. Prev. Cont. por Basuras" },
        { "id": "certificado8", "nombreCertificado": "8- Cert. de Prev. Cont. por Hidrocarburos" }, 
        { "id": "certificado9", "nombreCertificado": "9- Cert. Balsas Salvavidas" },
        { "id": "certificado10", "nombreCertificado": "10- Cert. de Radiobaliza" },
        { "id": "certificado11", "nombreCertificado": "11- Cert. AIS" }, 
        { "id": "certificado12", "nombreCertificado": "12- Cert. de Extintores"}, 
        { "id": "certificado13", "nombreCertificado": "13- Cert. Gestión de la Seguridad" },
        { "id": "certificado14", "nombreCertificado": "14- Cert. Desmostrativo de Cumplimiento"}
    ];
    
        const [ formData, setFormData ] = useLocalStorage('formulario-inspeccion', {
        certificado1: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado2: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado3: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado4: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado5: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado6: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado7: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado8: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado9: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado10: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado11: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado12: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado13: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''},
        certificado14: {autoridad: '', fechaExpedicion: '', fechaExpiracion: ''}
});

    return (
        <>
        <h3>Certificados y documentación:</h3>
        <div className="grid grid-cols-3 items-center justify-between font-bold">
            <span>Titulo</span>
            <span>Autoridad Expedidora</span>
            <span className="text-end">Fecha (Expedición / Expiración)</span>
        </div>
        <div className="grid grid-cols-3 items-center justify-between">
            {certificados.map(certificado => 
                <>
                    <h3 htmlFor={certificado.id} className="border-b border-dotted w-max">{certificado.nombreCertificado}</h3>
                    <input 
                        type="text" 
                        id={certificado.id}
                        value={formData[certificado.id]?.autoridad || ''}
                        onChange={(e) => setFormData({
                        ...formData,
                        [certificado.id]: {
                            ...formData[certificado.id],
                            autoridad: e.target.value
                        }
                        })}
                        className="border-b border-dotted w-auto" 
                        placeholder="Ingrese Autoridad Expedidora"></input>
                    <div className="flex items-center justify-end gap-2">
                    <input 
                        type="date" 
                        value={formData[certificado.id]?.fechaExpedicion || ''}
                        onChange={(e) => setFormData({
                        ...formData,
                        [certificado.id]: {
                            ...formData[certificado.id],
                            fechaExpedicion: e.target.value
                        }
                        })}
                        placeholder="Ingrese Fecha de Expedición"></input>
                    <input 
                        type="date" 
                        value={formData[certificado.id]?.fechaExpiracion || ''}
                        onChange={(e) => setFormData({
                        ...formData,
                        [certificado.id]: {
                            ...formData[certificado.id],
                            fechaExpiracion: e.target.value
                        }
                        })}
                        placeholder="Ingrese Fecha de Expiración"></input>
                    </div>
            </>            
        )}    
        </div>
        </>
    )
};

export default Certificados;