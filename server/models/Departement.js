import mongoose from "mongoose";

const departementSchema = new mongoose.Schema({
    dep_name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
});

const Departement = mongoose.model('Departement', departementSchema);
export default Departement;