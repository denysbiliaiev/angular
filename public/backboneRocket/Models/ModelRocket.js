var RocketModel = Backbone.Model.extend({
    defaults: {
        name: 'name',
        size: 1,
        description: 'desc'
    },

    initialize: function() {
        console.log('model init');
    },

    validate: function(attrs) {
        if (attrs.size < 0 || attrs.size > 100) {
            return "inc size";
        }
    }
});

var RocketsCollection = Backbone.Collection.extend({
    model: RocketModel,
    sortParam: 'size',
    sortMode: 1,
    comparator: function(a,b) {
        if (a.get(this.sortParam) > b.get(this.sortParam)) return -1*this.sortMode;
        if (a.get(this.sortParam) < b.get(this.sortParam)) return this.sortMode;
        return 0;
    }
});