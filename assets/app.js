// Renders the cards on the home page from items.json.
const LABELS = { doc: "Doc", prototype: "Prototype", tool: "Tool" };

const list = document.getElementById("items");
const empty = document.getElementById("empty");
let items = [];

function render(filter) {
  const shown = items
    .filter((item) => filter === "all" || item.type === filter)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  list.replaceChildren(...shown.map((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "card";
    a.href = item.path;

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.dataset.type = item.type;
    tag.textContent = LABELS[item.type] || item.type;

    const h2 = document.createElement("h2");
    h2.textContent = item.title;

    const p = document.createElement("p");
    p.textContent = item.description || "";

    a.append(tag, h2, p);
    if (item.date) {
      const time = document.createElement("time");
      time.dateTime = item.date;
      time.textContent = item.date;
      a.append(time);
    }
    li.append(a);
    return li;
  }));

  empty.hidden = shown.length > 0;
}

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", c === chip));
    render(chip.dataset.filter);
  });
});

fetch("items.json")
  .then((res) => res.json())
  .then((data) => { items = data; render("all"); })
  .catch(() => { empty.hidden = false; });
