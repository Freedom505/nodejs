export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const login = (req, res) => res.send("login");
export const userEdit = (req, res) => res.send("user edit");
export const userDelete = (req, res) => res.send("user delete");
export const join = (req, res) => res.send("join");
