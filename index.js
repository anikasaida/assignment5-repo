// DOM references
const heartIcons = document.querySelectorAll(".heart-icon");
const heartCountEl = document.getElementById("heartCount");
const copyCountEl = document.getElementById("copyCount");
const coinCountEl = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");

// Heart Click Handler
heartIcons.forEach(icon => {
  icon.addEventListener("click", function () {
    let current = parseInt(heartCountEl.innerText);
    heartCountEl.innerText = current + 1;
  });
});

// Copy Number Function
function copyNumber(number) {
  navigator.clipboard.writeText(number)
    .then(() => {
      alert(`Copied ${number} to clipboard`);
      let current = parseInt(copyCountEl.innerText);
      copyCountEl.innerText = current + 1;
    })
    .catch(err => {
      console.error("Copy failed", err);
    });
}

// Call Function
function makeCall(serviceName, number) {
  let currentCoins = parseInt(coinCountEl.innerText);

  if (currentCoins < 20) {
    alert("❌ Not enough coins to make this call.");
    return;
  }

  alert(`📞 Calling ${serviceName} at ${number}...`);

  currentCoins -= 20;
  coinCountEl.innerText = currentCoins;

  const now = new Date();
  const time = now.toLocaleTimeString();

  const li = document.createElement("li");
  li.innerText = `${serviceName} (${number}) — ${time}`;
  historyList.prepend(li);
}

// Clear History
function clearHistory() {
  historyList.innerHTML = "";
}
