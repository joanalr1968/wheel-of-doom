const chai = window.chai;
const expect = chai.expect;

/*describe('Wheel of Doom', () => {
	it('puedo elegir candidatas aleatoriamente y las quito de la lista', () => {

		let coders = ["Carmen", "Valentina", "Desi"];
		let position = 1;

		let coder = seleccionarCoder(coders, position);

		expect(coder).to.equal("Valentina")
		expect(coders).to.have.same.members(["Carmen", "Desi"])
	})
});
*/

describe("Función 'Elegir voluntaria aleatoria'", () => {

	it("Parte 1. Elegir un número aleatorio entre 0 y 23", () => {

		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;

		let num = Math.floor(Math.random() * codersActive.length);


		expect(num >= 0 && num <= 23).to.equal(true);
	});


	it("Parte 2. Retornar un nombre aleatorio del array", () => {

		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;
		let num = Math.floor(Math.random() * codersActive.length);
		let name = codersActive[num];

		expect(typeof name === "string").to.equal(true);
	});

	it("Parte 3. Cortar un elemento del array", () => {

		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;
		let num = Math.floor(Math.random() * codersActive.length);
		let name = codersActive[num];
		codersActive.splice(num, 1);


		expect(codersActive.length).to.equal(23);

	});

});


describe("Función 'Crear grupos aleatorios'", () => {


	it("Parte 1. Cambiar el orden de nombres en array", () => {


		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;

		codersActive = codersActive.map(i => [Math.random(), i]).sort().map(i => i[1]);

		let parts = 7;
		let result = [];
		for (let i = parts; i > 0; i--) {
			result.push(codersActive.splice(0, Math.ceil(codersActive.length / i)).join(', '));
		}


		expect(codersActive[0]).to.not.equal("Sara");
		expect(codersActive[3]).to.not.equal("Tamara");
		expect(codersActive[23]).to.not.equal("Marisa");
	})


	it("Parte 2. Elegir la cantidad de grupos y crear grupos aleatorios - 1", () => {


		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;

		codersActive = codersActive.map(i => [Math.random(), i]).sort().map(i => i[1]);

		let parts = 7;
		let result = [];
		for (let i = parts; i > 0; i--) {
			result.push(codersActive.splice(0, Math.ceil(codersActive.length / i)).join(', '));
		}

		expect(result.length).to.equal(7);
	})

	it("Parte 3. Puedo elegir la cantidad de grupos y crear grupos aleatorios - 2", () => {


		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;

		codersActive = codersActive.map(i => [Math.random(), i]).sort().map(i => i[1]);

		let parts = 4;
		let result = [];
		for (let i = parts; i > 0; i--) {
			result.push(codersActive.splice(0, Math.ceil(codersActive.length / i)).join(', '));
		}

		expect(result.length).to.equal(4);
	})
});
