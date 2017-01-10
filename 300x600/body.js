window.requireModules = [];
admixRequire(['html5api_0.0.1'],function(admixAPI){
	admixAPI.init({
		'initial' : {
			'width' : '300px',
			'height' : '600px'
		}
	});
	function $(id){
		return document.getElementById(id);
	}
	var timeline = new TimelineLite();
	timeline.to($('log_1'),1,{opacity: 1, ease:Ease.easeIn})
		.to($('log'), 1.3, {left:"43px", ease: Ease.easeIn},0.2)
		.to($('size'), 1.1, {left:"50%",'margin-left': '-65px', ease: Ease.easeIn},0.4);
	var smallLogoEnter = false;
	var sLogo = $('small_log');
	document.body.onclick = function(){
		admixAPI.click('');
	};
	document.body.onselectstart = function() {
		return false;
	}
});