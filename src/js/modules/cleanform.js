// cleanForm.js
export default function cleanForm() {
  document.body.addEventListener('htmx:afterOnLoad', function (event) {
    if (event.detail.elt.id === 'contact-form') {
      resetForm('contact-form');
    }
    if (event.detail.elt.id === 'add-realty-form') {
      resetForm('add-realty-form');
    }
  });
}

function resetForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.reset();
  }
}
