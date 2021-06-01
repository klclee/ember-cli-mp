window.mixpanel = {
  track: function(st, obj){
    console.log('mixpanel','track', st, obj);
  },
  track_links: function(element, st){
    console.log('mixpanel','track_links', element, st);
  },
  identify: function(st){
    console.log('mixpanel', 'identify',st);
  },
  alias: function(st){
    console.log('mixpanel', 'alias',st);
  },
  init: function(key){
    console.log('mixpanel', 'boot',key);
  },
  people: {
    set: function(st){
      console.log('mixpanel',st);
    }
  },
  track_charge: function(amount){
    console.log('mixpanel', 'charged', amount);
  },
  reset: function() {
    console.log('mixpanel', 'reset');
  }
}
