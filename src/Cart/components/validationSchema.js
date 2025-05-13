const validationSchema = {
  username: {
    required: true,
    message: "Username is required",
  },
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
    message: "Email must be valid",
  }
};
export default validationSchema;