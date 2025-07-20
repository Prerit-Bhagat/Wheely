import zod from "zod";

const zodSchema = zod.object({
  username: zod
    .string()
    .min(4, { message: "Username must contain at least 4 characters" })
    .max(30, { message: "Username must contain at most 30 characters" }),
  email: zod.string().email({ message: "Invalid email address" }),
  password: zod
    .string()
    .min(6, { message: "Password must contain at least 6 characters" })
    .max(14, { message: "Password must contain at most 14 characters" }),
});

const signUpValidation = (req, res, next) => {
  const response = zodSchema.safeParse(req.body);

  if (!response.success) {
    const errorMessages = response.error.errors.map((err) => err.message);
    return res.status(411).json({
      error: "Validation error",
      message: errorMessages.join(", "),
    });
  }

  next();
};

export { signUpValidation };
