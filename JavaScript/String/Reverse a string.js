function reverseString(str) {
    // copying the string so that the arguments are not mutated.
    let strArray = str.split('');

    let forwardIndex = 0;
    let backwardIndex = strArray.length - 1;

    while (forwardIndex < backwardIndex) {
        const charBack = strArray[backwardIndex];
        strArray[backwardIndex] = strArray[forwardIndex];
        strArray[forwardIndex] = charBack;

        forwardIndex++;
        backwardIndex--;
    }

    return strArray.join('');
}