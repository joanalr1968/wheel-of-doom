/*-----------------TESTS----------------------------------*/

function seleccionarCoder(codersActive, num) {
	let name = codersActive[num];
	codersActive.splice(num, 1);

	return name;
}

function mezclarArray(codersActive) {
	codersActive = codersActive.map(i => [Math.random(), i]).sort().map(i => i[1]);
	return codersActive;
}

function crearGrupos(codersActive, n, arrayConResultados) {

	mezclarArray(codersActive);
	let parts = n;
	let result = arrayConResultados;
	for (let i = parts; i > 0; i--) {
		result.push(codersActive.splice(0, Math.ceil(codersActive.length / i)).join(', '));
	}

}

/*---------------------MAIN----------------------------------*/

$(document).ready(function () {

	let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

	let codersActive = coders;


	/*------------------------------------FUNCTION--ELEGIR-VOLUNTARIA-----------------------------------*/

	function elegirVoluntaria() {


		if (codersActive.length >= 1) {

			let num = Math.floor(Math.random() * codersActive.length);
			let name = codersActive[num];
			codersActive.splice(num, 1);
			$('.answer').html("<p class='voluntaria'>" + name + "</p>");
			$(".coder:contains('" + name + "')").hide();
		}

		else {
			reiniciar()
			elegirVoluntaria()

		}
	};

	/*-----------------------------------------FUNCTION--REINICIAR-------------------------------------*/
	function reiniciar() {

		$(".voluntaria").remove();
		$(".grupo").remove();
		$(".coder").show();

		codersActive = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];
	};

	/*----------------------------------------FUNCTION----CREAR-GRUPOS----------------------------------*/

	function crearGrupos() {

		reiniciar();

		codersActive = codersActive.map(i => [Math.random(), i]).sort().map(i => i[1]);
		let parts = $('.select option:selected').text();
		let result = [];
		for (let i = parts; i > 0; i--) {
			result.push(codersActive.splice(0, Math.ceil(codersActive.length / i)).join(', '));
		}

		for (i = 0; i < result.length; i++) {
			$('.answer').append(`<p class="grupo">Grupo ${i + 1}: ${result[i]}</p>`);
		}
	};




	/*--------------------------------------ElEGIR VOLUNTARIA------------------------------------------*/

	$('#btn-start').on("click", function () {

		elegirVoluntaria();

	})

	/*-------------------------------------------REINICIAR---------------------------------------*/
	$('#btn-reiniciar').on("click", function () {

		reiniciar();

	});

	/*-----------------------------------------CREAR-GRUPOS-------------------------------------------*/

	$('#btn-grupos').on("click", function () {

		crearGrupos();

	});



})

