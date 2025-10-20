const form = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const successMessage = document.querySelector(
  '[data-testid="test-contact-success"]'
);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  input.classList.add("error");
  errorElement.classList.add("show");
  input.setAttribute("aria-invalid", "true");
}

function hideError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  input.classList.remove("error");
  errorElement.classList.remove("show");
  input.setAttribute("aria-invalid", "false");
}

function validateField(input, errorId, validationFn) {
  if (validationFn()) {
    hideError(input, errorId);
    return true;
  } else {
    showError(input, errorId);
    return false;
  }
}

fullName.addEventListener("blur", () => {
  validateField(fullName, "error-name", () => fullName.value.trim() !== "");
});

fullName.addEventListener("input", () => {
  if (fullName.value.trim() !== "") {
    hideError(fullName, "error-name");
  }
});

email.addEventListener("blur", () => {
  validateField(email, "error-email", () =>
    emailRegex.test(email.value.trim())
  );
});

email.addEventListener("input", () => {
  if (emailRegex.test(email.value.trim())) {
    hideError(email, "error-email");
  }
});

subject.addEventListener("blur", () => {
  validateField(subject, "error-subject", () => subject.value.trim() !== "");
});

subject.addEventListener("input", () => {
  if (subject.value.trim() !== "") {
    hideError(subject, "error-subject");
  }
});

message.addEventListener("blur", () => {
  validateField(
    message,
    "error-message",
    () => message.value.trim().length >= 10
  );
});

message.addEventListener("input", () => {
  if (message.value.trim().length >= 10) {
    hideError(message, "error-message");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateField(
    fullName,
    "error-name",
    () => fullName.value.trim() !== ""
  );
  const isEmailValid = validateField(email, "error-email", () =>
    emailRegex.test(email.value.trim())
  );
  const isSubjectValid = validateField(
    subject,
    "error-subject",
    () => subject.value.trim() !== ""
  );
  const isMessageValid = validateField(
    message,
    "error-message",
    () => message.value.trim().length >= 10
  );

  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    successMessage.classList.add("show");
    form.reset();

    // Hide all error states
    [fullName, email, subject, message].forEach((input) => {
      input.classList.remove("error");
      input.setAttribute("aria-invalid", "false");
    });

    document.querySelectorAll(".error-message").forEach((error) => {
      error.classList.remove("show");
    });

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);
  } else {
    // Focus on first invalid field
    const firstInvalid = [fullName, email, subject, message].find((input) =>
      input.classList.contains("error")
    );
    if (firstInvalid) {
      firstInvalid.focus();
    }
  }
});
