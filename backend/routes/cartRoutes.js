const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

//Helper Function to get the cart by userId or guestId
const getCart = async (userId, guestId) => {
    if(userId){
        return await Cart.findOne({user : userId})
    }else if(guestId){
        return await Cart.findOne({guestId})
    }
    return null;
}

// @route POST /api/cart
// @desc Add a Product to the cart for a guest or logged in user
// @access Public

router.post("/", async(req,res) => {
    const {productId, quantity, size, color, guestId, userId} = req.body;

    try{
        const product= await Product.findById(productId);
        if(!product) return res.status(404).json({
            message: "Product Not Found",
        })

        //Determine if the user is logged in or guest
        let cart = await getCart(userId, guestId);

        //If cart exists, update it
        if(cart){
            const productIndex = cart.products.findIndex(
                (p) => 
                    p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
            );

            if(productIndex > -1){
                //If product already exists, update the quantity
                cart.products[productIndex].quantity += quantity;
            }else{
                //Add new Products
                cart.products.push({
                    productId,
                    name : product.name,
                    image : product.image,
                    price : product.price,
                    size,
                    color,
                    quantity
                })
            }

            //Recalculate the total Price
            cart.totalPrice = cart.products.reduce((acc, item)=> acc+item.price * item.quantity, 0);

            await cart.save();
            return res.status(200).json({
            cart
            })
        }else{
            // Create a new cart for the guest or the user
            const newCart =await Cart.create({
                user : userId ? userId : undefined,
                guestId : guestId ? guestId : "guest_" + new Date().getTime(),
                products : [
                    {
                        productId,
                        name : product.name,
                        image : product.images[0].url,
                        price : product.price,
                        size,
                        color,
                        quantity
                    },
                ],

                totalPrice : product.price * quantity,
            });
            return res.status(201).json(newCart);
        }
    }catch(err){
        console.error(err);
        res.status(500).json({
            message : "Server Error",
        })
    }
});

module.exports = router;