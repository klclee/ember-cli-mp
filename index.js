/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mp',
  contentFor: function(type, config){
    if(type === 'head'){
      var mpConfig = config.mixpanel;
      var debug = true;
      if(mpConfig != null){
        debug = mpConfig.debug;
      }

      if( debug === false ){
        var mpInc = [
          '<script>',
          require('fs').readFileSync(__dirname + '/mp-include.js', {encoding: 'utf-8'}),
          '</script>'
        ];
        return mpInc.join("\n");

      }else{

        var devMp = [
        '<script>',
        require('fs').readFileSync(__dirname + '/mp-console.js', {encoding: 'utf-8'}),
        '</script>'];
        return devMp.join("\n");
      }
    }
  }
};
