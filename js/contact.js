const my_btn = document.querySelector(".submit");
const user_input = document.querySelectorAll(".daro");
my_btn.addEventListener("click", () => {
  alert("Successful sent");
});

user_input ? alert("successfull") : alert("invalid inputs");
