const right = document.querySelector('.right'),
    left = document.querySelector('.left'),
    form = document.querySelector('#contact-form'),
    addBtn = document.querySelector('#addBtn');

renderList();

form.onsubmit = onAddContactHandler;
right.onclick = removeContact;


function removeContact(event) {
    if (event.target.tagName === 'BUTTON') {
        const index = +(event.target.dataset.index);
      Store.remove(index);
      renderList();
  }
}


function renderList() {
    const contacts = Store.getAll();
    right.innerHTML = contacts.map(mapToRow).join('');
}

function mapToRow(contact, index) {
    return `
    <div>
    <h2>${contact.name} ${contact.lastName}</h2>
    <h3>${contact.phone}</h3>
    <p>${contact.email}</p>
    <br><button data-index=${index} class='button-remove'>Remove</button>
    </div>
    `
}

function onAddContactHandler(e) {
    e.preventDefault();
    const form = e.target;
    const contact = new Contact(
        form.name.value,
        form.lastName.value,
        form.phone.value,
        form.email.value
    );
    Store.save(contact);
    renderList();
    form.reset();
}