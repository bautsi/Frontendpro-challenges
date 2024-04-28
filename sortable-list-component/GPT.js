const inputContainer = document.getElementById("inputContainer");
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue.js",
  "Angular",
  "Node.js",
];

function createSkillInput(index) {
  const div = document.createElement("div");
  div.className = "input-box";
  div.setAttribute("draggable", true);
  div.addEventListener("dragstart", handleDragStart);
  div.addEventListener("dragover", handleDragOver);
  div.addEventListener("drop", handleDrop);
  div.addEventListener("dragend", handleDragEnd);
  div.innerHTML = `
        <input type="text" id="skillInput${index}" placeholder="Add a skill..." ${
    index > 0 ? "disabled" : ""
  }>
        <button onclick="clearSkill(${index})">Clear</button>
        <ul id="suggestionBox${index}" class="suggestions"></ul>
    `;

  const input = div.querySelector("input");
  input.oninput = function () {
    handleInput(input, index);
  };
  inputContainer.appendChild(div);
}

function handleInput(input, index) {
  const suggestions = document.getElementById(`suggestionBox${index}`);
  suggestions.innerHTML = "";
  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(input.value.toLowerCase())
  );
  filteredSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.onclick = () => selectSkill(skill, index);
    suggestions.appendChild(li);
  });
}

function selectSkill(skill, index) {
  const input = document.getElementById(`skillInput${index}`);
  input.value = skill;
  document.getElementById(`suggestionBox${index}`).innerHTML = "";
  if (index < 4) {
    document.getElementById(`skillInput${index + 1}`).disabled = false;
  }
}

function clearSkill(index) {
  const input = document.getElementById(`skillInput${index}`);
  input.value = "";
  document.getElementById(`suggestionBox${index}`).innerHTML = "";
  for (let i = index + 1; i < 5; i++) {
    document.getElementById(`skillInput${i}`).disabled = true;
  }
}

function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.classList.add("dragging");
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  const dropzone = e.target.closest(".input-box");
  if (dropzone && draggable !== dropzone) {
    let nodes = Array.from(inputContainer.children);
    let dragIndex = nodes.indexOf(draggable);
    let dropIndex = nodes.indexOf(dropzone);
    if (dragIndex < dropIndex) {
      dropzone.after(draggable);
    } else {
      dropzone.before(draggable);
    }
  }
}

function handleDragEnd(e) {
  e.target.classList.remove("dragging");
}

for (let i = 0; i < 5; i++) {
  createSkillInput(i);
}
