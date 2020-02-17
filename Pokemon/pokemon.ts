import { Abilities } from './abilities';
import { Objects } from './objects';
import { log } from 'util';

export class Pokemon {
	public paralysed: boolean = false;
	public life: number = 1000;
	public nbAttack: number = 0;

	constructor(
		public name: string,
		public power: number,
		public speed: number,
		public abilities: Abilities[],
		public objects: Objects[]) {
		}

	public hasAbility(ability: Abilities): boolean {
		return this.abilities.includes(ability);
	}

	public hasObject(object: Objects): boolean {
		return this.objects.includes(object);
	}

	public getCalculatedSpeed() : number {
		var speed = this.speed;
	
		if (this.paralysed && !this.hasAbility(Abilities.QuickFeet)) {
			speed /= 2;
		}
	
		if (this.hasObject(Objects.ChoiceScarf)) {
			speed *= 1.5;
		}
	
		for (const object of [Objects.IronBall, Objects.MachoBrace,
			Objects.PowerBracer, Objects.PowerBelt,
			Objects.PowerLens, Objects.PowerBand,
			Objects.PowerAnklet, Objects.PowerWeight]) {
				if (this.hasObject(object)) {
					speed /= 2;
					break;
				}
			}
	
		if (this.hasObject(Objects.QuickPowder)) {
			speed *= 2;
		}
	
		return speed;
	}

	public getDamage(): number {
		return this.power * Math.floor(Math.random() * 10);
	}

	public attack(other: Pokemon): void {
		this.nbAttack++;

		if (this.life == 0) {
			console.log(`${this.name} is dead, cannot attack`);
			return;
		}

		if (other.life == 0) {
			console.log(`${other.name} is already dead`);
			return;
		}

		other.life -= this.getDamage();

		if (other.life < 0) {
			other.life = 0;
		}

		console.log(`Attack n°${this.nbAttack}`);
		
		console.log(`${this.name} = ${this.life}`);
		console.log(`${other.name} = ${other.life}\n`);
	}
}

export function firstToAttack(pokemon1: Pokemon, pokemon2: Pokemon) :Pokemon {
	if (pokemon1.getCalculatedSpeed() > pokemon2.getCalculatedSpeed()) {
		return pokemon1;
	}

	return pokemon2;
}