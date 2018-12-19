//boton flotante
document.addEventListener('DOMContentLoaded', () => {

    //obtener la imagen
    let imagneHero = document.querySelector('.hero');
    //inicializar las variables
    let i = 0 ;
    let tiempo = 0;
    
    //arreglo con imagenes de fondo

    const imagenes = ['arriba2.jpg','arriba3.jpg','arriba4.jpg','arriba.jpg'];

    setInterval( () => {

        imagneHero.style.backgroundPositionY = '-'+tiempo+'px';

        if(tiempo > 40){
            tiempo = 0;

            imagneHero.style.backgroundImage= "url(../img/"+imagenes[i]+")";

            if(i === imagenes.length - 1) {
                i = 0;
            }else {
                i++;
            }
           
        } 
        tiempo++;
        
    }, 100);

    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault();

        //prevenimos default, pero ejecutamos el siguiente codigo
        let footer = document.querySelector('#footer');

        if(footer.classList.contains('activo') ) {
            //si lo contiene, ejecuta este código
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Consultas';
            
        }else {
            //sino lo contiene, ejecuta este otro
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }
    });

});
