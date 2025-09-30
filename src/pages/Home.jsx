import Areas from "../components/Areas";
import DetailVessel from "../components/DetailVessel";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import Title from "../components/Title";
import Controles from "../components/Controles";
import Certificados from "../components/Certificados";

const Home = () => {  

    return (
        <>
        <div className="text-xs">
        <Navbar />
        <Title title="FORMULARIO A-1 R.G. PNA 3-036" />
        <div>
            <h1 className="uppercase text-center font-bold">Formulario de inspección</h1>
            <p className="text-center">(Formulario aplicable en Inspecciones Extraordinarias)</p>
            <hr></hr>
            <p className="uppercase font-bold text-center">DETALLE DEL BUQUE:</p>
        </div>
        <DetailVessel />
        <hr></hr>
        <SectionOne />
        <hr></hr>
        <Areas />
        <hr></hr>
        <Controles />
        <hr></hr>
        <Certificados />
        </div>
        </>
    )
}

export default Home;
