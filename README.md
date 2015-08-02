## Ember-cli-mp

Made this as I made a terrible suggestion on how this should be done on coderwall. This should be better.
Inspired by [ember-cli-google-analytics](https://github.com/pgrippi/ember-cli-google-analytics). This extension will do 2 things.

* Insert mixpanel lib so the global ```mixpanel``` object is available. Default to ```console.log``` if key is not present.
* A mixin that tracks your route visits either as URL or route name. With configureable event name, property.

## Installation

```
ember install:addon ember-cli-mp
```

## Enable Page View tracking

Installing this add-on gives you the ```mixpanel``` object. To track page views you will need to add the following to your ```router.js```

```javascript
import MpPageView from 'app-name/mixins/mp-pageview';

var Router = Ember.Router.extend(MpPageView,{
  location: config.locationType
});
```

### Config

In your ```config\environment.js``` add the following to set up to the right environment:

```javascript
ENV.mixpanel = {
  pageViewEventName: 'visit',
  pageViewPropertyName: 'url',
  trackAsPage: true,
  mpKey: 'YOUR MIXPANEL KEY'
};
```

Just remove the ```mpKey``` property for development environment to have the tracking print out in console.

Hopefully most of these are self explain. It will use the ```track``` function for pageView tracking. So with the above config you are doing the following:

```javascript

mixpanel.track('visit', {url: 'someUrl'});

```

### tracking as url or route name.

If you set ```trackAsPage``` to false it will use ```router.currentHandlerInfos``` to get the route name and track view that way.

### tracking everything else

The ```mixpanel``` is available in global scope. So all mixpanel function stay as its.
