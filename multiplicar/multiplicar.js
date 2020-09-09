// requireds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('*********************'.green);
    console.log(`**** TABLA DEL ${base} ****`.green);
    console.log('*********************'.green, '\n');

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`.red);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}(del 1 al ${limite}).txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}(del 1 al ${limite}).txt`);

        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}