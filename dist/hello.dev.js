"use strict";

(function (window) {
  var word = "hello";

  var SpeakHello = function SpeakHello(name) {
    console.log(word + " " + name);
  };

  window.SpeakHello = SpeakHello;
})(window);