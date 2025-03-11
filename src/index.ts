#!/usr/bin/env node

import process from 'node:process'
import { program } from 'commander'

// These are all temporary functions that will eventually be removed.

function selectProfile() {
  console.log('select profile')
}

function addProfile() {
  console.log('adding profile')
}

function removeProfile() {
  console.log('removing profile')
}

function renameProfile() {
  console.log('renaming profile')
}

function switchProfile() {
  console.log('switching profile')
}

function listProfile() {
  console.log('listing profiles')
}

program.version('1.0.0').description('DotSync - streamline your dotfile management')

program
  .command('profiles')
  .description('Manage dotfile profiles')
  .command('list', 'List all available profiles', {
    isDefault: true,
  })
  .command('switch <profile>', 'Switch to a specified profile')
  .command('add <profile>', 'Add a new profile')
  .command('remove <profile>', 'Remove a profile')
  .command('rename <old> <new>', 'Rename a profile')
  .command('select <profile>', 'Select a profile to perform operations on.')

program
  .command('add-dotfile <file_path>', 'Add a dotfile to the selected profile.')
  .command('remove-dotfile <file_path>', 'Remove a dotfile from the selected profile.')

program.command('list').action(listProfile)

program.command('switch <profile>').action(switchProfile)

program.command('add <profile>').action(addProfile)

program.command('remove <profile>').action(removeProfile)

program.command('rename <old> <new>').action(renameProfile)

program.command('select <profile>').action(selectProfile)

program.parse(process.argv)
