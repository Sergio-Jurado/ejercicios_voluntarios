/**
 * Función para buscar comida
 * @param {*} url 
 * @param {*} element 
 * @param {*} callback 
 */
export function findFoodApi(url, element, callback) {
    const newData = [];
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la respuesta de la solicitud');
            }
        })
        .then(data => {
            data.forEach(comida => {
                if (comida.strCategory.toLowerCase().indexOf(element) !== -1) {
                    newData.push(comida);
                }
            });

            if (newData.length === 0) {
                callback(data);
            } else {
                console.log(newData);
                callback(newData);
            }
        })
        .catch(error => {
            console.error('Hubo un error al obtener los datos:', error);
        });
}