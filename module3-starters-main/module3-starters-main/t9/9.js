const button = document.querySelector('button');

button.addEventListener('click', function () {
  const calc = document.getElementById('calculation').value;
  let result;

  if (calc.includes('+')) {
    const parts = calc.split('+');
    result = parseInt(parts[0]) + parseInt(parts[1]);
  } else if (calc.includes('-')) {
    const parts = calc.split('-');
    result = parseInt(parts[0]) - parseInt(parts[1]);
  } else if (calc.includes('*')) {
    const parts = calc.split('*');
    result = parseInt(parts[0]) * parseInt(parts[1]);
  } else if (calc.includes('/')) {
    const parts = calc.split('/');
    result = parseInt(parts[0]) / parseInt(parts[1]);
  }

  document.getElementById('result').textContent = result;
});