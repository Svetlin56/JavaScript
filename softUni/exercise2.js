function solve() {
    const firstNameInput = document.getElementById('first_name');
    const lastNameInput = document.getElementById('last_name');
    const phoneInput = document.getElementById('phone');
    const addBtn = document.getElementById('add_btn');

    const pendingList = document.getElementById('pending_contact_list');
    const contactList = document.getElementById('contact_list');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!firstName || !lastName || !phone) return;

        const li = document.createElement('li');
        li.className = 'contact';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'names';
        nameSpan.textContent = `${firstName} ${lastName}`;

        const phoneSpan = document.createElement('span');
        phoneSpan.className = 'phone_number';
        phoneSpan.textContent = phone;

        const editBtn = document.createElement('button');
        editBtn.className = 'edit_btn';
        editBtn.textContent = 'Edit';

        const verifyBtn = document.createElement('button');
        verifyBtn.className = 'verify_btn';
        verifyBtn.textContent = 'Verify';

        li.appendChild(nameSpan);
        li.appendChild(phoneSpan);
        li.appendChild(editBtn);
        li.appendChild(verifyBtn);
        pendingList.appendChild(li);

        firstNameInput.value = '';
        lastNameInput.value = '';
        phoneInput.value = '';

        editBtn.addEventListener('click', () => {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            phoneInput.value = phone;
            pendingList.removeChild(li);
        });

        verifyBtn.addEventListener('click', () => {
            pendingList.removeChild(li);

            const verifiedLi = document.createElement('li');
            verifiedLi.className = 'verified_contact';

            const verifiedNameSpan = document.createElement('span');
            verifiedNameSpan.className = 'names';
            verifiedNameSpan.textContent = `${firstName} ${lastName}`;

            const verifiedPhoneSpan = document.createElement('span');
            verifiedPhoneSpan.className = 'phone_number';
            verifiedPhoneSpan.textContent = phone;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete_btn';
            deleteBtn.textContent = 'Delete';

            verifiedLi.appendChild(verifiedNameSpan);
            verifiedLi.appendChild(verifiedPhoneSpan);
            verifiedLi.appendChild(deleteBtn);
            contactList.appendChild(verifiedLi);

            deleteBtn.addEventListener('click', () => {
                contactList.removeChild(verifiedLi);
            });
        });
    });
}
