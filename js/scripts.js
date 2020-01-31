function mostrarDispositivo(){
    var x = document.getElementById('popover__content_1')
    document.getElementById('popover__content_2').style.visibility = 'hidden'
    document.getElementById('popover__content_3').style.visibility = 'hidden'


        x.style.visibility = 'visible'
        x.style.zIndex = '10'
        x.style.opacity = '1'
        x.style.transform = 'translate(0, -20px)'
        x.style.transition = 'all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)'
        document.getElementById('popover__triangulo_1').style.display = 'block'
        document.getElementById('popover__triangulo_1').style.right = 'calc(50% + 120px)'
}
function mostrarAccesorio(){
    var x = document.getElementById('popover__content_2')
    document.getElementById('popover__content_1').style.visibility = 'hidden'
    document.getElementById('popover__content_3').style.visibility = 'hidden'

        x.style.visibility = 'visible'
        x.style.zIndex = '10'
        x.style.opacity = '1'
        x.style.transform = 'translate(0, -20px)'
        x.style.transition = 'all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)'
        document.getElementById('popover__triangulo_2').style.display = 'block'
        document.getElementById('popover__triangulo_2').style.right = 'calc(50%)'


}

function mostrarPeriferico(){
    var x = document.getElementById('popover__content_3')
    document.getElementById('popover__content_1').style.visibility = 'hidden'
    document.getElementById('popover__content_2').style.visibility = 'hidden'

        x.style.visibility = 'visible'
        x.style.zIndex = '10'
        x.style.opacity = '1'
        x.style.transform = 'translate(0, -20px)'
        x.style.transition = 'all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)'
        document.getElementById('popover__triangulo_3').style.display = 'block'
        document.getElementById('popover__triangulo_3').style.right = 'calc(50% - 140px)'

        

}

// function mostrarFormulario(){
//     var x = document.getElementById('popover__content_1')
//     document.getElementById('popover__content_2').style.visibility = 'hidden'
//     document.getElementById('popover__content_3').style.visibility = 'hidden'
//         x.style.visibility = 'visible'
//         x.style.zIndex = '10'
//         x.style.opacity = '1'
//         x.style.transform = 'translate(0, -20px)'
//         x.style.transition = 'all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)'
//         document.getElementById('popover__triangulo_1').style.display = 'block'
        