// Function to check if the ID is a 4-digit number
function validateId() {
    const managerId = document.getElementById('managerId').value;
    const invalidFeedback = document.querySelector('.invalid-feedback');
  
    // Check if the ID is a 4-digit number
    if (managerId >= 1000 && managerId <= 9999) {
      invalidFeedback.style.display = 'none'; // Hide error message
      return true;
    } else {
      invalidFeedback.style.display = 'block'; // Show error message
      return false;
    }
  }
  
  // Function to redirect to form.html after validating the ID
  function toFormPage() {
    if (validateId()) {
      // If the ID is valid, redirect to form.html
      window.location.href = 'form.html';
    }
  }
  