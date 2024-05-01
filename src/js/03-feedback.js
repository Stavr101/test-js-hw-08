import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handlerSubmit);
form.addEventListener("input", throttle(handlerInput, 500));
formFilling();

function handlerInput(event) {
  if (event.currentTarget) {
    const inputData = formValue(event);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
  }
}

function handlerSubmit(event) {
  event.preventDefault();
  const { email, message } = formValue(event);
  if (email === "" || message === "") {
    return alert("Всі поля повинні бути заповнені");
  } else {
    const formData = {
      email: email,
      message: message,
    };
    console.log("formData :>> ", formData);
  }
  form.reset();
  localStorage.clear();
}

function formFilling() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const { email, message } = JSON.parse(localStorage.getItem(STORAGE_KEY));
    form.email.value = email;
    form.message.value = message;
  }
}

function formValue(data) {
  const inputData = {
    email: data.currentTarget.email.value,
    message: data.currentTarget.message.value,
  };
  return inputData;
}
