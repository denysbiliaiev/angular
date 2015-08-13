var RocketsView = Backbone.View.extend({
    events: {
        'click .addObject':      'addObject',
        'click .toJSON':         'toJSON',
        'click [data-sort]':     'renderList'
    },

    initialize: function() {
        var self = this;
        this.template = _.template($('#viewRockets').html());
        this.$el.html(this.template());
        this.coll = new RocketsCollection();
        this.listenTo(this.coll, 'all', this.render);
        this.listenTo(this.coll, 'add', this.addOne);
    },

    render: function() {
        var size = 0;

        this.coll.each(function(model, index){
            size += model.get('size');
        });

        this.$('.rockets-count').text(this.coll.length);
        this.$('.rockets-size').text(size);
    },

    addObject: function() {
        this.coll.add({});
    },

    addOne: function(model) {
        var view = new RocketView({model: model});
        this.$('.rocketsList').append(view.render());
    },

    toJSON: function() {
        this.$('.json-out').html(JSON.stringify(this.coll.toJSON()));
    },

    renderList: function(event) {
        this.$('.rocketsList').html('');
        this.coll.sortParam = $(event.target).attr('data-sort');
        this.coll.sortMode = this.coll.sortMode*(-1);
        this.coll.sort();
        var that = this;
        this.coll.each(function(model, index) {
            that.addOne(model);
        });
    }
});