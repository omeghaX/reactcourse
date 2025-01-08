export const getGifts = async(categoria) =>{

    let gifs = []
    const categoryName = categoria.replace(/\s+/g, '');
    console.log(categoryName)
    try {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=RAJLLYhPKfRjogVMBstaCHnHiJ1NXqwL&q='${categoryName}'&limit=5`;
        
        console.log(url)
        const resp = await fetch(url);

        // Verifica si la respuesta es correcta
        if (!resp.ok) {
            throw new Error(`Error en la solicitud: ${resp.status} ${resp.statusText}`);
        }

        const responseBody = await resp.json();
        const { data } = responseBody;
        gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }))
        
        
    } catch (error) {
        
    }
    
    return gifs
}