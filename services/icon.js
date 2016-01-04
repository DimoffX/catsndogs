define(function(require, exports, module){

var icon = null;

function init(){
//var imagePath = config.path + 'images/icon.png';

icon = $('<a title="Watch cats and relax" id="kitten-btn"></a>');
  
//icon.css('background', 'url(' + config.path + 'images/icon.png)');
icon.appendTo($("#main-toolbar .buttons"));
}

function click(handler){
if (icon === null){
throw new Error('Icon is not initialized');
}

icon.on('click', handler);
}

exports.init = init;
exports.click = click;
});
