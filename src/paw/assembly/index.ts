import { Animal, animals, Donor } from './model';
import { u128, Context } from 'near-sdk-as';

// --- contract code goes below

export function addAnimal(type: string, description: string, totalDonation: u128): void {
	const animal = new Animal(type, description, totalDonation);

	animals.push(animal);
}

export function getAnimals(): Animal[] {
	return Animal.all();
}

export function donate(animalID: i8): void {
	log(Context.attachedDeposit);
	log(Context.sender);
	const amount = Context.attachedDeposit;
	assert(amount > u128.Zero, 'Must attach more than 0 near');

	Donor.create(amount);
	Animal.find(animalID).donate(amount);
}
