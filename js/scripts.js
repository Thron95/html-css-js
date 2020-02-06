function mostrarDispositivo(){
    
    document.getElementById('popover__content_2').style.visibility = 'hidden'
    document.getElementById('popover__content_3').style.visibility = 'hidden'
    document.getElementById('popover__content_2').style.transform = 'translate(0, +20px)'
    document.getElementById('popover__content_3').style.transform = 'translate(0, -20px)'

    var x = document.getElementById('popover__content_1')
        x.style.visibility = 'visible'
        x.style.opacity = '1'
        x.style.transform = 'translate(0, -20px)'
        x.style.transition = 'all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)'
        document.getElementById('popover__triangulo_1').style.display = 'block'
        document.getElementById('popover__triangulo_1').style.right = 'calc(50% + 120px)'
}
function mostrarAccesorio(){
    
    

    document.getElementById('popover__content_1').style.transform = 'translate(0, +20px)'
    document.getElementById('popover__content_3').style.transform = 'translate(0, +20px)'

    document.getElementById('popover__content_1').style.visibility = 'hidden'
    document.getElementById('popover__content_3').style.visibility = 'hidden'

    var x = document.getElementById('popover__content_2')
        x.style.visibility = 'visible'
        x.style.opacity = '1'
        x.style.transform = 'translate(0, -20px)'
        x.style.transition = 'all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)'
        document.getElementById('popover__triangulo_2').style.display = 'block'
        document.getElementById('popover__triangulo_2').style.right = 'calc(50%)'


}

function mostrarPeriferico(){
    
    document.getElementById('popover__content_1').style.visibility = 'hidden'
    document.getElementById('popover__content_2').style.visibility = 'hidden'

    document.getElementById('popover__content_1').style.transform = 'translate(0, +20px)'
    document.getElementById('popover__content_2').style.transform = 'translate(0, +20px)'
    
    var x = document.getElementById('popover__content_3')
        x.style.visibility = 'visible'
        x.style.opacity = '1'
        x.style.transform = 'translate(0, -20px)'
        x.style.transition = 'all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)'
        document.getElementById('popover__triangulo_3').style.display = 'block'
        document.getElementById('popover__triangulo_3').style.right = 'calc(50% - 140px)'     

}


function cancelar(id){
    document.getElementById(id).style.transform = 'translate(0, +20px)'
    document.getElementById(id).style.visibility = 'hidden'
}

function mostrarTabla(titulo){
    document.getElementById('tablaContent').style.display = 'block'
    document.getElementById('divTitulo').style.display = 'block'
    document.getElementById('divTitulo').innerHTML = titulo

    document.getElementById('popover__content_1').style.transform = 'translate(0, +20px)'
    document.getElementById('popover__content_1').style.visibility = 'hidden'

    document.getElementById('popover__content_2').style.transform = 'translate(0, +20px)'
    document.getElementById('popover__content_2').style.visibility = 'hidden'

    document.getElementById('popover__content_3').style.transform = 'translate(0, +20px)'
    document.getElementById('popover__content_3').style.visibility = 'hidden'

}
function cerrarTabla(){
    document.getElementById('tablaContent').style.display = 'none'
    document.getElementById('divTitulo').style.display = 'none'
}

        