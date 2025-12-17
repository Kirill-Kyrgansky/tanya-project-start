function submit() {
  const button = document.querySelector('.button');
  const input = document.querySelector('#input');
  const form = document.getElementById('form');
  const secondAnimate = document.getElementById('secondWrap');
  button.addEventListener('click', () => {

    const email = input.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValidEmail) {
      form.style.display = 'none';
      requestAnimationFrame(() => {
        secondAnimate.innerHTML = `
          <img src="img/second.svg" id="second" alt=""
               style="width: 100%; height: 100vh;">
        `;
      });
    }
  })
}


function startAnimation() {
  const firstAnimate = document.getElementById('first');
  const form = document.getElementById('form');
  form.style.display = 'none';

  requestAnimationFrame(() => {
    firstAnimate.innerHTML = `
          <img src="img/first.svg" id="first" alt=""
       style="
    width: 100%;
    height: 100vh;
">
        `;
  });

  setTimeout(() => {
    firstAnimate.remove()
    form.style.display = 'flex';
  }, 4500)
}

startAnimation()
submit()
