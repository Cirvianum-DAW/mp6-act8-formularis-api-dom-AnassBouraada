//validar si tots els camps estan omplerts
// document
//     .getElementById('registerForm')
//     .addEventListener('submit', function (event){
//         event.preventDefault();
//         const camps = this.querySelectorAll(".camp");
//         if (camps.length !== 8) {
//             alert("Has d'omplir tots els camps obligatoris");
//         }
// });  

document
    .getElementById('registerForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value;
        const cognoms = document.getElementById('cognoms').value;
        const email = document.getElementById('email').value;
        const contrasenya = document.getElementById('contrasenya').value;
        const data_naixement = document.getElementById('data_naixement').value;
        const dni = document.getElementById('dni').value;
        const termsAccepted = document.getElementById('accepta').checked;

        if (!nom || !cognoms || !email || !contrasenya || !data_naixement || !dni) {
            alert("Has d'omplir tots els camps obligatoris");
            return;
        }

        if (!termsAccepted) {
            alert("Has d'acceptar els termes i condicions");
            return;
        }

        if (contrasenya.length < 6) {
            alert("La contrasenya ha de tenir 6 caracters");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Email no vàlid");
            return;
        }


    });