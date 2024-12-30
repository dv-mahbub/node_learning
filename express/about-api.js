const aboutApi = (req, res) => {
  res.send(req.app.locals.title + ":" + "This is about page");
};

module.exports = aboutApi;
