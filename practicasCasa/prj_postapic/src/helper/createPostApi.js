export default function createPostApi(url, postData, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
    })
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("Error al hacer el createPostApi");
            }
            return respuesta.json();
        })
        .then((data) => callback(data))
        .catch((err) => console.error(err));
}