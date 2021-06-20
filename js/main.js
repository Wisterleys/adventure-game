const control = new Control();

function loop(){
    control.getBtn()
    requestAnimationFrame(loop)
}
loop()