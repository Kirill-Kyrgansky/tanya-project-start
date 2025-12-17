function test1() {
  const firstAnimate = document.getElementById('first');
  const form = document.getElementById('form');
  form.style.display = 'none';
  setTimeout(() => {
    firstAnimate.style.display = 'none';
    form.style.display = 'flex';
  }, 4000)
}

test1()
