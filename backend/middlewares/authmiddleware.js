import { verifyJwt } from "../utils/verifyToken.js";

const authMiddleware = (req, res, next) => {
  const token =
    req.cookies?.token || req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    // console.log("if", token);
    return res.status(403).json({
      message: "Unauthorized Access || Token is not Present",
    });
  }
  // console.log("2", token);
  try {
    const decodeToken = verifyJwt(token);
    console.log("decode token", decodeToken);
    // req.body.email = decodeToken.email;
    req.user = {
      email: decodeToken.email,
      name: decodeToken.name, // if needed
    };
    next();
  } catch (error) {
    // console.log("catch", token);
    res
      .status(401)
      .clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        error: error.name,
        message: error.message,
      });
  }
};

export { authMiddleware };
