import users from './assets/modules.js';
/**
 * @author Sergio Jurado Trillo
 * @description crear un proyecto en javaScript que utilizando módulos y un archivo .json con información me permita a través de una serie de funciones,
 * guardar en el local storage el username, y el password encriptado. si el username ya esta repetido envia un mensaje de error.
 */

// ------ declaracion variable globales ------
//localStorage.clear();
const KEY = 'structUsers';
const KEY2 = 'usersPasswords';
let myStructureUsers = [];

// ------ declaracion de funciones ------

/**
 * @comment Función que coja el objeto usuario y lo guarde en el local storage
 * @param {String} key 
 * @param {Object} structureData 
 * @returns undefined;
 */
function insertUsersLocalStorage(key, structureData) {
    return localStorage.setItem(key, JSON.stringify(structureData));
}

/**
 * @comment Funcion que carga del local storage un key y la almacena en una estructura
 * @param {*} key 
 * @returns 
 */
function loadStructure(key) {
    // si no existe la key, devuelve null
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

/**
 * 
 * @param {Object} dataStructure 
 * @returns array
 */
function saveStructurePassword(key, dataStructure) {
    const tmpArray = [];
    dataStructure.map((user) => tmpArray.push({ [user.login.username]: btoa(user.login.password) }));
    return localStorage.setItem(key, JSON.stringify(tmpArray));
}

/**
 * 
 * @returns 
 */
function handleSave() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Debes de introducir username y password");
        return false;
    }
    const tmpArray = loadStructure(KEY2);
    let find = tmpArray.some((user) => user.hasOwnProperty(username));

    if (find) {
        alert(`El usuario con username ${username} ya está en el sistema`);
        return false;
    }
    // como no lo he encontrado, lo añado a mi tmpArray y luego lo guardo en localStorage
    tmpArray.push({ [username]: btoa(password) });

    insertUsersLocalStorage(KEY2, tmpArray);

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    alert(`Bienvenido ${username} al sistema`);
    return true;
}

/**
 * 
 */
function loadLocalStorageUsers() {
    let myTextArea = document.getElementById("infoUsers");
    const tmpArray = loadStructure(KEY2);
    let text = tmpArray.reduce(
        (acctxt, userpassword) => {
            for (let clave in userpassword) {
                acctxt += `Username: ${clave} \t\t Password : ${atob(userpassword[clave])}\n`;
            }
            return acctxt;
        }
        ,
        ""
    );
    myTextArea.value = text;

}


// ------ Captura de eventos del formulario -----
document.getElementById("save").addEventListener("click", handleSave);
document.getElementById("load").addEventListener("click", loadLocalStorageUsers);

function init() {
    /*if (!localStorage.hasOwnProperty(KEY)) {
        insertUsersLocalStorage(KEY, users);
    }*/
    !localStorage.hasOwnProperty(KEY) && insertUsersLocalStorage(KEY, users); // version 2.0
    myStructureUsers = loadStructure(KEY);
    !localStorage.hasOwnProperty(KEY2) && saveStructurePassword(KEY2, myStructureUsers);
}

// ------ inicio de la aplicación ------
init();