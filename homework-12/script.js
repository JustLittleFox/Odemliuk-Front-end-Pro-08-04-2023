function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    return num * pow(num, degree - 1);
}
const result = pow(3, 4);
alert(result);