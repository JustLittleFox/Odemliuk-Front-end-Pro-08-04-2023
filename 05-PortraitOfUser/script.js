const age = prompt('What is your year of birth?', '');

if (age === null) {
    alert(`It is a pity that you did not want to enter your year of birth`);
} else if (age === ('')) {
    alert(`It is a pity that you did not want to enter your year of birth`);
} else {

    const city = prompt('What city do you live in?', '');

    if (city === null) {
        alert((`It is a pity that you did not want to enter your city`));
    } else if (city === ('')) {
        alert((`It is a pity that you did not want to enter your city`));
    } else {

        const sport = prompt('What is your favourite kind of sport?', '');

        if (sport === null) {
            alert(`It is a pity that you did not want to enter your favourite sport`);
        } else if (sport === ('')) {
            alert(`It is a pity that you did not want to enter your favourite sport`);
        } else {

            let message = `You are ${2023 - age} years old \nYou live in ${city}`;

            if (city === `Kyiv`) {
                message += `, the capital of Ukraine`;
            } else if (city === `Washington`) {
                message += `, the capital of USA`;
            } else if (city === `London`) {
                message += `, the capital of Great Britan`;
            } else if (city === `Warsaw`) {
                message += `, the capital of Poland`;
            }

            if (sport === `hockey`) {
                message += `\nCool, you whant to be like Alexandr Ovechkin?`;
            } else if (sport === `basketball`) {
                message += `\nCool, you whant to be like Michael Jordan?`;
            } else if (sport === `football`) {
                message += `\nCool, you whant to be like Cristiano Ronaldo?`;
            } else if (sport === sport) {
                message += `\nCool, you whant to be ${sport} champion?`
            }

            alert(message);
        }
    }
}
