import $ from 'jquery';
import whatInput from 'what-input';

window.jQuery = $;
window.$ = $;


var datepicker = require('../../../node_modules/air-datepicker/dist/js/datepicker.js');
var clockpicker = require('../../../node_modules/clockpicker/dist/jquery-clockpicker.js');
var parallax = require('../../../node_modules/jquery-parallax.js/parallax.js');
var lightcase = require('../../../node_modules/lightcase/src/js/lightcase.js');
var isotope = require('../../../node_modules/isotope-layout/dist/isotope.pkgd.js');
var waypoint = require('../../../node_modules/waypoints/lib/jquery.waypoints.js');
var niceSelect = require('../../../node_modules/jquery-nice-select/js/jquery.nice-select.js');
var dataTable = require('../../../node_modules/datatables/media/js/jquery.dataTables.js');


// VENDORS FOLDER

var counterUp = require('./vendors/jquery.counterup.js');
var countdown = require('./vendors/jquery.countdown.js');
var verticalTimeline = require('./vendors/vertical-timeline.js');
import './vendors/docs.js';

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


import slick from 'slick-carousel';
import IMask from 'imask';

// phone IMask

var mainPhone = document.querySelector('#main-phone');
var modalPhone = document.querySelector('#modal-phone');
// var naprPhone = document.querySelector('#napr-phone');

console.log(modalPhone);

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

if(mainPhone) {
  var mask = new IMask(mainPhone, maskOptions);
}

if(modalPhone) {
  var mask = new IMask(modalPhone, maskOptions);
}


// var mask = new IMask(naprPhone, maskOptions);



// datatable
// $(document).ready(function() {
//   $('table.uzi-table').dataTable( {
//     paginate: true,
//     info: false,
//     "language": {
//       "processing": "Подождите...",
//       "search": "Поиск по прайсу:",
//       "lengthMenu": "Показать _MENU_ записей",
//       "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
//       "infoEmpty": "Записи с 0 до 0 из 0 записей",
//       "infoFiltered": "(отфильтровано из _MAX_ записей)",
//       "infoPostFix": "",
//       "loadingRecords": "Загрузка записей...",
//       "zeroRecords": "Записи отсутствуют.",
//       "emptyTable": "В таблице отсутствуют данные",
//       "paginate": {
//         "first": "Первая",
//         "previous": "Предыдущая",
//         "next": "Следующая",
//         "last": "Последняя"
//       },
//       "aria": {
//         "sortAscending": ": активировать для сортировки столбца по возрастанию",
//         "sortDescending": ": активировать для сортировки столбца по убыванию"
//       }
//     }
//   });
// });

// datatable
$(document).ready(function() {
  $('table.price-table').dataTable( {
    paginate: true,
    info: false,
    ordering: false,
    autoWidth: false,
    "language": {
      "processing": "Подождите...",
      "search": "Поиск по прайсу:",
      "lengthMenu": "Показать _MENU_ записей",
      "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
      "infoEmpty": "Записи с 0 до 0 из 0 записей",
      "infoFiltered": "(отфильтровано из _MAX_ записей)",
      "infoPostFix": "",
      "loadingRecords": "Загрузка записей...",
      "zeroRecords": "Записи отсутствуют.",
      "emptyTable": "В таблице отсутствуют данные",
      "paginate": {
        "first": "Первая",
        "previous": "Предыдущая",
        "next": "Следующая",
        "last": "Последняя"
      },
      "aria": {
        "sortAscending": ": активировать для сортировки столбца по возрастанию",
        "sortDescending": ": активировать для сортировки столбца по убыванию"
      }
    }
  });
});

// test2
$(document).ready(function(){

//let's create arrays
var uzi = [
    {display: "Белоусова", value: "Белоусова" },
    {display: "Каверина", value: "Каверина" }];

var cardiolog = [
    {display: "Темарцев", value: "Темарцев" },
    {display: "Растрыгина", value: "Растрыгина" }];

var terapevt = [
    {display: "Арсеньева", value: "Арсеньева" }];

//If parent option is changed
$("#parent_selection").change(function() {
        var parent = $(this).val(); //get option value from parent

        switch(parent){ //using switch compare selected option and populate child
              case 'uzi':
                list(uzi);
                break;
              case 'cardiolog':
                list(cardiolog);
                break;
              case 'terapevt':
                list(terapevt);
                break;
            default: //default child option is blank
                $("#child_selection").html('');
                break;
           }
});

//function to populate child select box
function list(array_list)
{
    $("#child_selection").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options
        $("#child_selection").append("<option value=" +array_list[i].value+">"+array_list[i].display+"</option>");
    });
}

});

