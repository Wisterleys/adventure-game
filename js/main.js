const control = new Control();
const cenario = $("#cenario")
const player = $("#player")
let vel =5
let directionX=0
let directionY=0
function loop(){
    if(control.getBtn()){
        switch(control.getBtn()){
            case"left":
            directionX=-1
            break
            case"right":
            directionX=1
            break
            case"up":
            directionY=-1
            break
            case"down":
            directionY=1
            break
        }
    }else directionY=directionX =0

    player.style.left=player.offsetLeft+(directionX*vel)+"px"
    player.style.top=player.offsetTop+(directionY*vel)+"px"
    requestAnimationFrame(loop)
}
loop()