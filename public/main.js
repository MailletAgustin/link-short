let quickviews;

document.getElementById('generateLinkForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Revisar si será un link protegido por contraseña
    let protected = protectionChange(document.getElementById('protectedCheckbox'));
    if (protected) {
        // alert('Protegido con contraseña');
        // Mostrar password input y hacerlo required
    } else {
        // Generar 
        // alert('Sin contraseña');
    }
});

document.getElementById('largeUrlField').addEventListener('keyup', () => {

});

function protectionChange(checkbox) {
    return checkbox.checked;
}

document.addEventListener("DOMContentLoaded", function() {
    let quickviews = bulmaQuickview.attach();
});