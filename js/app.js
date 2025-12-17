function submit() {
  const button = document.querySelector('.button');
  const input = document.querySelector('#input');
  const form = document.getElementById('form');
  const secondAnimate = document.getElementById('secondWrap');
  button.addEventListener('click', () => {
    const email = input.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValidEmail) {
      form.style.display = 'none'; // Скрываем форму

      // Плавное добавление SVG через requestAnimationFrame
      requestAnimationFrame(() => {
        const x = Math.round(Math.random() * 5);
        secondAnimate.innerHTML = `
          <img src="img/second.svg?v=${x}" alt="" style="width: 100%; height: 100vh;">
        `;
      });
    }
  });
}

function startAnimation() {
  const firstAnimate = document.getElementById('first');
  const form = document.getElementById('form');

  form.style.display = 'none'; // Скрываем форму
  const x = Math.round(Math.random() * 5);

  // Плавное добавление SVG через requestAnimationFrame
  requestAnimationFrame(() => {
    firstAnimate.innerHTML = `
      <img src="img/first.svg?v=${x}" alt="" style="width: 100%; height: 100vh;">
    `;
  });

  // Задержка перед скрытием первого анимационного элемента
  setTimeout(() => {
    firstAnimate.style.display = 'none'; // Скрываем первое изображение
    form.style.display = 'flex'; // Показываем форму
  }, 4500); // 4.5 секунды для завершения анимации
}

// Запускаем анимацию и обработчик отправки формы
startAnimation();
submit();
