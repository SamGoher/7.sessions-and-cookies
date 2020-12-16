exports.getHome = (req, res) => {
  if(req.session.islogged !== true)
  return res.redirect(`/`);

  res.render(`home`, {
    email: req.session.email
  });
};

exports.postlogout = (req, res) => {
  if(req.body.logout === `true`)
  req.session.destroy(() => {
    res.redirect(`/`);
  });
};