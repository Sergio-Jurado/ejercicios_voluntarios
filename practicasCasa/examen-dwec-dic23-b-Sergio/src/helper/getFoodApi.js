/**
 * Función utilizada para obtener todas las comidad de la API
 * @param {URL} url 
 * @param {callback} callback 
 */
export function getFoodApi(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error de getFoodApi");
            }
            return response.json();
        })
        .then((data) => callback(data))
        .catch((err) => console.error(err))
}