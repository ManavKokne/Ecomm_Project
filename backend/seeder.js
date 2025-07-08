const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed the data
const seedData = async () =>{
    try{
        //Clear Existing Data
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();

        //Create a default admin User
        const createdUser = await User.create({
            name : "Admin User",
            email : "admin@example.com",
            password : "123456",
            role : "admin",
        });

        //Assign The default user ID to each product
        const userID = createdUser._id;
        const sampleProducts = products.map((product)=>{
            return {...product, user : userID};
        });

        //Insert the products into the database
        await Product.insertMany(sampleProducts);
        console.log("Product Data seeded Succesfully!");
        process.exit();
    }catch(err){
        console.error("Error Seeding the data",err);
        process.exit(1);
    }
}

seedData();