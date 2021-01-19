"use strict";
//===================
//CONTACT SUBMISSION
//===================
const contactBtnEl = document.querySelector(".contactBtn");

contactBtnEl.addEventListener("click", (e) => {
  e.preventDefault;
  const name = document.querySelector("#name").value;
  const message = document.querySelector("#message").value;
  window.open(
    `mailto:amaliacbryant@gmail.com?subject=A message frome ${name}&body=${message}`
  );
});
