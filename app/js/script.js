const heart = document.querySelectorAll('.fa-heart');

heart.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('fas');
  })
})