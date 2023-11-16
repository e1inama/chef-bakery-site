document.getElementById('logo').addEventListener('click', () => {
  window.location.href = '../main/main.html';
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

setTimeout(() => {
  document.getElementById('delivery').style.transform = 'translate(0)';
}, 1000)

function validateForm(event) {
  event.preventDefault();

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;

  var nameRegex = /^[A-Za-z]+$/;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

  if (!nameRegex.test(firstName)) {
    alert('Please enter a valid first name.');
    return;
  }

  if (!nameRegex.test(lastName)) {
    alert('Please enter a valid last name.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }


  if (firstName  && lastName && email) {
    window.location.href = '../redirect/redirect.html';
  } else {
    var errorMessage = 'Please fill in all the required fields.';
    alert(errorMessage);
  }
}

var form = document.getElementById('registrationForm');

form.addEventListener('submit', validateForm);