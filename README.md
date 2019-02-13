## Ember-cli-mp

Made this as I made a terrible suggestion on how this should be done on coderwall. This should be better.
Inspired by [ember-cli-google-analytics](https://github.com/pgrippi/ember-cli-google-analytics). This extension will do 2 things.

* Insert mixpanel lib so the global ```mixpanel``` object is available. Default to ```console.log``` if key is not present.
* A mixin that tracks your route visits either as URL or route name. With configureable event name, property.

**NOTE: for Ember >= 2.18 please use version 0.1.7 else use 0.1.6**
**NOTE BREAKING change from version >=0.1.10**


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


#### For version <0.1.10
```javascript
ENV.mixpanel = {
  pageViewEventName: 'visit',
  pageViewPropertyName: 'url',
  trackAsPage: true,
  mpKey: 'YOUR MIXPANEL KEY'
};
```

Just remove the ```mpKey``` property for development environment to have the tracking print out in console.

#### For version >=0.1.10
```javascript
ENV.mixpanel = {
  pageViewEventName: 'visit',
  pageViewPropertyName: 'url',
  trackAsPage: true,
  debug: true
};
```

Use the `debug` property to decide weather to use the mixpanel JS or just print `console.log`.

To actually boot up mixpanel issue the following (most likely in application route): `mixpanel.init('mixpanel token')`


Hopefully most of these are self explain. It will use the ```track``` function for pageView tracking. So with the above config you are doing the following:

```javascript

mixpanel.track('visit', {url: 'someUrl'});

```

### tracking as url or route name.

If you set ```trackAsPage``` to false it will use ```router.currentHandlerInfos``` to get the route name and track view that way.

### tracking everything else

The ```mixpanel``` is available in global scope. So all mixpanel function stay as its.

### Stubbing mixpanel object when debug is false and init is not called (For version >=0.1.10)

When this happens the mixpanel object is not created properly you can use a provided mixin to stub out the calls to mixpanel:

```javascript
import MpStubs from "<app_name>/mixins/mp-stubing";

export default Route.extend(MpStubs,{})
```
