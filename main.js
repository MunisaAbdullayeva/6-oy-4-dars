const users = [
    { name: 'Leanne Graham', username: 'Bret', address: 'Kulas Light', email: 'Sincere@april.biz' },
    { name: 'Ervin Howell', username: 'Antonette', address: 'Victor Plains', email: 'Shanna@melissa.tv' },
    { name: 'Clementine Bauch', username: 'Samantha', address: 'Douglas Extension', email: 'Nathan@yesenia.net' },
    { name: 'Patricia Lebsack', username: 'Karianne', address: 'Hoeger Mall', email: 'Julianne.OConner@kory.org' },
    { name: 'Chelsey Dietrich', username: 'Kamren', address: 'Skiles Walks', email: 'Lucio_Hettinger@annie.ca' },
    { name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', address: 'Norberto Crossing', email: 'Karley_Dach@jasper.info' },
    { name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', address: 'Rex Trail', email: 'Telly.Hoeger@billy.biz' },
    { name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', address: 'Ellsworth Summit', email: 'Sherwood@rosamond.me' },
    { name: 'Glenna Reichert', username: 'Delphine', address: 'Dayna Park', email: 'Chaim_McDermott@dana.io' },
    { name: 'Clementina DuBuque', username: 'Moriah.Stanton', address: 'Kattie Turnpike', email: 'Rey.Padberg@karina.biz' }
];

const container = document.getElementById('cards-container');

users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>Ismi: ${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Manzil:</strong> ${user.address}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
    container.appendChild(card);
});

