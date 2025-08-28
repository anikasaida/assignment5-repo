// ====== Initial Setup ======
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// DOM references
const heartIcons = document.querySelectorAll(".heart-icon");
const heartCountEl = document.getElementById("heartCount");
const copyCountEl = document.getElementById("copyCount");
const coinCountEl = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");

// ====== Heart Click Handler ======
heartIcons.forEach(icon => {
  icon.addEventListener("click", function () {
    // Prevent double-clicks
    if (icon.classList.contains("fa-solid")) return;

    heartCount++;
    heartCountEl.innerText = heartCount;

    // Change icon to solid red heart
    icon.classList.replace("fa-regular", "fa-solid");
    icon.classList.add("text-red-500");
  });
});

// ====== Copy Number Function ======
function copyNumber(number) {
  navigator.clipboard.writeText(number)
    .then(() => {
      alert(`Copied ${number} to clipboard`);
      copyCount++;
      copyCountEl.innerText = copyCount;
    })
    .catch(err => {
      console.error("Copy failed", err);
    });
}

// ====== Call Function ======
function makeCall(serviceName, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make this call.");
    return;
  }

  alert(`Calling ${serviceName} at ${number}`);
  coinCount -= 20;
  coinCountEl.innerText = coinCount;

  const now = new Date();
  const time = now.toLocaleTimeString();

  const li = document.createElement("li");
  li.innerText = `${serviceName} (${number}) — ${time}`;
  historyList.prepend(li);
}

// ====== Clear History ======
function clearHistory() {
  historyList.innerHTML = "";
}
