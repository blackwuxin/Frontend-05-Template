let element = document.documentElement;
let contexts = new Map();
let isListenerMouse = false ;
element.addEventListener("mousedown", (event) => {
    console.log('mousedown',event.button);
    let context = Object.create(null);
    contexts.set("mouse"+(1 << event.button), context); 
    start(event,context);

    let mousemove = (event) => {
        // event.buttons 使用掩码表示哪些为被按下去了 
        let button = 1;
        while(button <= event.buttons){
            if(button & event.buttons){
                
                // order of buttons & button property is not same 
                let key;
                if(button === 2){
                    key = 4;
                }else if(button === 4){
                    key = 2;
                }else{
                    key = button;
                }
                let context = contexts.get("mouse"+key); 
                move(event,context);
            }
            button = button << 1;
        }
    };
    let mouseup = (event) => {
        let context = contexts.get("mouse"+(1 << event.button)); 
        end(event,context);
        contexts.delete("mouse"+(1 << event.button));
        if(event.buttons === 0 ){
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
            isListenerMouse = false;
        }

    };
    if(!isListenerMouse){
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
        isListenerMouse = true;
    }
   
});



element.addEventListener("touchstart", (event) => {
    for (let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        start(touch, context);
    }
});
element.addEventListener("touchmove", (event) => {
    for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        move(touch, context);
    }
});
element.addEventListener("touchend", (event) => {
    for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        end(touch, context);
        contexts.delete(touch.identifier);
    }
});

element.addEventListener("touchcancel", (event) => {
    for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        cancel(touch, context);
        contexts.delete(touch.identifier);
    }
});

let start = (point, context) => {
    (context.startX = point.clientX), (context.startY = point.clientY);
    
    context.points = [{
        t:Date.now(),
        x:point.clientX,
        y:point.clientY
    }];

    context.isPan = false;
    context.isTap = true;
    context.isPress = false;

    context.handler = setTimeout(() => {
        context.isPan = false;
        context.isTap = false;
        context.isPress = true;
        context.handler = null;
        console.log("press");
    }, 500);
};

let move = (point, context) => {
    let dx = point.clientX - context.startX,
        dy = point.clientY - context.startY;

    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
        context.isPan = true;
        context.isTap = false;
        context.isPress = false;
        console.log("panstart");
        clearTimeout(context.handler);
    }

    if (context.isPan) {
        console.log(dx, dy);
        console.log("pan");
    }
    context.points = context.points.filter(point=> Date.now() - point.t < 500);

    context.points.push({
        t:Date.now(),
        x:point.clientX,
        y:point.clientY
    });

    // console.log("move",point.clientX,point.clientY);
};

let end = (point, context) => {
    if (context.isTap) {
        dispatch("tap",{});
        clearTimeout(context.handler);
    }
    if (context.isPan) {
        dispatch("pandend",{});
        console.log("panend");
    }
    if (context.isPress) {
        dispatch("pressend",{});
        console.log("pressend");
    }

    let d,v;
    if(!context.points.length){
        v = 0;
    }else{
        d = Math.sqrt((point.clientX - context.points[0].x) ** 2 + (point.clientY - context.points[0].y) ** 2);
        v = d / (Date.now() - context.points[0].t);
    }

    if(v > 1.5){
        console.log("flick");
        dispatch("flick",{});
        context.isFlick = true;
    }else {
        context.isFlick = false;
    }
    // console.log("end",point.clientX,point.clientY);
};

let cancel = (point, context) => {
    clearTimeout(context.handler);
    // console.log("cancel",point.clientX,point.clientY);
};

function dispatch(type,properites){
    let event = new Event(type);
    for(let name in properites){
        event[name] = properites[name];
    }
    element.dispatchEvent(event);
}