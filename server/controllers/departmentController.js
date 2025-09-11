import Departement from '../models/Departement.js';

const getDepartements = async (req ,res) => {
  try {
    const departements = await Departement.find();
    return res.status(200).json({ success: true, departements });
  }
  catch (error) {
    console.error('Error fetching departments:', error);
    return res.status(500).json({ success: false, error: 'Server error fetching departments' });
  }
};


const addDepartement = async (req, res) => {
  try {
    const { dep_name, description } = req.body;
    const newDep = new Departement({
      dep_name,
      description   
    });
    await newDep.save();
    return res.status(201).json({ success: true, message: 'Department added successfully', department: newDep });

  } catch (error) {
    console.error('Error adding department:', error);
   return res.status(500).json({ success: false, error: ' add departement server error' });
  }
}
export {addDepartement , getDepartements} ;



