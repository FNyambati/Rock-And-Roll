import Ember from 'ember';

var Band = Ember.Object.extend({
  name: '',
});

export default Ember.Route.extend({
  model: function() {
    var ledZepplin = Band.create({name: 'Led Zepplin'});
    var pearlJam = Band.create({name: 'Pearl Jam'});
    var fooFighters = Band.create({name: 'Foo Fighters'});

    return  [ledZepplin, pearlJam, fooFighters];
  }
});
