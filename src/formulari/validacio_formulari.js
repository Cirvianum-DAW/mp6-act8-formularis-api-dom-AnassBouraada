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
        const edat = dataNaixement.getFullYear(); - avui.getFullYear();

        if (edat < 18) {
            alert("Has de ser major d'edat per registrar-te.");
            return;
          }

    // Exemple de validació: Verificar el format del DNI/NIF
    const idNumberRegex = /^[0-9A-Za-z]{1,10}$/;
    if (!idNumberRegex.test(dni)) {
      alert('El DNI/NIF no té un format vàlid.');
      return;
    }

    if (!termsAccepted) {
        alert('Has de accepytar els termes i condicines de la pagina fill de puta');
        return;
    }

    const formData = {
        nom,
        cognoms,
        email,
        contrasenya,
        data_naixement,
        dni,
        termsAccepted,
    }

    sessionStorage.setItem('formData', JSON.stringify(formData));

    const storedFormData = sessionStorage.getItem('formData');
    console.log(storedFormData);

    window.location.href = 'infoMeteorologica.html';

});