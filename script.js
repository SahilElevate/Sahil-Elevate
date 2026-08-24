/*
=========================================================
SAHIL ELEVATE CLASS LIBRARY
FOLDER → SUBJECT → CLASS → VIDEO
=========================================================

IMAGE SYSTEM:
Put your folder images inside:
assets/

Example:
assets/web-development.svg
assets/cpp.svg
assets/python.svg
assets/computer.svg

Then set:
image: "assets/web-development.svg"

YOUTUBE:
For:
https://www.youtube.com/watch?v=DR36G7kdZno
use:
video: "DR36G7kdZno"

=========================================================
*/



// ========== 1st Batch Folder ==========



const library = [
  {
    id: "Perfection 9.0 {2026}",
    name: "Perfection 9.0 {2026}",
    icon: "</>",
    image: "perfection 9.0 2026.png",
    description: "Basic To Advanced",
    subjects: [
      {
        id: "Introductions Sessions",
        name: "Introductions Sessions",
        icon: "Introductions Sessions",
        image: "perfection 9.0 2026.png",
        description: "Basic To Advanced",
        classes: [
          { id: "Introduction Sessions-01", name: "Class 01 — Introduction Sessions", duration: "1hrs 40min. 10sec.", video: "MMzMNbhHIoE" },
        ]
      },

      {
        id: "Perfections 9.0 Prelims",
        name: "Perfections 9.0 Prelims",
        icon: "Perfections 9.0 Prelims",
        image: "perfection 9.0 2026.png",
        description: "Basic To Advanced",
        classes: [
          { id: "Basic Concepts of Sentence Rearrangement/Parajumbles-01", name: "Class 01 — Basic Concepts of Sentence Rearrangement/Parajumbles", duration: "1hrs 33min. 54sec.", video: "rt_OsCUPTjs" },
          { id: "Reading Comprehension & Skimming-02", name: "Class 02 — Reading Comprehension & Skimming", duration: "1hrs 00min. 13sec.", video: "Tqcs7Pcl0P0" },
          { id: "Reading Comprehension & Skimming-03", name: "Class 03 — Reading Comprehension & Skimming", duration: "1hrs 4min. 27sec.", video: "L2hobJ8sbko" },
        ]
      },

      {
        id: "Perfections 9.0 Mains",
        name: "Perfections 9.0 Mains",
        icon: "Perfections 9.0 Mains",
        image: "perfection 9.0 2026.png",
        description: "Basic To Advanced",
        classes: [
          { id: "No Video", name: "Class 01 — No Video", duration: "0hrs 0min. 0sec.", video: "" },
        ]
      },

      {
        id: "Grammer Granth",
        name: "Grammer Granth",
        icon: "Grammer Granth",
        image: "perfection 9.0 2026.png",
        description: "Basic To Advanced",
        classes: [
          { id: "Noun-01", name: "Class 01 — Noun", duration: "1hrs 10min. 58sec.", video: "NWeyror_FBU" },
          { id: "Noun-02", name: "Class 02 — Noun", duration: "1hrs 12min. 16sec.", video: "CK6vftJAEfA" },
          { id: "Noun-03", name: "Class 03 — Noun", duration: "1hrs 02min. 33sec.", video: "KnCuhc8TIcQ" },
          { id: "Noun-04", name: "Class 04 — Noun", duration: "1hrs 12min. 14sec.", video: "WgJflxWVnKM" },
          { id: "Pronoun-01", name: "Class 01 — Pronoun", duration: "1hrs 1min. 57sec.", video: "J98sl-J9O10" },
          { id: "Pronoun-02", name: "Class 02 — Pronoun", duration: "1hrs 04min. 38sec.", video: "jBMfvlwKjog" },
          { id: "Pronoun-03", name: "Class 03 — Pronoun", duration: "0hrs 46min. 26sec.", video: "IRimW2y_Uqo" },
          { id: "Pronoun-04", name: "Class 04 — Pronoun", duration: "1hrs 14min. 56sec.", video: "YlJMHcw5GbU" },
        ]
      },
    ]
  },



  // ========== 2nd Batch Folder ==========



  {
    id: "c-cpp",
    name: "C / C++",
    icon: "C++",
    image: "assets/cpp.svg",
    description: "Programming logic, C++ fundamentals and practice.",
    subjects: [
      {
        id: "cpp-basics",
        name: "C++ Basics",
        icon: "C++",
        image: "assets/subjects/cpp-basics.svg",
        description: "Start programming from the fundamentals.",
        classes: [
          { id: "cpp-01", name: "Class 01 — C++ Introduction", duration: "20 min", video: "DR36G7kdZno" },
          { id: "cpp-02", name: "Class 02 — Variables", duration: "22 min", video: "DR36G7kdZno" },
          { id: "cpp-03", name: "Class 03 — Operators", duration: "25 min", video: "DR36G7kdZno" }
        ]
      },
      {
        id: "cpp-loops",
        name: "Loops & Logic",
        icon: "01",
        image: "assets/subjects/loops.svg",
        description: "Loops, conditions and problem solving.",
        classes: [
          { id: "loop-01", name: "Class 01 — if / else", duration: "24 min", video: "DR36G7kdZno" },
          { id: "loop-02", name: "Class 02 — for Loop", duration: "26 min", video: "DR36G7kdZno" }
        ]
      }
    ]
  },

  {
    id: "python",
    name: "Python",
    icon: "Py",
    image: "assets/python.svg",
    description: "Learn Python with simple practical examples.",
    subjects: [
      {
        id: "python-basics",
        name: "Python Basics",
        icon: "Py",
        image: "assets/subjects/python-basics.svg",
        description: "Variables, input, conditions and loops.",
        classes: [
          { id: "py-01", name: "Class 01 — Python Introduction", duration: "18 min", video: "DR36G7kdZno" },
          { id: "py-02", name: "Class 02 — Variables & Input", duration: "21 min", video: "DR36G7kdZno" }
        ]
      }
    ]
  },

  {
    id: "computer-basics",
    name: "Computer Basics",
    icon: "PC",
    image: "assets/computer.svg",
    description: "Computer, internet and essential digital skills.",
    subjects: [
      {
        id: "computer-fundamentals",
        name: "Computer Fundamentals",
        icon: "PC",
        image: "assets/subjects/computer-fundamentals.svg",
        description: "Learn essential computer concepts.",
        classes: [
          { id: "pc-01", name: "Class 01 — Computer Introduction", duration: "17 min", video: "DR36G7kdZno" },
          { id: "pc-02", name: "Class 02 — Windows Basics", duration: "20 min", video: "DR36G7kdZno" }
        ]
      }
    ]
  }
];

