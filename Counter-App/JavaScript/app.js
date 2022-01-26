//Counter Up Script:
/**
 * projects counter:
 */
let projectCount = 0;
const projects = setInterval(project, 100);

function project() {
  projectCount++;
  let projectNum = document.getElementById("project-num");
  projectNum.innerHTML = projectCount;
  if (projectCount === 200) {
    clearInterval(projects);
  }
}

/**
 * clients counter:
 */
let clientCount = 0;
const clients = setInterval(client, 100);

function client() {
  clientCount++;
  let clientNum = document.getElementById("client-num");
  clientNum.innerHTML = clientCount;
  if (clientCount === 100) {
    clearInterval(clients);
  }
}

/**
 * achievements counter:
 */
let achieveCount = 0;
const achievements = setInterval(achievement, 100);

function achievement() {
  achieveCount++;
  let achievementNum = document.getElementById("achievement-num");
  achievementNum.innerHTML = achieveCount;
  if (achieveCount === 50) {
    clearInterval(achievements);
  }
}
