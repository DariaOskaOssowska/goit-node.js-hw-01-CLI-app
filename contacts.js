const fs = require('fs').promises
const path = require('path')

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

// TODO: udokumentuj każdą funkcję
const listContacts = () => {
	fs.readFile(contactsPath).then(data => console.log(data.toString())).catch((err) => console.log(err.message))
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
