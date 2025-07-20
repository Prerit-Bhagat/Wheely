import jwt from "jsonwebtoken";

const verifyJwt = (token) => {
  try {
    return jwt.verify(token, "prerit");
  } catch (error) {
    throw error;
  }
};

export { verifyJwt };
