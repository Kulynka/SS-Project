// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         500:{
//             items:3
//         },
//         800:{
//             items:4
//         },
//         1000:{
//             items:5
//         },
//         1300:{
//             items:6
//         }
//     }
// })

$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel();
});