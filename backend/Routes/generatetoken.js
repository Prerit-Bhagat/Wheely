import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default";
const JWT_EXPIRY = process.env.JWT_EXPIRATION || "1d";

const generateToken = (user) => {
  console.log("Generating token for user:", user);
  // console.log(user);
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRY,
    }
  );
  console.log(token);
  return token;
};

export { generateToken };
