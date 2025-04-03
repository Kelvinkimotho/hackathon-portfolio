const my_btn = document.querySelector(".submit");
const user_input = document.querySelectorAll(".daro");
const texa = document.querySelectorAll("#tex");
my_btn.addEventListener("click", () => {
    const allFieldsFilled = [...user_input, ...texa].every(field => field.value.trim() !== '');
    allFieldsFilled ? alert("successfull") : alert("Kindly fill all the fields!!");
    user_input.forEach(input=> {
        input.value = '';
    });
    texa.forEach(text=> {
        text.value = "";
    });
    // window.location.reload();
});



