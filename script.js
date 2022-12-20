alert("hello world");
let emailElement = document.querySelector("#email");
let messageElement = document.querySelector("#message");
let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let emailValue = emailElement.value;
  let messageValue = messageElement.value;

  console.log("Email: ", emailValue);
  console.log("Message: ", messageValue);
});
