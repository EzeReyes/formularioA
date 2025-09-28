import Navbar from "../components/Navbar";
import Reconocimiento from "../components/Reconocimiento";
import SectionTwo from "../components/SectionTwo";
import Title from "../components/Title";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FormA2 = () => {

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
        <div className="text-xs">
            <Navbar />
            <Title title="FORMULARIO A-2 R.G. PNA 3-036" />
            <hr></hr>
            <div className="flex items-center justify-around text-xs font-bold mb-2">
                <span>Nombre del buque: {nombreBuque}</span>
                <span>Bandera y Matricula: {pabellonBuque} / {matricula}</span>
            </div>
            <hr></hr>
            <Reconocimiento />
            <hr></hr>
            <SectionTwo />
        </div>
    )
}

export default FormA2;