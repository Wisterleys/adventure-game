class Control{
    constructor(){
        this._colorDefault = this.getStyle($(".btn-control")[0],"background-color")
    }
    getStyle(element,value){
        return window.getComputedStyle(element).getPropertyValue(value)
    }
    getBtn(){
        let bnt = null
        $(".btn-control").forEach(btn=>{
            this.getStyle(btn,"background-color")!=this.colorDefault?bnt=btn.id:0//Aqui coloca a função ou método que realiza a movimentação do player
        })
        return bnt;
    }
// GETs and SETs
get colorDefault(){return this._colorDefault}
}

//---------------------------------------------------------------------