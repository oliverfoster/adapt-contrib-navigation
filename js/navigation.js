define([
    'adapt-contrib-core/js/adapt',
    './views/navigationView'
], function(Adapt, NavigationView) {

    require.config({
      map: {
        '*': {
          'core/js/views/navigationView': 'adapt-contrib-navigation/js/views/navigationView',
          'adapt-contrib-core/js/views/navigationView': 'adapt-contrib-navigation/js/views/navigationView'
        }
      }
    });

    Adapt.on("navigation:initialize", function() {
        Adapt.navigation = new NavigationView();
    });


});
