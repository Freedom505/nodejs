let videos = [
  {
    title: "First video",
    comments: 2,
    views: 1,
    genre: "comedy",
    Length: 180,
    rating: 5,
    createAt: 4,
    id: 1,
  },
  {
    title: "Second video",
    comments: 2,
    views: 280,
    genre: "comedy",
    Length: 180,
    rating: 5,
    createAt: 4,
    id: 2,
  },
  {
    title: "Third video",
    comments: 2,
    views: 58,
    genre: "comedy",
    Length: 180,
    rating: 5,
    createAt: 4,
    id: 3,
  },
];

export const search = (req, res) => res.send("search");

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing: video #${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/video/${id} `);
};
export const upload = (req, res) => res.send("video upload");
export const videoDelete = (req, res) => res.send("video delete");
export const comments = (req, res) => res.send("video comments");
export const commentsDelete = (req, res) => res.send("video comments delete");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
