const EOF = Symbol("EOF");

function data(c){
    if(c == "<" ){
        return tagOpen;
    }else if(c === EOF){
        return ;
    }else {
        return data;
    }
}

function tagOpen(c){
    if(c == '/'){
        return endTagOpen;
    }else if(c.match(/^[a-zA-Z]$/)){
        return tagName(c);
    }else{
        return ;
    }
}

function endTagOpen(c){
    if(c.match(/^[a-zA-Z]$/)){
        return tagName(c);
    }else if(c == ">"){
        
    }else if(c == EOF){
        
    }else{
        return ;
    }
}

module.exports.parseHTML = function parseHTML(html) {
    let state = data;
    for(let c of html){
        state = state(c);
    }
    state = state(EOF);
}