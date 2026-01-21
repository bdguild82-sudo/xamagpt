const API = "PASTE_YOUR_GAS_URL";
const market = document.getElementById("marketGrid");

fetch(API)
.then(r => r.json())
.then(data => {
  market.innerHTML = "";
  data.forEach(b => {
    market.innerHTML += `
      <div class="card">
        <div class="brainrot">
          <img src="${b.img}">
        </div>
        <div class="name">${b.name}</div>
        <div class="prices">
          <button>${b.robux}</button>
          <button>${b.money}</button>
        </div>
      </div>
    `;
  });
});

