function toCamelCase(str) {
    if (typeof str === "string" && str.includes("_")) {
        let words = str.split("_");
        for (let i = 1; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        return words.join("");
    } else {
        return str;
    }
}

const response = {
    user_id: 'abc123',
    company_name: 'Hillel',
    contract_expiration_date: '22/11/2013',
    'secret-token': 'unique$ecret',
};

let camelCasedResponse = {};

for (let key in response) {
    const newKey = toCamelCase(key);
    camelCasedResponse[newKey] = response[key];
}

console.log(camelCasedResponse);