const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const courses = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

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
  };
  return res.render("about", {about});
});

server.get("/", function(req, res) {
  return res.render("courses", {items: courses});
});

server.get("/course", function(req, res){
  const id = req.query.id;

  const course = courses.find(function(course){
    return course.id == id;
  });

  if(!course){
    return res.send("Conteúdo não disponível.");
  }

  return res.render("blog-post", {item: course});
});

server.use(function(req, res){
  res.status(404).render("not-found");
});

server.listen(5500, function(){
  console.log("Server is running on port 5000...");
});