$(function() {
    var Router = Backbone.Router.extend({

        routes: {
            "":                       "",
            "help":                   "help",    // #help
            "search/:query(/:page)": "search",   // #search/kiwis/p7
            "test":                   "test"
        },

        initialize: function() {
            Backbone.history.start();
        },

        help: function() {
            $('#point').html('test');
            console.log('query');
        },

        search: function(query, page) {
//            console.log(query);
//            console.log(page);
            this.navigate('test');
        },

        test: function() {
            console.log('test');
        }
    });

    app.router = new Router();
});
