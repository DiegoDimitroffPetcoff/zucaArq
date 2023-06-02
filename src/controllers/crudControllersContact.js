const crudServicesContact = require("../services/crudServicesContact");

createContact = async (req, res) => {
  try {
    const ContactCreated = await crudServicesContact.createContact(req);
    return res.json(ContactCreated);
  } catch (error) {
    console.log("ERROR");
    console.log(error);
    return res.status(500).json(error);
  }
};

getAllContacts = async (req, res) => {
  try {
    const AllContact = await crudServicesContact.getAllContacts();

    return res.json(AllContact);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

editContact = async (req, res) => {
  try {
    const ContactEdited = await crudServicesContact.editContact(
      req.params.id,
      req.body
    );

    if (!ContactEdited) {
      return res.status(404).json({ message: "Contact not found" });
    }
    return res.json(ContactEdited);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



module.exports = {
  createContact,
  getAllContacts,
  editContact
};
