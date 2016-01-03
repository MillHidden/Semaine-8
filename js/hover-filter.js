$(function () {
	// ajout de la classe js dans le css afin d'avoir une grille fixe d'image en cas d'erreur de l'appel javascript
	$('body').addClass('js'); 
	
	
	// ajout dans le code html des boutons de filtres
	$('h4:first').before('<div class="filters">'+
		'<div class="col">'+
			'<h2>Mon portfolio</h2>'+
			'<ul>'+
				'<li><button type="button" class="filter btn btn-success" data-filter="cat1"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> HTML/CSS <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></button></li>'+
				'<li><button type="button" class="filter btn btn-success" data-filter="cat2"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Javascript <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></button></li>'+
				'<li><button type="button" class="filter btn btn-success" data-filter="cat3"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Bootstrap <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></button></li>'+
				'<li><button type="button" class="filter btn btn-success" data-filter="cat4"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Ruby <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></button></li>'+
				'<li><button type="button" class="filter all btn btn-success" data-filter="mix"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Toutes mes catégories <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></button></li>'+
			'</ul>'+
		'</div>'
		+
	'</div>');

	
	$('#grid').mixitup({ // plugin mixitup pour filtrer les vignettes par catégories
		effects: ['fade','scale', 'rotateZ'],
		listEffects: null,
		easing: 'smooth',
		layoutMode: 'grid',
		targetDisplayGrid: 'inline-block',
		targetDisplayList: 'block',
		gridClass: '',
		listClass: '',
		transitionSpeed: 600,
		showOnLoad: 'all',
	
		filterLogic: 'or',
		resizeContainer: true,
		minHeight: 0,
		failClass: 'fail',
		perspectiveDistance: '3000',
		perspectiveOrigin: '50% 50%',
		animateGridList: true,
		onMixLoad: null,
		onMixStart: null,
		onMixEnd: $('#grid .mix').hover( // fonction pour l'effet hover
            function () {
                $(this).find('.label').stop().animate({bottom: 0}, 600, 'easeOutQuad');
                $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');                
            },
            function () {
                $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');                                
            }        
        )       
	});
}); 
	