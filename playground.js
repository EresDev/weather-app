const add = (augend, addend, callback) => {
    setTimeout(() => {
        const sum = augend + addend;
        callback(sum);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum);
});
