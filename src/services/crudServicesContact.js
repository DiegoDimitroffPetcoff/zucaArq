const Contact = require("../dbs/mongodb/models/contact");

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



editContact = async (id, update) => {
  return await Contact.findByIdAndUpdate(id, update, {
    new: true,
  });
};



module.exports = {
  createContact,
  getAllContacts,

  editContact,

};
