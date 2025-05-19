

//when called number pressed
function myFunction() {
    var txt;
  if (confirm("Are you sure to call +61426290300 ?")) {
    txt = "You pressed OK!";
  } else {
      txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}


//floating button
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

 function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
window.addEventListener('scroll', function () {
const button = document.querySelector('.open-button');
const footer = document.querySelector('footer');
const footerTop = footer.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (footerTop < windowHeight) {
    button.style.display = 'none';
} else {
    button.style.position = 'fixed';
    button.style.bottom = '23px';
    button.style.display = 'block';
  }
});

            