//------------- Imports ----------------------------
import { renderPost } from "./src/components/renderPost/renderPost";
import { createPostApi } from "./src/helper/createPostApi";
import { deletePostApi } from "./src/helper/deletePostApi";
import { getPostApi } from "./src/helper/getPostApi";
import { updatePostApi } from "./src/helper/updatePostApi";
const URL = `${import.meta.env.VITE_URL}/posts`;

//------------- Varibles Grobales --------------------
const postList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");

const titlePost = document.querySelector("#title-post");
const contentPost = document.querySelector("#content-post");
console.log(titlePost);
console.log(contentPost);
//------------- Funciones ---------------------------
addPostForm.addEventListener("submit", (e) => {
    // esoty escuchando el evento submit del formulario.
    e.preventDefault();

    const button = addPostForm.querySelector(".btn");

    // compruebo que los campos tenga campos
    if (!(titlePost.value && contentPost.value)) {
        alert("Los campos deben de estar con informacion");
        return;
    }
    // ---------------------- añadiendo -----------------
    const postData = {
        title: titlePost.value,
        post: contentPost.value,
    };

    console.log(postData);
    createPostApi(URL, postData, (data) => {
        console.log(data);
        renderPost(postList, [data]);
    });

    e.target.reset();
    // -------------------------------------------------

    //------------------------- Editando ------------------------------------------
    if (button.classList.contains("btn-secondary")) {
        const idEdit = button.dataset.id;
        //Accedo a la Api y actualizo el campo de dicho id
        const updateData = {
            id: idEdit,
            title: titlePost.value,
            post: contentPost.value
        };

        updatePostApi(URL, updateData, (post) => {
            //modifico el dom
            const cardDataId = postList.querySelector(`[data-id="${post.id}"]`);

            const cardTitle = cardDataId.querySelector(".card-title");
            cardTitle.textContent = post.title;

            const cardText = cardDataId.querySelector(".card-text");
            cardText.textContent = post.post;

            boton.classList.remove("btn-secondary");
            boton.textContent = "Añadir Post";
            boton.dataset.id = "";

            addPostForm.reset();
        });
        return;
    }
    //---------------------------------------------------------------------------
});

postList.addEventListener("click", (e) => {
    e.preventDefault();

    let editBtnPress = e.target.id == "edit-post";
    let deleteBtnPress = e.target.id == "delete-post";
    const postId = e.target.parentElement.dataset.id;
    const card = e.target.closest(".card");

    // Eliminar card
    if (deleteBtnPress) {
        deletePostApi(URL, postId, () => {
            // ahora busco en el dom el elemento con ID --> postId y lo remove()
            card.remove();
        });
        return;
    }

    // Editar card
    if (editBtnPress) {
        const button = addPostForm.querySelector(".btn");
        button.classList.add("btn-secondary");
        card.classList.add("selected");

        button.textContent = "Editar Post";

        button.dataset.id = postId;

        const titleCardEdit = card.querySelector(".card-title");
        const textCardEdit = card.querySelector(".card-text");

        titlePost.value = titleCardEdit.textContent.trim();
        contentPost.value = textCardEdit.textContent.trim();

    }
});

//---------------- Inicializar ---------------
function init() {
    // Traerme todos los post de mi api.
    getPostApi(URL, (data) => {
        renderPost(postList, [data]);
    });
}
document.addEventListener("DOMContentLoaded", init);