const cards = document.getElementById("cards");
const viewKicker = document.getElementById("viewKicker");
const viewTitle = document.getElementById("viewTitle");
const countLabel = document.getElementById("countLabel");
const breadcrumbs = document.getElementById("breadcrumbs");
const backBtn = document.getElementById("backBtn");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

const player = document.getElementById("player");
const videoFrame = document.getElementById("videoFrame");
const playerTitle = document.getElementById("playerTitle");
const playerPath = document.getElementById("playerPath");
const lessonQueue = document.getElementById("lessonQueue");

let level = "folders";
let selectedFolder = null;
let selectedSubject = null;

function totalSubjects() {
  return library.reduce((n, f) => n + f.subjects.length, 0);
}
function totalClasses() {
  return library.reduce((n, f) => n + f.subjects.reduce((m, s) => m + s.classes.length, 0), 0);
}
document.getElementById("folderStat").textContent = library.length;
document.getElementById("subjectStat").textContent = totalSubjects();
document.getElementById("classStat").textContent = totalClasses();

function render() {
  player.hidden = true;
  const q = searchInput.value.trim().toLowerCase();

  if (level === "folders") {
    viewKicker.textContent = "LEARNING FOLDERS";
    viewTitle.textContent = "Choose a learning folder";
    const data = library.filter(x => !q || x.name.toLowerCase().includes(q) || x.description.toLowerCase().includes(q));
    countLabel.textContent = `${data.length} folders`;
    renderCards(data, "folder");
    backBtn.disabled = true;
  }

  if (level === "subjects") {
    viewKicker.textContent = selectedFolder.name.toUpperCase();
    viewTitle.textContent = "Choose a subject";
    const data = selectedFolder.subjects.filter(x => !q || x.name.toLowerCase().includes(q) || x.description.toLowerCase().includes(q));
    countLabel.textContent = `${data.length} subjects`;
    renderCards(data, "subject");
    backBtn.disabled = false;
  }

  if (level === "classes") {
    viewKicker.textContent = `${selectedFolder.name} • ${selectedSubject.name}`.toUpperCase();
    viewTitle.textContent = "Choose a class";
    const data = selectedSubject.classes.filter(x => !q || x.name.toLowerCase().includes(q));
    countLabel.textContent = `${data.length} classes`;
    renderCards(data, "class");
    backBtn.disabled = false;
  }

  renderBreadcrumbs();
}

