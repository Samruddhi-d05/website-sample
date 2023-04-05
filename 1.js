var counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);

    $(document).ready(function () {
        $('#autoWidth').lightSlider({
            autoWidth: true,
            loop: true,
            onSliderLoad: function () {
                $('#autoWidth').removeClass('cS-hidden');
            }
        });
    });

    const API_KEY = 'FbRqfuzMpjCWLVCwt1OGchMGdX4Z7tMt';
    const APPLICATION_NAME = 'My Application';
    const APPLICATION_VERSION = '1.0';

    const SPIlocation = { lng: 73.84841869779923, lat: 18.442959600685516 };

    var map = tt.map({
        key: API_KEY,
        container: 'map-div',
        center: SPIlocation,
        zoom: 14,
    });

    tt.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION);

    var element = document.createElement('div');
    element.id = 'marker';

    var marker = new tt.Marker({ element: element }).setLngLat(SPIlocation).addTo(map);

    var customPopup = '<p style="display:inline">' +
        '<img src="assets/mappop.png" alt=" " style="width:30%; height= 30%;float:right;padding-top:10px">' +
        '<div style="width:70%; height:100%; padding-top:10px"><span style="font:14px Gotham">Sai Panacea Interiors</span></br>' +
        '<div style="font:9px Gotham"><span style="color:grey">Chairs | Sofas | Visitor Waiting Units | Cafeteria/Restaurant Chairs | Gaming Chairs | Window Blinds(Curtains) and much more</span><div><br/>' +
        '<span style="font:10px Gotham">RH 17, Shri Krupa Shrushti Society, Behind Katraj Bus Stop, Jambhulwadi Road, Ambegaon Khurd,<br/>Pune-411046, Maharashtra, India</span></br>' +
        '</div></p>';

    var popupOffsets = {
        top: [0, 0],
        bottom: [0, -70],
        'bottom-right': [0, -70],
        'bottom-left': [0, -70],
        left: [25, -35],
        right: [-25, -35]
    }

    var popup = new tt.Popup({ offset: popupOffsets }).setHTML(customPopup)
    marker.setPopup(popup).togglePopup();