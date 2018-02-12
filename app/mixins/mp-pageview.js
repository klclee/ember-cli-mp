import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Mixin.create({
  router: Ember.inject.service(),
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

    var eventValue = this.get('router.currentURL');
    if(!mpConfig.trackAsPage){
      eventValue = this.get('router.currentRouteName')
    }


    var mpEventProperty = {};
    mpEventProperty[mpConfig.pageViewPropertyName] = eventValue;
    mixpanel.track(mpConfig.pageViewEventName, mpEventProperty);
  }.on('didTransition')
});
