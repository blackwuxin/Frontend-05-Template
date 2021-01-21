let element = document.documentElement;

element.addEventListener("mousedown",event=>{
    start(event);
    let mousemove = event => {
        move(event);
    };
    let mouseup = event => {
        end(event);
        element.removeEventListener("mousemove",mousemove);
        element.removeEventListener("mouseup",mouseup);

    };
    element.addEventListener("mousemove",mousemove);
    element.addEventListener("mouseup",mouseup);

});

element.addEventListener("touchstart",event=>{
    for(let touch of event.changedTouches){
       start(touch)
    }

});
element.addEventListener("touchmove",event=>{
    for(let touch of event.changedTouches){
       move(touch)
    }

});
element.addEventListener("touchend",event=>{
    for(let touch of event.changedTouches){
        end(touch)
    }

});

element.addEventListener("touchcancel",event=>{
    for(let touch of event.changedTouches){
        cancel(touch)
    }

});

let handler;
let startX,startY;
let isPan = false,isTap = true,isPress = false;

let start = (point) =>{
    startX = point.clientX,startY = point.clientY;

    isPan = false;
    isTap = true;
    isPress = false;

    handler = setTimeout(()=>{
        isPan = false;
        isTap = false;
        isPress = true;
        handler = null;
        console.log("press");
    },500)
};

let move = (point) =>{
    let dx = point.clientX - startX,dy= point.clientY - startY;
    
    if(!isPan && dx ** 2 + dy ** 2 > 100){
        isPan = true;
        isTap = false;
        isPress = false;
        console.log('panstart');
        clearTimeout(handler);
    }
    
    if(isPan){
        console.log(dx,dy);
        console.log('pan');
    }
    // console.log("move",point.clientX,point.clientY);
};

let end = (point) =>{
    if(isTap){
        console.log('tap');
        clearTimeout(handler);
    }
    if(isPan){
        console.log('panend');
    }
    if(isPress){
        console.log('pressend');
    }
    // console.log("end",point.clientX,point.clientY);
};

let cancel = (point) =>{
    clearTimeout(handler);
    // console.log("cancel",point.clientX,point.clientY);
};
