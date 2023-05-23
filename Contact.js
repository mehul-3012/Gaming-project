function butn() {
  var nameInput = document.querySelector('input[placeholder="Your Name"]');
  var emailInput = document.querySelector('input[placeholder="Your Email"]');
  var projectInput = document.querySelector('input[placeholder="Project Name"]');

  if (nameInput.value === "" || emailInput.value === "" || projectInput.value === "") {
    alert("Please fill in all the required fields.");
  } else {
    alert("Your message has been sent.");
    window.location.href = "home.html"; // Redirect to home.html
  }
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var emailInput = document.getElementById('emailInput').value;
  var subjectInput = document.getElementById('subjectInput').value;
  var messageInput = document.getElementById('messageInput').value;

  if (emailInput.trim() === '' || subjectInput.trim() === '' || messageInput.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }
  console.log('Email:', emailInput);
  console.log('Subject:', subjectInput);
  console.log('Message:', messageInput);
  window.location.href = 'home.html';
});