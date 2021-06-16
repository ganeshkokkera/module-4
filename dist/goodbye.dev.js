"use strict";

(function (window) {
  var word = "Good Bye";

  var Speakbye = function Speakbye(name) {
    console.log(word + " " + name);
  };

  window.Speakbye = Speakbye;
})(window);