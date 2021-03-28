// import { addAnimal, getAnimals } from '../assembly/index';
import { storage, Context, u128, context } from 'near-sdk-as';
import { Animal, Donor, donors } from '../assembly/model';
import * as contract from '../assembly/index';

describe('Animal ', () => {
	it('should get an animal', () => {
		contract.addAnimal('dog', 'it is a dog', u128.from('10000000000000000000000'));
		expect(contract.getAnimals().length).toBe(Animal.all().length);
		log('testing the test');
	});
});

// describe('Animal ', () => {
// 	it('should get an animal', () => {
// 		contract.donate(2);
// 		expect(Donor.create(u128.from('10000000000000000000000'))).toBe(donors.containsIndex);
// 		expect(contract.donate).toBe(Animal.find(2).donate());
// 		log('testing the test');
// 	});
// });
