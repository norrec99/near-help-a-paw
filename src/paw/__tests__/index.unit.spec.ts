// import { addAnimal, getAnimals } from '../assembly/index';
import { storage, Context, u128, context } from 'near-sdk-as';
import { Animal, animals, Donor, donors } from '../assembly/model';
import * as contract from '../assembly/index';

describe('Animal ', () => {
	it('should get an animal', () => {
		contract.addAnimal('dog', 'it is a dog', u128.from('10000000000000000000000'));
		expect(contract.getAnimals().length).toBe(Animal.all().length);
		log('testing the test');
	});
});

// cannot see the totalDonation amount after running donate function
describe('Animal ', () => {
	it('should donate to an animal', () => {
		new Donor('cagatay', u128.from('10000000000000000000000'));
		contract.addAnimal('cat', 'it is a cat', u128.Zero);
		contract.addAnimal('mouse', 'it is a mouse', u128.from('10000000000000000000000'));
		Donor.create(u128.from('10000000000000000000000'));
		contract.donate(1);
		Animal.find(1).donate(u128.from('10000000000000000000000'));
		expect(contract.getAnimals().length).toBe(Animal.all().length);
		log(animals);
		log(donors);
	});
});
