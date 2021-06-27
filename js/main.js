const control = new ControlMouse();
let play = new Player($(".cenario")[0]);
function loop(){//Loop principal
    console.log(this.play.directionX)
    if(control.getBtn()){
        switch(control.getBtn()){
            case"left":
            this.play.directionX=-1
            break
            case"right":
            this.play.directionX=1
            break
            case"up":
            this.play.directionY=-1
            break
            case"down":
            this.play.directionY=1
            break
        }
    }else this.play.directionY=this.play.directionX=0
    this.play.player.style.left=this.play.player.offsetLeft+(this.play.directionX*this.play.vel)+"px"
    this.play.player.style.top=this.play.player.offsetTop+(this.play.directionY*this.play.vel)+"px"
    requestAnimationFrame(this.loop)
}
loop()