const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET: "mysecretkey",
    DATABASE:
      "mongodb+srv://mukund:mukund12345@cluster0.yzglj.mongodb.net/test?retryWrites=true&w=majority",
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
