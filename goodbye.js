(function(window){
    var word = "Good Bye";
    var Speakbye = function(name){
        console.log(word+" "+name);
    }
    window.Speakbye = Speakbye;

})(window)