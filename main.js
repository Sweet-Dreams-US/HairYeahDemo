const key = 'hairYeahDemoInquiries';
const form = document.querySelector('#inquiry-form');
const interest = document.querySelector('#interest');

document.querySelectorAll('[data-interest]').forEach((link) => {
  link.addEventListener('click', () => {
    interest.value = link.dataset.interest;
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form));
  const current = JSON.parse(localStorage.getItem(key) || '[]');
  current.unshift({ ...values, createdAt: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(current.slice(0, 20)));
  form.reset();
  status.textContent = 'Sample inquiry saved in this browser. Nothing was sent.';
});
