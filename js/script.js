(function(){
    
var buttons = document.getElementsByTagName('button');


var buttonClick = function() {
        var className = this.innerHTML.toLowerCase();
        document.body.className = className;
    };

for ( var i=0, len = buttons.length; i < len; i++ ) {    
    buttons[i].addEventListner('click', buttonClick,  )
}
    
}());

var addEvent = function (el, type, fn) {
    if (typeof addEventListener !== "undefined") {
        el.addEventListener(type, fn, false);
    } else if (typeof attachEvent !== "undefined") {
        el.attachEvent("on" + type, fn);
    } else {
        el["on" + type] = fn;
    }
};


var removeEvent = function (el, type, fn) {
    if (typeof removeEventListener !== "undefined") {
        el.removeEventListener(type, fn, false);
    } else if (typeof attachEvent !== "undefined") {
        el.removeEvent("on" + type, fn);
    } else {
        el["on" + type] = null;
    }
};
