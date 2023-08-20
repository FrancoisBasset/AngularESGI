import { Pokemon } from './pokemon';
import { Abilities } from './abilities';
import { Objects } from './objects';

const francois = new Pokemon('francois', 100, 100, [
	Abilities.Chrolophyll
], [
	Objects.ChoiceScarf
]);

const pikachu = new Pokemon('pikachu', 100, 5, [
	Abilities.QuickFeet
], [
	Objects.IronBall
]);

francois.attack(pikachu);
francois.attack(pikachu);
francois.attack(pikachu);
francois.attack(pikachu);
francois.attack(pikachu);
francois.attack(pikachu);

pikachu.attack(francois);
