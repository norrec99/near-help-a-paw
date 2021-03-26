// import { addAnimal, getAnimals } from '../assembly/index';
import { storage, Context, u128 } from 'near-sdk-as';
import { Animal } from '../assembly/model';
import * as contract from '../assembly/index';

describe('Animal ', () => {
	it('should get an animal', () => {
		contract.addAnimal('dog', 'it is a dog', u128.from('10000000000000000000000'));
		expect(contract.getAnimals().length).toBe(1);
		expect(1).toBe(1);
		log('testing the test');
	});
});