// test
//
//
// jQuery(document).ready(function($){
//
//     var $cat = $("#category1"),
//         $subcat = $(".subcat");
//
//     var optgroups = {};
//
//     $subcat.each(function(i,v){
//     	var $e = $(v);
//     	var _id = $e.attr("id");
// 			optgroups[_id] = {};
// 			$e.find("optgroup").each(function(){
//       	var _r = $(this).data("rel");
//         $(this).find("option").addClass("is-dyn");
//       	optgroups[_id][_r] = $(this).html();
// 			});
//     });
//     $subcat.find("optgroup").remove();
//
//     var _lastRel;
//     $cat.on("change",function(){
//         var _rel = $(this).val();
//         if(_lastRel === _rel) return true;
//         _lastRel = _rel;
//         $subcat.find("option").attr("style","");
//         $subcat.val("");
//         $subcat.find(".is-dyn").remove();
//         if(!_rel) return $subcat.prop("disabled",true);
//         $subcat.each(function(){
//         	var $el = $(this);
//           var _id = $el.attr("id");
//           $el.append(optgroups[_id][_rel]);
//         });
//         $subcat.prop("disabled",false);
//     });
//
// });
// appointmentform

// jQuery(function($) {
//   initdocs();
//
//   function initdocs() {
//     var depsAnddocs = {
//       'УЗИ': ['Белоусова', 'Каверина'],
//       'Кардиолог': ['Похуй', 'Растрыгина', 'Темарцев']
//     };
//
//     //populate deps
//     $.each(depsAnddocs,function(k,v){$('#deps').append('<option>' + k + '</option>');});
//
//     //populate docs
//     $('#deps').change(function(){
//       var $docs = $('#docs');
//       $docs.html("");
//       var docs = depsAnddocs[$(this).val()];
//       $.each(docs,function(k,v){$docs.append('<option>' + v + '</option>');});
//     });
//   }
//
// });

// nice select
//
// $(document).ready(function() {
//   $('select').niceSelect();
// });

// clockpicker

$('.clockpicker').clockpicker({
	autoclose: true
});
// particlesJS

var particles = document.getElementById('particles-js');
if (particles) {
var particlesJS = require('./vendors/particles.js');
var particlesJS = window.particlesJS;


/* ---- particles.js config ---- */

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 80,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#d4d4d4"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#d4d4d4",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});

};
// wont work






// TABS


// VERT-TABS

if ($(".vert-tabs")[0]){
	var target = document.getElementById("vert-tabs");
	var options = {
	  "linkClass": "vert-tabs__item",
	};

	var elem = new Foundation.Tabs($(target), options);
}
// ACC-TABS

if ($("#acc-tabs")[0]){
	var target = document.getElementById("acc-tabs");
	var options = {
	  // 'linkClass': 'acc-tabs__item',
	};

	var elem = new Foundation.ResponsiveAccordionTabs($(target), options);
}

// H-TABS


if ($(".h-tabs")[0]){

	var target = document.getElementById("h-tabs");
	var options = {
	  "linkClass": "h-tabs__title"
	};

	var elem = new Foundation.Tabs($(target), options);


    } else {
    console.log('h-tabs не существует');
}

// LI-TABS
if ($(".li-tabs")[0]){
	var target = document.getElementById("li-tabs");
	var options = {
	  "linkClass": "li-tabs__item"
	};

	var elem = new Foundation.Tabs($(target), options);
}
// LI-TABS
if ($(".simple-tabs")[0]){
	var target = document.getElementById("simple-tabs");
	var options = {
	  "linkClass": "simple-tabs__item"
	};

	var elem = new Foundation.Tabs($(target), options);
}

// NA-TABS

if ($(".na-tabs")[0]){
	var target = document.getElementById("na-tabs");
	var options = {
	  "linkClass": "na-tabs__item"
	};

	var elem = new Foundation.Tabs($(target), options);
}



// SLICK-SLIDER

// SLICK-HERO

$('.hero-slider').slick({
	dots: false,
	arrows: true,
	autoplay: true,
	appendDots: '.hero-slider__dots',
  appendArrows: '.hero-slider__nav',
	prevArrow: '<button type="button" class="hero-slider__nav-left"><i class="fas fa-arrow-left hero-slider__icon"></i></button>',
	nextArrow: '<button type="button" class="hero-slider__nav-right"><i class="fas fa-arrow-right hero-slider__icon"></i></button>',

	responsive: [
	{
		breakpoint: 960,
		settings: {
			arrows: false,
			dots: true
		}
	},

]
});



// PROMO Slider

$('.promo-slider').slick({
    dots: true,
    arrows: false,
   autoplay: true
});


// SLICK-TABS

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
    arrows: false,
  // centerMode: true,
  focusOnSelect: true,


  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: false
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]

});

// SLIDER RENAME IT

