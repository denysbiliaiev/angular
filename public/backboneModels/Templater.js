$(function() {
    var gpsTpl = _.template('<td class="table-bordered"><li><%= imei%></li><li><%= name%></li><li><%= sp%></li></td>');

    var gpsModel = new app.GpsModel({
        imei: '100',
        name: 'gps11111',
        sp: 20
    });

    $('#add').on('click', function() {
        //console.log(gpsModel);
        $('#point').html(gpsTpl(gpsModel.attributes));
    });
});

