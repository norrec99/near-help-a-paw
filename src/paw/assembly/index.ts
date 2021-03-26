import { Animal, animals, Donor, donors } from './model';
import { u128, Context } from 'near-sdk-as';

// --- contract code goes below

/**
 * Adds a new message under the name of the sender's account id.\
 * NOTE: This is a change method. Which means it will modify the state.\
 * But right now we don't distinguish them with annotations yet.
 */
export function addAnimal(type: string, description: string, totalDonation: u128): void {
	// Creating a new message and populating fields with our data
	const animal = new Animal(type, description, totalDonation);
	// Adding the message to end of the the persistent collection
	animals.push(animal);
}

/**
 * Returns an array of last N messages.\
 * NOTE: This is a view method. Which means it should NOT modify the state.
 */
export function getAnimals(): Animal[] {
	return Animal.all();
}

export function donate(animalID: i8): void {
	const amount = Context.attachedDeposit;
	assert(amount > u128.Zero, 'Must attach more than 0 near');

	Donor.create(amount);
	Animal.find(animalID).donate(amount);
}
