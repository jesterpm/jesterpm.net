---
title: Gifford Camping Map
date: 2015-01-03
layout: blog
norobots: true
---

Over the Fourth of July weekend in 2014, [Daniel Betcher][daniel] and I drove most of
Forest Road 23 in [Gifford Pinchot National Forest][gifford] in search of the
perfect camping spot for a large group camping trip later that summer. We
traveled to the end of almost every road my Jeep could squeeze down off NF-23
from [Randle][randle] to [Trout Lake][troutlake].

As we traveled Daniel took geotagged photos of every possible camp site --
basically anywhere there was an existing fire ring -- and the the end of every
road. I have aggregated all of the data into the map below.

<div class="clearfix">
    <div class="col-md-8" id="map-canvas" style="height: 450px"></div>
    <div class="col-md-4" id="map-data"></div>
</div>
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script>
    function displayFeature(feature) {
        var time = new Date(feature.getProperty("time")).toLocaleString();
        var description = feature.getProperty("description");
        var photos = feature.getProperty("photos");
        var latitude = feature.getGeometry().get().lat();
        var longitude = feature.getGeometry().get().lng();

        var url = "http://jesterpm.net/blog/gifford-map/#" + feature.getId();

        html = "<table class=\"table\"><tr>"
        + "<th>Waypoint</th><td><a href=\"" + url + "\">" + feature.getId() + "</a></td></tr>"
        + "<th>Last Visit</th><td>" + time + "</td></tr>"
        + "<tr><th>Latitude</th><td>" + latitude + "</td></tr>"
        + "<tr><th>Longitude</th><td>" + longitude + "</td></tr></table>";

        if (description) {
            html += "<p>" + description + "</p>";
        }

        for (var i = 0; i < photos.length; i++) {
            html += "<a class=\"js-thumbnail\" href=\"http://photos.jesterpm.net/gifford-map/images/" + photos[i] + "\">";
            html += "<img src=\"http://photos.jesterpm.net/gifford-map/thumbs/" + photos[i] + "\" class=\"img-thumbnail\" /></a> "
        }

        document.getElementById('map-data').innerHTML = html;

        $('#map-data a.js-thumbnail').click(fullscreenClick);
    }

    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: new google.maps.LatLng(46.28371445462108, -121.64621355012059),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var features = map.data.loadGeoJson('/blog/gifford-map/gifford-data.geojson');


        map.data.addListener('click', function(event) {
            window.location.hash = event.feature.getId();
            displayFeature(event.feature);
        });

        google.maps.event.addListenerOnce(map, 'idle', function() {
            var currentFeature = map.data.getFeatureById('104');
            if (window.location.hash) {
                var selected = map.data.getFeatureById(window.location.hash.substring(1));
                if (selected) {
                    currentFeature = selected;
                }
            }
            map.setCenter(currentFeature.getGeometry().get());
            displayFeature(currentFeature);
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
</script>

[daniel]: https://twitter.com/danielbetcher
[gifford]: http://www.fs.usda.gov/giffordpinchot/
[randle]: http://goo.gl/maps/XnrXA
[troutlake]: http://goo.gl/maps/dwDcx
