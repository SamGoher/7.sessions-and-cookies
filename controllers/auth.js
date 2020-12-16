// GET: /
exports.getAuth = (req, res) => {
  if(req.session.islogged === true)
  return res.redirect(`/home`);
  res
    .status(200)
    .render(`auth`);
}

// POST: /
exports.postAuth = (req, res) => {
  const email = req.body.email;
  const password = req. body.password;
  if(email === `ahmed.ah@ahmed.com` && password === `123456` ||
     email === `sam@sam.com` && password === `sam`
  ){
    req.session.islogged = true;
    req.session.email = email;
    res.redirect(`/home`);
  }
}
