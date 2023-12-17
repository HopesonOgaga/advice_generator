const btn = document.querySelector(".button");
const main_info = document.querySelector(".main-info");

//html
function render_info(infomation) {
  main_info.innerHTML = `
  <div class="flex justify-center flex-col items-center gap-6 main-info">
  <p class="capitalize font-bold text-xs mt-4 text-Neon_Green">advice #${infomation.slip.id}</p>
  <p class="font-semibold text-light-cyan text-2xl text-center pl-6 pr-6 text-Light_Cyan ">"${infomation.slip.advice}"</p>
 </div>
  `;
  
}
//random number
function rand() {
  const test = Math.floor(Math.random() * 254);
  return test;
}
//fetching
function get_infomation() {
  fetch(`https://api.adviceslip.com/advice/${rand()}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      render_info(data);
    })
    .catch(function (error) {
      console.error(`Error fetching advice: ${error}`);
    });
}
// btn
btn.addEventListener("click", function (e) {
  get_infomation();
});
