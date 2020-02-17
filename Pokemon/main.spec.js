const Pokemon = require('./Pokemon').Pokemon;
const firstToAttack = require('./Pokemon').firstToAttack;
const Abilities = require('./abilities').Abilities;
const Objects = require('./objects').Objects;

describe('Pokemon', () => {
	var francois = new Pokemon('francois', 50, 100, [
		Abilities.Chrolophyll
	],
	[
		Objects.ChoiceScarf
	]);
	
	var pikachu = new Pokemon('pikachu', 10, 5, [
		Abilities.QuickFeet
	],
	[
		Objects.IronBall
	]);

	it('should have a correct name', () => {
		expect('francois').toEqual(francois.name);
	});

	it('should have a correct speed', () => {
		expect(100).toEqual(francois.speed);
	});

	it('should have a correct power', () => {
		expect(50).toEqual(francois.power);
	});

	it('should be p1 to begin', () => {
		expect(francois).toEqual(firstToAttack(francois, pikachu));		
	});

	it('should correct damage', () => {
		Math.random = () => 0.5;
		expect(francois.getDamage()).toEqual(250);
	});

	it('should attack successful', () => {
		Math.random = () => 0.9;

		const damage = francois.getDamage();
		francois.attack(pikachu);

		expect(pikachu.life).toEqual(1000 - damage);
	});

	it('should attack successful x2', () => {
		Math.random = () => 0.5;
		const damage = francois.getDamage();
		const pikachuLife = pikachu.life;

		francois.attack(pikachu);
		francois.attack(pikachu);

		expect(pikachu.life).toEqual(pikachuLife - damage * 2);
	})
});