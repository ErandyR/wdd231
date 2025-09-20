const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

let oLastModif = new Date(document.lastModified);

const lastMod = document.querySelector("#lastModified");

lastMod.innerHTML = oLastModif;