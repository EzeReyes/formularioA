import FormA2 from "./pages/FormA-2"
import FormB from "./pages/FormB";
import Home from "./pages/Home"

function App() {

    const handleDownload = async () => {
        const btn = await document.getElementById("btn-dwload");
        btn.style.display = "none";
        
        window.print();
    };

  return (
    <>
      <Home />
      <FormA2 />
      <FormB />
      <button id="btn-dwload" onClick={handleDownload}>Descargar PDF</button>
    </>
  )
}

export default App
