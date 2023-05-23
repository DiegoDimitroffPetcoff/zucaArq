const crudProfileService = require("../services/crudServicesProfiles");

createProfile = async (req, res) => {
  try {
    const ProfileCreated = await crudProfileService.createProfile(req);
    return res.json(ProfileCreated);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

getAllProfiles = async (req, res) => {
  try {
    const AllProfiles = await crudProfileService.getProfiles();

    return res.json(AllProfiles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//TODO GESTIONAR COMO ENCONTRAR UN PROJ MEDIANTE ID
getProfileByID = async (req, res) => {
  try {
    const AllProfiles = await crudProfileService.getProfileById(req.params.id);

    return res.json(AllProfiles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

editProfile = async (req, res) => {
  try {
    const ProfileEdited = await crudProjectService.editProfile(
      req.params.id,
      req.body
    );

    if (!ProfileEdited) {
      return res.status(404).json({ message: "Project not found" });
    }
    return res.json(ProfileEdited);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

deleteProfile = async (req, res) => {
  {
    try {
      const ProfileEdited = await crudProjectService.deleteProfile(
        req.params.id,
        req.body
      );
      if (!ProfileEdited) {
        return res.status(404).json({ message: "Project not found" });
      }

      return res.json(ProfileEdited);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileByID,
  editProfile,
  deleteProfile,
};
