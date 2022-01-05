const express = require("express"); 
const nunjucks = require("nunjucks");

const server = express();
const blog = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

// server.get("/", function(req, res) {
//   return res.render("blog", {blog});
// });

server.get("/about", function(req, res) {
  const about = {
    logo: "assets/logo.jpg",
    title: "Rocketseat",
    description: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀",
    techs: [
      "Elixir",
      "Flutter",
      "Javascript",
      "NodeJs",
      "React",
      "React Native"
    ],
    links: [
      {name: "Github", url: "https://github.com/rocketseat/"},
      {name: "Instagram", url: "https://instagram.com/rocketseat_oficial/"},
      {name: "Facebook", url: "https://facebook.com/rocketseat/"}
    ],
  }
  return res.render("about", {about});
});

server.use(function(req, res){
  res.status(404).render("not-found");
});

server.listen(5000, function(){
  console.log("Server is running on port 5000...");
});