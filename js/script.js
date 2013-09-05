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

function callBack() {
    var call = document.getElementById
}