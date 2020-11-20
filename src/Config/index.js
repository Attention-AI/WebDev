// dev config variables name
const dev = {
  hostName: "http://localhost:5000",
  cookie_expiration: 7200,
};

// production variables name
const prod = {
  hostName: "",
  cookie_expiration: 7200,
};
const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

// export the default configuration
export default {
  ...config,
};
