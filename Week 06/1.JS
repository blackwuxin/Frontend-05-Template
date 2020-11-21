function string2code(str){
    var bytes = []; // char codes
    for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        
        bytes = bytes.concat([code]);
      
      }
      console.log('bytes', bytes.join(', '));
    return bytes;
}

var str = "Hello竜";

string2code(str);
                          


class Dog{

}

class Human{
    hurt(damage){
        
    }
}