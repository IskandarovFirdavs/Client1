// Scroll to sections
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Dark Mode Toggle
const toggleButton = document.getElementById("toggle-mode");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});

const backendDeveloperSkills = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png",
    text: "Node.js",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png",
    text: "Docker",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    text: "Kubernetes",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    text: "MongoDB",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
    text: "PostgreSQL",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
    text: "MySQL",
  },
  {
    img: "https://www.miracles.com.hk/wp-content/uploads/2023/05/RESTful-API-Development-Hong-Kong.png",
    text: "REST API Development",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
    text: "GraphQL",
  },
  {
    img: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png",
    text: "Redis",
  },
  {
    img: "https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwvxys08ydyvjkuivjlqt.png",
    text: "JSON Web Token (JWT)",
  },
  {
    img: "https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png",
    text: "SQL",
  },
  {
    img: "https://img.icons8.com/color/512/express-js.png",
    text: "Express js",
  },
  {
    img: "https://www.rabbitmq.com/assets/files/rabbitmq-logo-e91cacd38fcef5219149bc5cfa10b384.svg",
    text: "RabbitMQ",
  },
  {
    img: "https://static-00.iconduck.com/assets.00/file-type-nginx-icon-1793x2048-yt5u3fm7.png",
    text: "NGINX",
  },
  {
    img: "https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png",
    text: "Git",
  },
];

const skillListContainer = document.getElementById("skillList");

// Har bir skillni HTML ga joylashtirish
backendDeveloperSkills.forEach((skill) => {
  const skillItem = document.createElement("div");
  skillItem.className = "skill-list"; // .skill-list klassini berish

  const skillLogo = document.createElement("img");
  skillLogo.src = skill.img;
  skillLogo.alt = skill.text;
  skillLogo.className = "skill-logo"; // .skill-logo klassini berish

  const skillName = document.createElement("div");
  skillName.className = "skill"; // .skill klassini berish
  skillName.textContent = skill.text;

  skillItem.appendChild(skillLogo);
  skillItem.appendChild(skillName);
  skillListContainer.appendChild(skillItem);
});
const menuBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active"); // "active" klassi orqali nav ko'rinadi yoki yo'qoladi
});
