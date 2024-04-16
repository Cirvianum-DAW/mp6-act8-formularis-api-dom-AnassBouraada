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

    //4. L'usuari ha de ser major d'edat per registrar-se. Aquesta validació depèn de la data de naixement proporcionada. Heu de calcular l'edat de l'usuari i mostrar un missatge d'alerta si és menor de 18 anys.
        const dataNaixement = new Date(data_naixement);
        const avui = new Date();
        const edat = avui.getFullYear() - dataNaixement.getFullYear();
        if (avui.getMonth() < dataNaixement.getMonth() || (avui.getMonth() === dataNaixement.getMonth() && avui.getDate() < dataNaixement.getDate())) {
            edat--;
        }
        if (edat < 18) {
            alert("Has de ser major d'edat per registrar-te");
            return;
        }

            //5. El camp del DNI/NIF ha de tenir un format vàlid. Utilitzeu l'expressió regular proporcionada a continuació per validar aquest camp:
    const dniRegex = /^[a-zA-Z0-9]?[0-9]{7,8}[a-zA-Z0-9]?$/;
    if (!dniRegex.test(dni)) {
        alert("El DNI/NIF no és vàlid.");
        return;
    }

    const formData = {
        name,
        surname,
        email,
        password,
        dni,
        birthdate,
        gender,
    }

    sessionStorage.setItem('formData', JSON.stringify(formData));

    const storedFormData = sessionStorage.getItem('formData');
    console.log(storedFormData);

    window.location.href = '../ex2/exercici2.html';





    });