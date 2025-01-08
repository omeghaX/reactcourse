export const login = async(mail, pass) => {

    let gifs = ''
    try {
        const url = `https://asapicentromedico-fjakfrdvhwa2h4ca.canadacentral-01.azurewebsites.net/api/users/login?mail=${mail}&pass=${pass}`;
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Asegúrate de indicar que el cuerpo es JSON
            }
        };

        const resp = await fetch(url, options);

        // Verifica si la respuesta es correcta
        if (!resp.ok) {
            throw new Error(`Error en la solicitud: ${resp.status} ${resp.statusText}`);
        }

        const responseBody = await resp.json();
        
        gifs = responseBody.response
        
        
    } catch (error) {
        
    }
    
    return gifs


}