import User from "./models/User.js";
import bcrypt from "bcrypt";
import connectDB from "./db/db.js";

const userRegister = async()=>{
    connectDB();
    try {
        const hashPassword = await bcrypt.hash("ay123456", 10);
        const newUser = new User({
            name:"fahmi",
            email:"ahmed@gmail.com",
            password: hashPassword ,
            role:"admin",
        });
        await newUser.save();
        console.log("Admin user seeded successfully");
    }
    catch (error) {
        console.error("Error seeding user:", error);
    }
}

userRegister();