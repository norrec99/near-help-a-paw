import { context, u128, PersistentVector } from 'near-sdk-as';

type AccountId = string;
// The maximum number of latest animals the contract returns.
const MAX_ANIMALS = 12;

/** 
 * Exporting a new class Animal so it can be used outside of this file.
 */
@nearBindgen
export class Animal {
	owner: string;

	constructor(public type: string, public description: string, public totalDonation: u128) {
		this.owner = context.sender;
	}

	static all(): Animal[] {
		const numAnimals = min(MAX_ANIMALS, animals.length);
		const startIndex = animals.length - numAnimals;
		const result = new Array<Animal>(numAnimals);
		for (let i = 0; i < numAnimals; i++) {
			result[i] = animals[i + startIndex];
		}
		return result;
	}

	static find(animalID: i8): Animal {
		assert(animalID >= 0, 'Animal ID must be >= 0');
		assert(animalID < animals.length, 'Animal ID must be valid');

		//assuming that animal id is an index in the array
		return animals[animalID];
	}

	donate(amount: u128): void {
		this.totalDonation = u128.add(this.totalDonation, amount);
	}
}

@nearBindgen
export class Donor {
	constructor(public account: AccountId, public amount: u128) {}

	static create(amount: u128): void {
		donors.push(new Donor(context.sender, amount));
	}
}

export const animals = new PersistentVector<Animal>('a');
export const donors = new PersistentVector<Donor>('d');
