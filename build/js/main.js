const btn = document.querySelector(".button");
const main_info = document.querySelector(".main-info");

//html
function render_info(infomation) {
  const html = `
  <div class="flex flex-col justify-center items-center w-96 h-72 bg-Dark_Grayish_Blue dark:bg-Dark_Grayish_Blue  rounded-md">
    <div class="flex flex-col gap-8  h-full w-full items-center ">
      <p class="capitalize font-bold text-xs mt-4 text-Neon_Green "> advice #${rand()}</p>
      <p class="font-semibold text-Light_Cyan text-2xl  text-center pl-6 pr-6 ">${infomation}</p>
      <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>  
     <button class="button w-12  h-12 rounded-full bg-Neon_Green flex justify-center flex-col items-center hover:shadow-Neon_Green hover:shadow-md hover:blur-0"><img src="/images/icon-dice.svg" alt="" srcset=""></button>
   </div>
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
  const request = fetch(`https://api.adviceslip.com/advice/${rand()}`).then(
    function (response) {
      console.log(response.json());
    }
  );
}
// btn
btn.addEventListener("click", function (e) {
  get_infomation();
});
