fetch("https://script.google.com/macros/s/AKfycbzVmQp-ahB7kx-1nybjlTdSQXuSUBjUV0j07xyo_UaNGTpgEHYkZEodixrcDRagaa5Xaw/exec")
 .then(r=>r.json())
 .then(brainrots=>{
   const market = document.getElementById("marketGrid");
   market.innerHTML = "";
   brainrots.forEach(b=>{
     market.innerHTML += `
     <div class="card">
       <div class="brainrot">
         <img src="${b.img}">
       </div>
       <div class="name">${b.name}</div>
       <div class="prices">
         <button class="btn robux">${b.price}</button>
       </div>
     </div>`;
   });
 });
