$('.opener-search, .close-search').click( function(){
	$("body").toggleClass('show-search');
	if($('body').hasClass("show-menu")){
		$('body').removeClass('show-menu');
	}
})
$(".navbar-toggler").click(function(){
	$("body").toggleClass('show-menu');
	if($('body').hasClass("show-search")){
		$('body').removeClass('show-search');
	}
})

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items: 1,
    // navText: ["<","<span class='fa fa-angle-right' aria-hidden='true'></span>"]

})

 $(document).ready(function() {
    if ($("main.main").hasClass("search"))
    {
        return false;
    }
    else
    {

         var infinite = new Waypoint.Infinite({
          element: $('.infinite-scroll')[0],

        })
    }

});



// $('.grid.infinite-scroll').infiniteScroll({
//   // options
//   path: '.pagination__item--next',
//   append: '..infinite-scroll'
// });



    // // Provide infinite scroll if enabled
    // var $infiniteContainer = $(".grid.infinite-scroll").infinitescroll({
    //     navSelector: "ul.pagination",
    //     nextSelector: ".pagination__item--next",
    //     itemSelector: ".infinite-scroll .post",
    //     loadingImg: "/img/loader.gif",
    //     loading: {
    //         finishedMsg: "",
    //         msgText: "",
    //         img: "/img/loader.gif"
    //     }
    // }, function(elements) {
    //     var $elements = $(elements);
    //     $elements.imagesLoaded(function() {
    //         $infiniteContainer.masonry("appended", $elements);
    //     });
    // });