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
near call $CONTRACT addAnimal '{"type": "'$1'", "description": "it is a '$1'", "totalDonation": "'$3'"}' --account_id $CONTRACT 

