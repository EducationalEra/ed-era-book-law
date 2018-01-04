$( window ).load( function(){
    function init () {
        $( "div.popup" ).replaceWith( '<div class="banner"><h2 class="course">Онлайн-курс «Європейський механізм захисту прав людини»</h2><p class="course-description">Сестра, ты удивительная девушка! Хочу пожелать тебе побольше позитивных эмоций, внутреннего баланса, здоровья и достижения больших целей!</p><div class="button-wrapper"><a class="registration-button" target="_blank" href="#">Перейти до курсу</a></div></div>');
	$("div.description").after( "<div class='space'></div>" );
    }

    init();
    require(["gitbook"], function (gitbook) {
        gitbook.events.bind("page.change", init);
    });
});
