const chai = window.chai;
const expect = chai.expect;

describe('Wheel of Doom', () => {
	it('puedo elegir candidatas aleatoriamente y las quito de la lista', () => {

		let coders = ["Carmen", "Valentina", "Desi"];
		let position = 1;

		let coder = seleccionarCoder(coders, position);

		expect(coder).to.equal("Valentina")
		expect(coders).to.have.same.members(["Carmen", "Desi"])
	})
});

describe("😺Función 'Elegir voluntaria'😺", () => {
	it("Parte 1. Array length es igual a 24", () => {


		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;

		//let num = Math.floor(Math.random() * codersActive.length);
		//let name = codersActive[num];


		expect(codersActive.length).to.equal(24);
		//expect(num >= 0 && num <= 23).to.equal(true);
		//expect(typeof name === "string").to.equal(true);

	});

	it("Parte 2. Elegir un número aleatorio entre 0 y 23", () => {

		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;

		let num = Math.floor(Math.random() * codersActive.length);


		expect(num >= 0 && num <= 23).to.equal(true);
	});


	it("Parte 3. Retornar un nombre aleatorio del array", () => {

		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;
		let num = Math.floor(Math.random() * codersActive.length);
		let name = codersActive[num];

		expect(typeof name === "string").to.equal(true);
	});

	it("Cortar un elemento del array", () => {

		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura Contreras", "Gabrielle", "Carmen", "Yuliya", "Anna Girona", "Desirée", "Sonia", "Joana", "Ana Casas", "Alisa", "Faby", "Valentina", "Laura Mayas", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let codersActive = coders;
		let num = Math.floor(Math.random() * codersActive.length);
		let name = codersActive[num];
		codersActive.splice(num, 1);


		expect(codersActive.length).to.equal(23);

	});

});


describe("😺Función 'Crear grupos'😺", () => {


	it("No hay dos gatos iguales", () => {





		expect(num).to.equal("Garfield");

	});

	it("Gatos haciendo cosas", () => {




		expect(num).to.equal("Garfield");
	});

	it("No hay dos gatos iguales", () => {





		expect(num).to.equal("Garfield");

	});

	it("No hay dos gatos iguales", () => {





		expect(num).to.equal("Garfield");

	});

	it("No hay dos gatos iguales", () => {





		expect(num).to.equal("Garfield");

	});
});