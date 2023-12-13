export async function getPokemon(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Error al obtener el pokemon');
    }
}