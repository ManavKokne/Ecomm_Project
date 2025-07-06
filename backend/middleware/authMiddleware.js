const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password"); // Exclude password
      next();
    } catch (err) {
      console.error("Token Verification Failed", err);
      res.status(401).json({
        message: "Not Authorized, token failed",
      });
    }
  } else {
    res.status(401).json({
      message: "Not Authorized, no token provided",
    });
  }
};

// Middleware to check if the user is an admin
const admin = (req,res,next) => {
  if(req.user && req.user.role === "admin") {
    next();
  }else{
    res.status(403).json({
      message : "Not Authorized as an Admin"
    })
  }
}

module.exports = { protect, admin };
