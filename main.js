define(function (require, exports, module) {
  var iconService = require('./services/icon'),
    Dialogs = brackets.getModule('widgets/Dialogs'),
    view = require('text!templates/modal.html'),
    ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
    cats = null;


  ExtensionUtils.loadStyleSheet(module, 'styles/styles.css');


  iconService.init();
  iconService.click(function () {
    setTimeout(function() {
      Dialogs.showModalDialogUsingTemplate(view);
    },500)

    
  });

});