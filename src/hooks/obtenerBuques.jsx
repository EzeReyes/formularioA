import axios from "axios";
const url = "http://localhost:3001/buques";

export const obtenerBuques = async () => {
  try {
    const response = await axios.get(url);
    console.log("Buques:", response.data);
    return { status: 200, data: response.data };
  } catch (error) {
  console.error("Error al obtener buques:");
  if (error.response) {
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
  } else {
    console.error("Message:", error.message);
  }
    }
};