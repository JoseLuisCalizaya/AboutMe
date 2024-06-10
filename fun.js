function mostrar(){
    //Nombre Completo
    var name = document.getElementById("nombre").value;
    var Correo = document.getElementById("correo").value;
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("post").value = "";
    alert("Estimado: " + name + " se envio su mensajesss con el correo " + Correo);
}

function change(){
    document.body.style.backgroundImage = "url(Image/f1.jpg)";
}


const colorBoxes = document.querySelectorAll('.i4');

        colorBoxes.forEach(colorBox => {
            colorBox.addEventListener('mouseover', () => {
                colorBox.style.background = 'radial-gradient(white, darkgreen)';
        });


        colorBox.addEventListener('mouseout', () => {
            colorBox.style.background = 'radial-gradient(mediumseagreen, white)';
        });
    });

const index3 = document.querySelectorAll('.i3');

    index3.forEach(colorBox => {
        colorBox.addEventListener('mouseover', () => {
            colorBox.style.background = 'radial-gradient(white, pink)';
    });


    colorBox.addEventListener('mouseout', () => {
        colorBox.style.background = 'white';
    });
});

const pic = document.getElementById('por');

        const img1 = 'Image/me.jpg';
        const img2 = 'Image/portada.jpg';
        pic.addEventListener('mouseover', () => {
            pic.src = img2;
        });

        pic.addEventListener('mouseout', () => {
            pic.src = img1;
        });