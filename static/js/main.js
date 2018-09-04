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


$(function() {
    $('.bypage .category-page').hide();
    $('.bypage .category-page.active').prev('.category-page').show().addClass("btn-show").html("Prev page");
    $('.bypage .category-page.active').next('.category-page').addClass("btn-next").show().html("Next page");
   


    $('.bypost .category-page').hide();
    $('.bypost .category-page.active').prev('.category-page').removeClass('category-page').show().html("Prev post");
    $('.bypost .category-page.active').next('.category-page').removeClass('category-page').addClass("btn-next").show().html("Next post");
    $('.bypost .category-page').remove();
     $( ".btn-next" ).clone().appendTo( ".next-page-btn" );
});



