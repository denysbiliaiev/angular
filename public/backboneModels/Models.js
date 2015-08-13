var app = app || {};

$(function() {

    app.GpsModel = Backbone.Model.extend({
        //defaults attributes
        url: '/gps',

        defaults: {
            name: 'name1',
            size: 0,
            desc: 'desc1'
        },

        //after create obj
        initialize: function() {
            this.on('change', function(){
                console.log('change');
                //console.log(this.changedAttributes());
            });
            this.on('request', function(){
                console.log('request');
            });
            this.on('error', function(){
                console.log('error');
            });
            this.on('success', function(){
                console.log('success');
            });
            this.on('sync', function(){
                console.log('sync');
            });
        },

        validate: function(attrs) {
            if (attrs.size > 100 || attrs.size < 0) {
                console.log('exit');
                return "exit";
            }
        },

        incSp: function() {
            this.set({
                sp: this.get('sp')+100
            }, {validate: true})
        }
    });

//    var gpsModel = new app.GpsModel({
//        imei: '100',
//        name: 'gps11111',
//        sp: 20
//    });
//
//    $('#sync').on('click', function() {
//        gpsModel.save({name: 'testasdbsnbdnbsand'});
//    });
});
