/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mp',
  contentFor: function(type, config){
    if(type === 'head'){
      var mpConfig = config.mixpanel;
      var mpKey = null;
      if(mpConfig != null){
        mpKey = mpConfig.mpKey;
      }

      if( mpKey != null ){
        var mpInc = [
          '<script>',
          require('fs').readFileSync(__dirname + '/mp-include.js', {encoding: 'utf-8'}),
          "mixpanel.init('" + mpKey + "');",
          '</script>'
        ];
        return mpInc.join("\n");

      }else{

        var devMp = [
        '<script>',
        'window.mixpanel = {',
        'track: function(st, obj){',
        "console.log('mixpanel','track', st, obj);",
        '},',
        'identify: function(st){',
        "console.log('mixpanel', 'identify',st);",
        '},',
        'alias: function(st){',
        "console.log('mixpanel', 'alias',st);",
        '},',
        'people: {',
        'set: function(st){',
        "console.log('mixpanel',st);",
        '},',
        'track_charge: function(amount){',
        "console.log('mixpanel', 'charged', amount);",
        '}}};',
        '</script>'];
        return devMp.join("\n");
      }
    }
  }
};
