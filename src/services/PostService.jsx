
const URL = 'https://graph.facebook.com/v20.0/me?fields=id%2Cname%2Cposts%7Bmessage%2Cicon%2Cvideo_buying_eligibility%2Clink%2Cfull_picture%7D&access_token='
const TOKEN = import.meta.env.VITE_TOKEN
export const getDataProfile = async () =>{
    try {
        const response = await fetch(
            `${URL}${TOKEN}`
        )
        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error al cargar la data", error);
        throw new Error("Error al cargar la data");
        
    }
}