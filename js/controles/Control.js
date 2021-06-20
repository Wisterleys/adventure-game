class Control{
    constructor(){
        this._colorDefault = this.getStyle($(".btn-control")[0],"background-color")
    }
    getStyle(element,value){
        return window.getComputedStyle(element).getPropertyValue(value)
    }
    getBtn(){
        $(".btn-control").forEach(btn=>{
            this.getStyle(btn,"background-color")!=this.colorDefault?console.log(btn.id):0//Aqui coloca a função ou método que realiza a movimentação do player
        })
        
    }
// GETs and SETs
get colorDefault(){return this._colorDefault}
}

//---------------------------------------------------------------------