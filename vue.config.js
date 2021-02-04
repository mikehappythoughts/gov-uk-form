module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/gov_form" // set the sub folder to deploy to on website / and to test locally
      : "/",
};
