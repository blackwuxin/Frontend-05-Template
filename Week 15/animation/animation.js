
const TICK =  Symbol('tick');
const TICK_HANDLE =  Symbol('tick-handle');
const ANIMATIONS = Symbol('animation');
const START_TIME = Symbol('start-time');
const PAUSE_START = Symbol('pause-start');
const PAUSE_TIME = Symbol('pause-time');

export class TimeLine{
    constructor(){
        this[ANIMATIONS] = new Set();
        this[START_TIME] = new Map();
    }
    start(){
        let startTime = Date.now();
        this[PAUSE_TIME] = 0;

        this[TICK] = ()=>{
            let now = Date.now();
            for(let animation of this[ANIMATIONS]){
                let t;
                if(this[START_TIME].get(animation) < startTime){
                    t = now - startTime - this[PAUSE_TIME];
                }else{
                    t = now - this[START_TIME].get(animation) - this[PAUSE_TIME];
                }

                if(animation.duration < t){
                    this[ANIMATIONS].delete(animation);
                    t = animation.duration;
                }
                    
                animation.revice(t);
            }
            this[TICK_HANDLE] = requestAnimationFrame(this[TICK]);
        }
        this[TICK]();
    }
    pause(){
        this[PAUSE_START] = Date.now();
        cancelAnimationFrame(this[TICK_HANDLE]);
    }
    resume(){
        this[PAUSE_TIME] += Date.now() - this[PAUSE_START]
        this[TICK]();
    }

    add(animation,addTime){
        if(arguments.length<2){
            addTime = Date.now();
        }
        this[ANIMATIONS].add(animation);
        this[START_TIME].set(animation,addTime);
    }
}

export class Animation{
    constructor(object,property,startValue,endValue,duration,delay,timingFucntion,template){
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFucntion = timingFucntion;
        this.delay = delay;
        this.template = template;
    }

    revice(time){

        let range = this.endValue - this.startValue;
        this.object[this.property] = this.template(this.startValue + range*time/this.duration);
    }
}