const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Attach event listeners using loop
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const action = button.getAttribute('data-action');

    if (action === 'clear') {
      display.value = '';
    } else if (action === 'delete') {
      display.value = display.value.slice(0, -1);
    } else if (action === 'calculate') {
      try {
        // Use eval safely with check
        if (display.value.trim() !== '') {
          display.value = eval(display.value);
        }
      } catch {
        display.value = 'Error';
      }
    } else if (value) {
      display.value += value;
    }
  });
});
