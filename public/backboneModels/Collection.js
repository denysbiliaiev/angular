$(function() {
    app.GpsCollection = Backbone.Collection.extend({
        model: app.GpsModel
    });

    var gpsCollection = new app.GpsCollection({});

    gpsCollection.on('add', function(model) {
        //console.log(model);
    });

//    gpsCollection.add([{name: 'test', age: 20},
//                       {name: 'test2', age: 30}
//    ]);

    //console.log
});