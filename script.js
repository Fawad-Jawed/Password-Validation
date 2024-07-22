// Get the password input field, eye icon, and all the requirement elements
const passwordField = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requirementListItems = document.querySelectorAll('.requirement-list li');
const requirements = [
  /(?=.{8,})/,
  /(?=.*\d)/, 
  /(?=.*[a-z])/,
  /(?=.*[!@$%^&*()_+{}\[\]:;"'`~,.<>?\\|])/,
  /(?=.*[A-Z])/

];

// Toggle password visibility
eyeIcon.addEventListener('click', () => {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordField.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
});

// Validate password on input
passwordField.addEventListener('input', () => {
  const password = passwordField.value;

  // Check each requirement
  requirements.forEach((regex, index) => {
    if (regex.test(password)) {
      requirementListItems[index].classList.add('valid');
      requirementListItems[index].querySelector('i').classList.add('fa-check');
      requirementListItems[index].querySelector('i').classList.remove('fa-circle');
    } else {
      requirementListItems[index].classList.remove('valid');
      requirementListItems[index].querySelector('i').classList.remove('fa-check');
      requirementListItems[index].querySelector('i').classList.add('fa-circle');
    }
  });
});