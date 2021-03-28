#!/usr/bin/env bash
set -e

echo
echo 'About to call addAnimal() on the contract'

echo
echo \$CONTRACT is $CONTRACT

echo
# near call $CONTRACT addAnimal '{"type": "dog", "description": "it is a dog", "totalDonation": "0"}' --account_id $CONTRACT 
# near call $CONTRACT addAnimal '{"type": "$1", "description": "it is a dog", "totalDonation": "0"}' --account_id $CONTRACT 
# near call $CONTRACT addAnimal '{"type": '"$1"', "description": "it is a dog", "totalDonation": "0"}' --account_id $CONTRACT 
near call $CONTRACT addAnimal '{"type": "'$1'", "description": "it is a '$1'", "totalDonation": "0"}' --account_id $CONTRACT 
echo 'You just added an animal for help'
echo
echo
echo
echo 'About to call getAnimals() on the contract'
echo
echo 'These animals need help'
near call $CONTRACT getAnimals --account_id $CONTRACT
echo
echo
echo
echo 'About to call donate() on the contract'

near call $CONTRACT donate '{"animalID": 0}' --account_id $CONTRACT --amount $2
echo 'You donated "'$2'" near. Thank you for donation!'

# addAnimal(type: string, description: string, totalDonation: u128): void
# getAnimals(): Animal[]
# donate(animalID: i8): void