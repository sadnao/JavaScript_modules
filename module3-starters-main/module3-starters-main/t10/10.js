let form = document.querySelector("form");

form.onsubmit = function(event) {
  event.preventDefault();

  let firstName = document.querySelector('input[name="firstname"]').value;
  let lastName = document.querySelector('input[name="lastname"]').value;

  document.getElementById("target").textContent =
    "Your name is " + firstName + " " + lastName;
};