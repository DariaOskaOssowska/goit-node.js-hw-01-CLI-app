const fs = require('fs').promises
const path = require('path')
const { nanoid } = require('nanoid')
require('colors')


const contactsPath = path.join(__dirname, 'db', 'contacts.json')

// TODO: udokumentuj każdą funkcję
const listContacts = async () => {

}

function getContactById(contactId) {
	// ...twój kod
}

function removeContact(contactId) {
	// ...twój kod
}

function addContact(name, email, phone) {
	// ...twój kod
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
}
