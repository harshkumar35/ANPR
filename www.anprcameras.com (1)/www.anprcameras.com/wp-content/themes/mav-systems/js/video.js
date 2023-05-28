/**
 *	Page Loader Visual (0 - 100% based on load time)	
 */
jQuery(window).load(function() {

    var percent = 0;
    var enabled = true;
    if (enabled) {
        var timer = setInterval(function() {
            if (percent <= 100) {
                jQuery('.loader span').html(percent + '%');
                jQuery('.loader .line').css('width', percent + '%');
                percent++;
            } else {
                jQuery('.loader').fadeOut(1000, function() {
                    //Wait for fade out animationt to complete
                    var videoPlayer = document.getElementById("videoPlayer");
                    if (videoPlayer) {
                        videoPlayer.play();
                    }

                    /* Homepage */
                    var loaderTitle = jQuery('.homepage-banner h2');
                    if (loaderTitle.length > 0) {
                        loaderTitle.fadeIn(2000);
                    }

                    clearInterval(timer);
                });
            }
        }, 1);
    } else {
        jQuery('.loader').fadeOut();
    }
});


/**
 *	Introduction Video on product page
 */
jQuery(document).ready(function($) {

    /**
     *	Header video on top of product parent pages		
     */
    var videoPlayer = document.getElementById("videoPlayer");
    if (videoPlayer) {
        videoPlayer.addEventListener("ended", function() {
            $('#videoPlayer').fadeOut(2500);
        });
    }

});


/**
 *	IQ Range Page		
 */
/*
var timerOne = setInterval(function() {
	var scrollOne = jQuery(window).scrollTop();
	var videoOne = document.getElementById("iqRangeOne");
	var viewportOne = videoOne.offsetTop;
	videoOne.currentTime = (viewportOne / 500);
}, 30);

var timerTwo = setInterval(function() {
	var scrollTwo = jQuery(window).scrollTop();
	var videoTwo = document.getElementById("iqRangeTwo");
	var viewportTwo = videoTwo.offsetTop;
	videoTwo.currentTime = (viewportTwo / 400);
}, 30);
*/