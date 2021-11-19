const chai = window.chai;
const expect = chai.expect;

describe("Función 'Elegir voluntaria aleatoria'", () => {
	it('Elegir voluntaria aleatoriamente y quitarla de la lista', () => {

		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let index = 22;

		let coder = seleccionarCoder(coders, index);

		expect(coder).to.equal("Alexia");
		expect(coders).to.have.same.members(["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Marisa"]);
	})
});


describe("Función 'Crear grupos aleatorios'", () => {


	it("Parte 1. Cambiar el orden de nombres en el array", () => {


		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let arrayMezclado = mezclarArray(coders);

		expect(arrayMezclado[0]).to.not.equal("Sara");
		expect(arrayMezclado[3]).to.not.equal("Tamara");
		expect(arrayMezclado[23]).to.not.equal("Marisa");
	})


	it("Parte 2. Elegir la cantidad de grupos y crear grupos aleatorios - 1", () => {
		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let parts = 3;

		let result = [];

		crearGrupos(coders, parts, result);


		expect(result.length).to.equal(3);

	})

	it("Parte 3. Elegir la cantidad de grupos y crear grupos aleatorios - 2", () => {
		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let parts = 5;

		let result = [];

		crearGrupos(coders, parts, result);


		expect(result.length).to.equal(5);

	})

	it("Parte 4. Elegir la cantidad de grupos y crear grupos aleatorios - 3", () => {
		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let parts = 7;

		let result = [];

		crearGrupos(coders, parts, result);


		expect(result.length).to.equal(7);

	})

	it("Parte 5. Elegir la cantidad de grupos y crear grupos aleatorios - 4", () => {
		let coders = ["Sara", "Judith", "Helen", "Tamara", "Candy", "Laura C.", "Gabrielle", "Carmen", "Yuliya", "Anna G.", "Desirée", "Sonia", "Joana", "Ana C.", "Alisa", "Faby", "Valentina", "Laura M.", "Rosa", "Sandra", "Kristina", "Gràcia", "Alexia", "Marisa"];

		let parts = 11;

		let result = [];

		crearGrupos(coders, parts, result);


		expect(result.length).to.equal(11);

	})
});
