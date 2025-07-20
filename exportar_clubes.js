const fs = require("node:fs")

let clubes = [] // Obtenerlo del backend

for (let club of clubes) {

    delete club.ciudad
    delete club.comunidadAutonoma
}

fs.writeFileSync("clubes.json", JSON.stringify(clubes))