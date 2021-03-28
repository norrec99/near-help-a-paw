#!/usr/bin/env bash
set -e

echo
echo 'About to call getAnimals() on the contract'
echo
echo \$CONTRACT is $CONTRACT
echo 'These animals need help'
echo

near call $CONTRACT getAnimals --account_id $CONTRACT