function renderCards(data, type) {
  cards.innerHTML = data.map(item => {
    const tag = type === "folder" ? "FOLDER" : type === "subject" ? "SUBJECT" : "CLASS";
    const count = type === "folder" ? `${item.subjects.length} subjects` : type === "subject" ? `${item.classes.length} classes` : item.duration;
    const action = type === "class" ? "WATCH →" : "OPEN →";

    const visual = item.image
      ? `<div class="card-image">
           <img src="${item.image}" alt="${item.name}"
                onerror="this.parentElement.classList.add('image-error');this.style.display='none'">
         </div>`
      : `<div class="card-icon">${item.icon || "▶"}</div>`;

    return `
      <article class="card" data-type="${type}" data-id="${item.id}">
        ${visual}
        <span class="card-tag">${tag}</span>
        <h3>${item.name}</h3>
        <p>${item.description || "Video lesson"}</p>
        <div class="card-bottom">
          <span>${count}</span>
          <span class="open">${action}</span>
        </div>
      </article>`;
  }).join("");

  emptyState.hidden = data.length > 0;

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      openItem(card.dataset.type, card.dataset.id);
    });
  });
}

function openItem(type, id) {
  if (type === "folder") {
    selectedFolder = library.find(x => x.id === id);
    selectedSubject = null;
    level = "subjects";
    searchInput.value = "";
    render();
    document.getElementById("folders").scrollIntoView({ behavior: "smooth" });
  }

  if (type === "subject") {
    selectedSubject = selectedFolder.subjects.find(x => x.id === id);
    level = "classes";
    searchInput.value = "";
    render();
  }

  if (type === "class") {
    const cls = selectedSubject.classes.find(x => x.id === id);
    openVideo(cls);
  }
}

function openVideo(cls) {
  player.hidden = false;
  playerTitle.textContent = cls.name;
  playerPath.textContent = `${selectedFolder.name} / ${selectedSubject.name} / ${cls.name}`;

  /*
    rel=0 reduces unrelated recommendations after playback.
    youtube-nocookie.com uses YouTube Privacy-Enhanced Mode.
  */
  videoFrame.src = `https://www.youtube-nocookie.com/embed/${cls.video}?rel=0&modestbranding=1`;

  lessonQueue.innerHTML = selectedSubject.classes.map((x, i) => `
    <div class="queue-item ${x.id === cls.id ? "active" : ""}" data-id="${x.id}">
      <b>${String(i + 1).padStart(2, "0")} · ${x.name}</b>
      <small>${x.duration}</small>
    </div>
  `).join("");

  lessonQueue.querySelectorAll(".queue-item").forEach(item => {
    item.addEventListener("click", () => {
      const next = selectedSubject.classes.find(x => x.id === item.dataset.id);
      openVideo(next);
    });
  });

  player.scrollIntoView({ behavior: "smooth" });
}

function renderBreadcrumbs() {
  let html = `<button data-level="folders" class="${level === "folders" ? "current" : ""}">All Folders</button>`;

  if (selectedFolder) {
    html += `<span class="sep">/</span>
      <button data-level="subjects" class="${level === "subjects" ? "current" : ""}">
        ${selectedFolder.name}
      </button>`;
  }

  if (selectedSubject) {
    html += `<span class="sep">/</span>
      <button data-level="classes" class="${level === "classes" ? "current" : ""}">
        ${selectedSubject.name}
      </button>`;
  }

  breadcrumbs.innerHTML = html;

  breadcrumbs.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.level === "folders") {
        level = "folders"; selectedFolder = null; selectedSubject = null;
      }
      if (btn.dataset.level === "subjects") {
        level = "subjects"; selectedSubject = null;
      }
      if (btn.dataset.level === "classes") {
        level = "classes";
      }
      searchInput.value = "";
      render();
    });
  });
}

backBtn.addEventListener("click", () => {
  if (level === "classes") {
    level = "subjects";
    selectedSubject = null;
  } else if (level === "subjects") {
    level = "folders";
    selectedFolder = null;
  }
  searchInput.value = "";
  render();
});

searchInput.addEventListener("input", render);

document.getElementById("closePlayer").addEventListener("click", () => {
  videoFrame.src = "";
  player.hidden = true;
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "sahil-elevate-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

if (localStorage.getItem("sahil-elevate-theme") === "light") {
  document.body.classList.add("light");
}

render();
