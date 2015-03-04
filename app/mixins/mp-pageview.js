import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Mixin.create({
  pageViewMp: function(){
    var mpConfig = ENV.mixpanel;

    if(mpConfig == null){
      mpConfig = {
        pageViewEventName: 'visit',
        pageViewPropertyName: 'url',
        trackAsPage: true
      }
      Ember.warn('No mixpanel info set in environment.js using defaults');
    }


    var eventValue = this.get('url');
    if(!mpConfig.trackAsPage){
      eventValue = this.router.currentHandlerInfos[1].name;
    }

    var mpEventProperty = {};
    mpEventProperty[mpConfig.pageViewPropertyName] = eventValue;
    mixpanel.track(mpConfig.pageViewEventName, mpEventProperty);
  }.on('didTransition')
});
