$(function() {
    app.GpsView = Backbone.View.extend({

        events: {
            "click .changeSize":          "changeSize",
            "click .deleteRow":   "deleteRow",
            "blur .name": "editValue",
            "blur .size": "editValue",
            "blur .desc": "editValue"
        },

        initialize: function() {
            this.template = _.template($('#gpsTpl').html());
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);
            this.render();
        },

        render: function() {
            console.log('render');
            var view = this.template(this.model.toJSON());
            this.$el.html(view);
        },

        changeSize: function(event) {
            var diff = parseInt($(event.target).attr('data-rel'));
            var size = this.model.get('size');
            this.model.set({
                size: size + diff
            }, {validate: true});
        },

        deleteRow: function() {
            this.model.destroy();
        },

        editValue: function() {
            console.log(this.$('input.size').attr('value'));

            this.model.set({
                size: parseInt(this.$('input.size').attr('value')),
                name: this.$('.name').text(),
                desc: this.$('.desc').text()
            }, {validate: true});
        }
    });
});