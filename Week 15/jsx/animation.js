
const TICK =  Symbol('tick');
const TICK_HANDLE =  Symbol('tick_handle');

export class TimeLine{
    constructor(){
        this[TICK] = ()=>{
            console.log('tick');
            requestAnimationFrame(this[TICK]);
        }
    }
    start(){
        this[TICK]();
    }
    pause(){}
    reset(){}
}