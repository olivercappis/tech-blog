const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // is a helper function that we can use to verify if the user is logged in, and redirect to log in if they are not
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
