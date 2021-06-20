//Controlers
function getStyle(element,value){
    return window.getComputedStyle(element).getPropertyValue(value)
}
const colorDefault = getStyle(document.querySelector(".btn-control"),"background-color")
function getBtn(){
    document.querySelectorAll(".btn-control").forEach(btn=>{
        getStyle(btn,"background-color")!=colorDefault?console.log(btn.id):0//Aqui coloca a função ou método que realiza a movimentação do player
    })
    
}
function loop(){
    getBtn()
    requestAnimationFrame(loop)
}
loop()
//---------------------------------------------------------------------