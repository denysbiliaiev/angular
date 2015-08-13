var RocketView = Backbone.View.extend({
    events: {
        "click .changeSize":          "changeSize",
        "click .deleteRow":           "deleteRow",
        "blur .name, .size, .desc":    "editValue"
    },

    initialize: function() {
        this.template = _.template($('#viewRocket').html());
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
        return this.$el;
    },

    changeSize: function(event) {
        var diff = parseInt($(event.target).attr('data-rel'));
        var size = this.model.get('size');
        var res = this.model.set({
            size: size + diff
        }, {validate: true});

        if (res){
            console.log(res.attributes);
            this.render();
        }
    },

    deleteRow: function() {
        this.model.destroy();
    },

    editValue: function(event) {
        //console.log($(event.target.value);
        var res = this.model.set({
            name: this.$('.name').text(),
            description: this.$('.desc').text(),
            size: parseInt(this.$('input.size').attr('value'))
        }, {validate: true});
        if (res){
            console.log(res.attributes);
            this.render();
        }
    }
});