$('.doc-testimonials').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  appendArrows: '.doc-testimonials__nav',
  prevArrow: '<button type="button" class="doc-testimonials__nav-left"><i class="fas fa-arrow-left doc-testimonials__icon"></i></button>',
  nextArrow: '<button type="button" class="doc-testimonials__nav-right"><i class="fas fa-arrow-right doc-testimonials__icon"></i></button>',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// REVEAL тоглер костылики



 $(document).on('open.zf.reveal', function()
  {
	var burger = document.querySelector('.flatnav-rvl-burger__icon');
	burger.classList.remove('icon-menu');
	burger.classList.add('icon-close');

  });

 $(document).on('closed.zf.reveal', function()
  {
	var burger = document.querySelector('.flatnav-rvl-burger__icon');
	burger.classList.remove('icon-close');
	burger.classList.add('icon-menu');
  });

// close modal on click


 $(document).on('open.zf.reveal', function()
  {
	var flatnavModal = document.querySelector('#flatnav-rvl__modal');

  flatnavModal.addEventListener('click' , function(e){
    console.log(e.target.tagName);
    if(e.target.tagName == 'A') {
      $(flatnavModal).foundation('close');
    }
  })

  });

	// AIR Datepicker
	//
	var disabledDays = [0, 6];

	$('.appointment-form__date').datepicker({
		autoClose: true,
		minDate: new Date(),
		onRenderCell: function (date, cellType) {
			if (cellType == 'day') {
				var day = date.getDay(),
				isDisabled = disabledDays.indexOf(day) != -1;

				return {
					disabled: isDisabled
				}
			}
		}
	})
	//
	// $('.iconform__date').datepicker({
	//       autoClose: true,
	//     onRenderCell: function (date, cellType) {
	//         if (cellType == 'day') {
	//             var day = date.getDay(),
	//                 isDisabled = disabledDays.indexOf(day) != -1;
	//
	//             return {
	//                 disabled: isDisabled
	//             }
	//         }
	//     }
	// })
	//
	// $('.h-iconform__date').datepicker({
	//       autoClose: true,
	//     onRenderCell: function (date, cellType) {
	//         if (cellType == 'day') {
	//             var day = date.getDay(),
	//                 isDisabled = disabledDays.indexOf(day) != -1;
	//
	//             return {
	//                 disabled: isDisabled
	//             }
	//         }
	//     }
	// })



// ПИДОРАСИТ
//
// // PARALLAX INIT
//
$('.parallax-hero').parallax({imageSrc: '../assets/img/hero-bkg-01.jpg'});
$('.parallax-container').parallax({imageSrc: '../assets/img/img__sqr__01.jpg'});

// GALLERY

$('.gallery__link').on('click', function() {
  $('#main-image').attr('src', $(this).data('image'));
})



// ISOTOPE INIT

// external js: isotope.pkgd.js

// init Isotope

var $grid = $('.isogrid').isotope({
  itemSelector: '.isogrid__item',
  layoutMode: 'fitRows'
});

$grid.isotope({ filter: '.best' });
// filter functions
var filterFns = {
  // show if number is greater than 50
  // numberGreaterThan50: function() {
  //   var number = $(this).find('.number').text();
  //   return parseInt( number, 10 ) > 50;
  // },
  // show if name ends with -ium
  // ium: function() {
  //   var name = $(this).find('.name').text();
  //   return name.match( /ium$/ );
  // }
};



// bind filter button click
$('.filters-knob-group').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.knob-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'a', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});




// LIGHTCASE gallery

jQuery(document).ready(function($) {
	$('a[data-rel^=lightcase]').lightcase({
          	transition: 'scrollHorizontal',
          	showSequenceInfo: false,
          	showTitle: false
      });
});


// CountDownTimer

var now = new Date();
		var day = now.getDate();
		var month = now.getMonth() + 1;
		var year = now.getFullYear() + 1;
		var nextyear = month + '/' + day + '/' + year + ' 07:07:07';
		$('.countdown-timer').countdown({
			date: nextyear, // TODO Date format: 07/27/2017 17:00:00
			offset: +2, // TODO Your Timezone Offset
			day: 'День',
			days: 'Дней',
			hour: 'Час',
			hours: 'Часа',
		}, function () {
			alert('Done!');
		});



// COUNT UP
$('.count__number').counterUp({
    delay: 10,
    time: 1000
});


	// VERTICAL Timeline

	$('.vert-timeline').verticalTimeline({
    startLeft: false,
    alternate: true,
    animate: "fade",
    arrows: false
});


// H-ACCORDION


// var options = {
//
// };


var hAccordion = new Foundation.Accordion($('h-accordion'), {

	// options не работают

	slideSpeed: 3500,
	multiExpand: true
});

// responsive MENU

//
var dnav = new Foundation.ResponsiveMenu($('#dnav'), {
	// dataResponsiveMenu: 'accordion medium-dropdown',
	// clickOpen: false
});

// var remenuToggle = new Foundation.ResponsiveToggle($('remenu__toggle'));





$(document).foundation();
