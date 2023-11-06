function toCamelCase(str) {
    return str.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
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