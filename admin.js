const key = 'hairYeahDemoInquiries';
const list = document.querySelector('#inquiry-list');

function safe(value) {
  const node = document.createElement('span');
  node.textContent = value;
  return node.innerHTML;
}

function render() {
  const entries = JSON.parse(localStorage.getItem(key) || '[]');
  list.innerHTML = entries.length ? entries.map((entry) => `
    <article class="inquiry-row">
      <div><span class="inquiry-kind">${safe(entry.interest)}</span><h3>${safe(entry.name)}</h3><p>${safe(entry.message)}</p></div>
      <div class="inquiry-meta"><strong>${safe(entry.reply)}</strong><span>Saved sample</span></div>
    </article>`).join('') : '<div class="empty-state"><span>✦</span><h3>No sample inquiries yet</h3><p>Submit the form on the website to test this local demo flow.</p></div>';
}

document.querySelector('#clear-samples').addEventListener('click', () => {
  localStorage.removeItem(key);
  render();
});

render();
