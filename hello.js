(function(window){
    var word = "hello";
    var SpeakHello = function(name){
        console.log(word+" "+name);
    }
    window.SpeakHello = SpeakHello;

})(window)