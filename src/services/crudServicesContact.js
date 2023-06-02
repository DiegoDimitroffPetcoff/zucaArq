const Contact = require("../dbs/mongodb/models/Contact");

createContact = async (data) => {
  console.log(data.body);
  const { email, adress, facebook, instagram, cellphone } = data.body;
  if (!email) return "message: Email is required";
  try {
    const newContact = new Contact({
      email,
      adress,
      facebook,
      instagram,
      cellphone,
    });
    const ContactSaved = await newContact.save();
    return ContactSaved;
  } catch (error) {
    return error;
  }
};

getAllContacts = async () => {
  return await Contact.find();
};

getContactById = async (id) => {
  return await Contact.findById(id);
};

editContact = async (id, update) => {
  return await Contact.findByIdAndUpdate(id, update, {
    new: true,
  });
};

deleteContact = async (id, d) => {
  let imagenToDelete = await Contact.findById(id);
  if (imagenToDelete.image.public_id) {
    await deleteClaudinaryImageContact(imagenToDelete.image.public_id);
  }

  return await Contact.findByIdAndDelete(id, d);
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  editContact,
  deleteContact,
};
