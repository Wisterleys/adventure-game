class Player{
    constructor(place){
        this._player=$("#player")
        this._vel =5
        this._directionX=0
        this._directionY=0
        this.create(place);
    }
    
    create(place){
        /*
        #player{
            position: absolute;
            left: 0px;
            width: 50px;
            height: 50px;
            background-color: rgb(226, 43, 43);
        }
        */
        place.addEl({tag:"div",style:"position: absolute;left: 0px;width: 50px;height: 50px;background-color: rgb(226, 43, 43);",id:"player"})
    }
    //GETs and SETs
    get vel(){return this._vel}
    set vel(value){this._vel=value}
    get player(){return this._player}
    set player(value){this._player=value}
    get directionY(){return this._directionY}
    set directionY(value){this._directionY=value}
    get directionX(){return this._directionX}
    set directionX(value){this._directionX=value}
}