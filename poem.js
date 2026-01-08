// Poem JS

const params = new URLSearchParams(window.location.search);
const poemId = params.get("id");

const poem = poems.find(p => p.id === poemId);

if (!poem) {
  document.body.innerHTML = "<p>Poem not found.</p>";
} else {
  document.getElementById("poem-title").textContent = poem.title;
  document.getElementById("poem-date").textContent = poem.date;
  document.getElementById("poem-body").textContent = poem.body;
}