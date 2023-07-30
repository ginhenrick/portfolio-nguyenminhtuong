let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });

//Comment
const commentButtons = document.querySelectorAll('.comment-btn');
const commentInputs = document.querySelectorAll('.comment-input');

commentButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const commentBox = document.querySelectorAll('.comment-box')[index];
    const comment = document.createElement('div');
    comment.textContent = commentInputs[index].value;
    commentBox.appendChild(comment);
    commentInputs[index].value = '';
  });
});

//typing text
const typingTextElement = document.getElementById('typingText');
const textToType = 'Software Engineer - Website Developer.';
const typingSpeed = 100; // Milliseconds per character
const pauseDuration = 1000; // Duration to pause before starting again

let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typingTextElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, pauseDuration);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingTextElement.textContent = textToType.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed);
  } else {
    setTimeout(typeText, typingSpeed);
  }
}

// Start the typing effect
typeText();



 // typing text 
 var typed = new Typed(".typing", {
    strings: [
      "Software Engineer",
      "Full-stack Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Full-stack Developer",
      "Sofware Engineer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });




