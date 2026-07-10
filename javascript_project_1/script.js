const length = document.getElementById("length");
const range = document.getElementById("range");
const gen_password = document.getElementById("gen_password");
const  result= document.getElementById("result");
const  result_type= document.getElementById("result_type");
const  copy= document.getElementById("copy");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]<>?";


range.addEventListener('input', () => {
    length.textContent = `Length : ${range.value}`;
});

gen_password.addEventListener('click',()=>{
    console.log("clicked")
       let allCharacters = "";

    // Selected options ke hisaab se pool banao
    if (document.getElementById("lowercase").checked) {
        allCharacters += lowercase;
    }

    if (document.getElementById("uppercase").checked) {
        allCharacters += uppercase;
    }

    if (document.getElementById("number").checked) {
        allCharacters += numbers;
    }

    if (document.getElementById("symbol").checked) {
        allCharacters += symbols;
    }

    // Agar kuch bhi select nahi hai
    if (allCharacters === "") {
        allCharacters = lowercase + uppercase + numbers + symbols;
    }


     let password = "";

    for (let i = 0; i < Number(range.value); i++) {

        let randomIndex = Math.floor(
            Math.random() * allCharacters.length
        );

        password += allCharacters[randomIndex];
    }



    result.classList.remove("hidden");
    result_type.classList.remove("hidden");
    copy.classList.remove("hidden");
    result_type.textContent = password;
    
})

copy.addEventListener("click", () => {

    navigator.clipboard.writeText(result_type.textContent);
    copy.innerText = "Copied ✔";

    setTimeout(() => {
        copy.innerText = "Copy Password";
    }, 2000);

});