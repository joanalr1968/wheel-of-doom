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
	//return result;
}

$(document).ready(function () {

	let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

	let codersActive = coders;


	/*----------------------------------------FUNCTION--ELEGIR-VOLUNTARIA---------------------------------------*/

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

	/*-------------------------------------------FUNCTION--REINICIAR---------------------------------------*/
	function reiniciar() {

		$(".voluntaria").remove();
		$(".grupo").remove();
		$(".coder").show();

		codersActive = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];
	};

	/*-------------------------------------------FUNCTION----CREAR-GRUPOS---------------------------------------*/

	function crearGrupos() {

		reiniciar();

		codersActive = codersActive.map(i => [Math.random(), i]).sort().map(i => i[1]);
		let parts = $('.select option:selected').text();
		let result = [];
		for (let i = parts; i > 0; i--) {
			result.push(codersActive.splice(0, Math.ceil(codersActive.length / i)).join(', '));
		}

		$('.answer').append(
			`<p class="grupo">Grupo 1: ${result[0]}</p>`,
			`<p class="grupo">Grupo 2: ${result[1]}</p>`,
			`<p class="grupo">Grupo 3: ${result[2]}</p>`,
			`<p class="grupo">Grupo 4: ${result[3]}</p>`,
			`<p class="grupo">Grupo 5: ${result[4]}</p>`,
			`<p class="grupo">Grupo 6: ${result[5]}</p>`,
			`<p class="grupo">Grupo 7: ${result[6]}</p>`,
			`<p class="grupo">Grupo 8: ${result[7]}</p>`,
			`<p class="grupo">Grupo 9: ${result[8]}</p>`,
			`<p class="grupo">Grupo 10: ${result[9]}</p>`,
			`<p class="grupo">Grupo 11: ${result[10]}</p>`,
			`<p class="grupo">Grupo 12: ${result[11]}</p>`);

		$(".grupo:contains('" + undefined + "')").hide();
	};




	/*-----------------------------------------ElEGIR VOLUNTARIA---------------------------------------------*/

	$('#btn-start').on("click", function () {

		elegirVoluntaria();

	})

	/*-------------------------------------------REINICIAR---------------------------------------*/
	$('#btn-reiniciar').on("click", function () {

		reiniciar();

	});

	/*-----------------------------------------CREAR-GRUPOS---------------------------------------------*/

	$('#btn-grupos').on("click", function () {

		crearGrupos();

	});



})

