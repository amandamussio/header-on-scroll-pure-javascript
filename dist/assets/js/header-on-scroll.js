(function(){

	var headerScroll = getId('header-main'),
		scrollHeight = 500;

	window.addEventListener("scroll", scrollOn);

	
	function scrollOn() {
		animatedScroll(headerScroll,'active',scrollHeight);
	}

	//Função que on scroll muda o comportamento do elemento
	function animatedScroll(element,classN,height) {
		y = pageYOffset; //resgata do objeto window o valor pageYOffset e guarda na variável
		if (y > height) {
			element.className = classN;
		} else {
			element.className = '';
		}
	}

	//Função que retorna o id do elemento
	function getId(id) {
		return document.getElementById(id);
	}


})();