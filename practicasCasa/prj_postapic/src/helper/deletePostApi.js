export function deletePostApi(url, postId, callback) {
    fetch(`${url}/${postId}`, {
        method: 'DELETE',
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al eliminar");
            }
            callback();
        })
        .catch((err) => console.error(err));
}