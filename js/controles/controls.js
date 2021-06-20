//Controlers
function getStyle(element,value){
    return window.getComputedStyle(element).getPropertyValue(value)
}
const colorDefault = getStyle($(".btn-control")[0],"background-color")
function getBtn(){
    $(".btn-control").forEach(btn=>{
        getStyle(btn,"background-color")!=colorDefault?console.log(btn.id):0//Aqui coloca a função ou método que realiza a movimentação do player
    })
    
}
function loop(){
    getBtn()
    requestAnimationFrame(loop)
}
loop()
//---------------------------------------------------------------------