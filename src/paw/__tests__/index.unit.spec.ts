// import { addAnimal, getAnimals } from '../assembly/index';
import { storage, Context, u128, context, logging, VMContext } from 'near-sdk-as';
import { Animal, animals, Donor, donors } from '../assembly/model';
import * as contract from '../assembly/index';
import { ONE_NEAR } from '../../utils';

describe('Animal ', () => {
	it('should get an animal', () => {
		const animal = new Animal('dog', 'it is a dog', u128.Zero);
		animals.push(animal);
		expect(Animal.find(0).type).toBe(animal.type);
		log(animals);
	});

	xit('should donate to an animal', () => {
		Donor.create(u128.One);
		const animal1 = new Animal('cat', 'it is a cat', u128.One);
		animals.push(animal1);
		const animal2 = new Animal('mouse', 'it is a mouse', u128.Zero);
		animals.push(animal2);
		contract.donate(0);
		Animal.find(0).donate(u128.from('50000000000000000000000'));
		expect(Animal.find(0).totalDonation).toBe(animal1.totalDonation);
		// expect(Animal.find(1).totalDonation).toBe(animal2.totalDonation);
		log('animals array');
		log(animals);
		log('donors array');
		log(donors);
	});

	it('should support donation', () => {
		const animal1 = new Animal('cat', 'it is a cat');
		animals.push(animal1);

		VMContext.setAttached_deposit(ONE_NEAR);
		VMContext.setSigner_account_id('cagatay');

		contract.donate(0);
		log(donors);
	});
	// it('should get the donoter', () => {
	// 	const donor1 = new Donor('cagatay', u128.from('10000000000000000000000'));
	// 	Donor.create(u128.from('10000000000000000000000'));
	// 	donors.push(donor1);
	// 	contract.donate(0);
	// 	Animal.find(0).donate(u128.One);
	// 	expect(Donor.create(u128.One)).toBe(donors.first);
	// 	// expect(Animal.find(1).totalDonation).toBe(animal2.totalDonation);
	// 	logging.log('animals array');
	// 	log(animals);
	// 	logging.log('donors array');
	// 	// log(donors);
	// });
});
