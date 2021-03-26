#!/usr/bin/env bash
set -e

echo
echo 'About to call addAnimal() on the contract'
echo near call \$CONTRACT play --account_id \$PLAYER --amount \$1
echo
echo \$CONTRACT is $CONTRACT
echo \$PLAYER is $PLAYER
echo \$1 is [ $1 NEAR ] '(the optionally attached amount)'
echo
# near call $CONTRACT addAnimal '{"type": "dog", "description": "it is a dog", "totalDonation": "0"}' --account_id $CONTRACT 
# near call $CONTRACT addAnimal '{"type": "$1", "description": "it is a dog", "totalDonation": "0"}' --account_id $CONTRACT 
# near call $CONTRACT addAnimal '{"type": '"$1"', "description": "it is a dog", "totalDonation": "0"}' --account_id $CONTRACT 
near call $CONTRACT addAnimal '{"type": "'$1'", "description": "it is a '$1'", "totalDonation": "'$3'"}' --account_id $CONTRACT 



near call $CONTRACT donate '{"animalID": 0}' --account_id $CONTRACT --amount $2

near call $CONTRACT getAnimals --account_id $CONTRACT
# addAnimal(type: string, description: string, totalDonation: u128): void
# getAnimals(): Animal[]
# donate(animalID: i8): void