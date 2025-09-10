import Departement from '../models/Departement.js';

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
export {addDepartement} ;