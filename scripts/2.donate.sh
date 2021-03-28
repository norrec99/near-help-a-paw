#!/usr/bin/env bash
set -e

echo
echo 'About to call donate() on the contract'
echo
echo \$CONTRACT is $CONTRACT

echo

near call $CONTRACT donate '{"animalID": 0}' --account_id $CONTRACT --amount $2

echo 'You donated "'$2'" near. Thank you for donation!'
# addAnimal(type: string, description: string, totalDonation: u128): void
# getAnimals(): Animal[]
# donate(animalID: i8): void