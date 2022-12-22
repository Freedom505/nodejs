export const search = (req, res) => res.send("search");
export const videoEdit = (req, res) => res.send("video edit");
export const upload = (req, res) => res.send("video upload");
export const videoDelete = (req, res) => res.send("video delete");
export const comments = (req, res) => res.send("video comments");
export const commentsDelete = (req, res) => res.send("video comments delete");
export const watch = (req, res) => res.render("watch", { pageTitle: "Watch" });
