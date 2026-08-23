var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic();

fetch("./VERSION")
  .then(function (response) {
    if (!response.ok) throw new Error("Version file not found");
    return response.text();
  })
  .then(function (version) {
    var versionEl = document.getElementById("version-display");
    if (versionEl) {
      versionEl.textContent = "v" + version.trim();
    }
  })
  .catch(function () {
    var versionEl = document.getElementById("version-display");
    if (versionEl) versionEl.textContent = "";
  });
