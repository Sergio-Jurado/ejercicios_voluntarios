export default function updatePostApi(url, updateData, callback) {
    fetch(`${url}/${updateData.id}`, {
        method: 'UPDATE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error updating post");
            }
            return response.json();
        })
        .then((data) => callback(data))
        .catch((err) => console.error(err));
}