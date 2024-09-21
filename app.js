document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const bio = document.getElementById('bio').value;

    addUserToList(name, role, bio);
    clearForm();
});

function addUserToList(name, role, bio) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('profile');

    userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>Role: ${role.charAt(0).toUpperCase() + role.slice(1)}</p>
        <p>${bio}</p>
    `;

    if (role === 'mentor') {
        document.getElementById('mentor-list').appendChild(userDiv);
    } else {
        document.getElementById('mentee-list').appendChild(userDiv);
    }
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('role').value = 'mentor';
    document.getElementById('bio').value = '';
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
