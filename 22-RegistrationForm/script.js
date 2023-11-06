function displayData() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(lang => lang.value);


    const table = `
        <table>
            <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Дата народження</th>
                <th>Стать</th>
                <th>Місто</th>
                <th>Адреса</th>
                <th>Мови</th>
            </tr>
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${birthdate}</td>
                <td>${gender}</td>
                <td>${city}</td>
                <td>${address}</td>
                <td>${languages}</td>
            </tr>
        </table>
    `;

    document.getElementById('output-table').innerHTML = table;
    document.getElementById('registration-form').style.display = 'none';
}