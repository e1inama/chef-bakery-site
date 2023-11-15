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