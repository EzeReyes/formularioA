import Areas from "../components/Areas";
import DetailVessel from "../components/DetailVessel";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import Title from "../components/Title";
import Controles from "../components/Controles";
import Certificados from "../components/Certificados";
import { obtenerBuques } from "../hooks/obtenerBuques";

const Home = () => {

    obtenerBuques();

    const handleDownload = async () => {
        const btn = await document.getElementById("btn-dwload");
        btn.style.display = "none";

        window.print();
    };
    

    return (
        <>
        <div className="text-xs" id="form">
        <Navbar />
        <Title />
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
        <button id="btn-dwload" onClick={handleDownload}>Descargar PDF</button>
        </>
    )
}

export default Home;
