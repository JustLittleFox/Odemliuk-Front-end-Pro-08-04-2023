const name = prompt('What is your name?', 'Please, enter your name here');
if (name === null) {
    alert('Value is not provided');
} else if (name === ('')) {
    alert('Name is not provided');
} else {
    const feel = prompt('Hello, ' + name + '! How are you?', 'Please, enter your feeling here');
    if (feel == null) {
        alert('Value is not provided');
    } else if (feel == ('')) {
        alert('Feeling is not provided');
    } else {
        alert('I am glad that you ' + feel + '');
        console.log(name, feel);
    }
}

