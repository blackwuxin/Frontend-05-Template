
const TICK =  Symbol('tick');
const TICK_HANDLE =  Symbol('tick_handle');
const ANIMATIONS = Symbol('animation');
export class TimeLine{
    constructor(){
        this[ANIMATIONS] = new Set();
    }
    start(){
        let startTime = Date.now();
        this[TICK] = ()=>{
            for(let animation of this[ANIMATIONS]){
                animation.revice(Date.now() - startTime);
            }
            requestAnimationFrame(this[TICK]);
        }
        this[TICK]();
    }
    pause(){}
    reset(){}

    add(animation){
        this[ANIMATIONS].add(animation);
    }
}

export class Animation{
    constructor(object,property,startValue,endValue,duration,timingFucntion){
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFucntion = timingFucntion;
    }

    revice(time){
        console.log(time);
        let range = this.endValue - this.startValue;
        this.object[this.property] = this.startValue + range*time/this.duration;
    }
}