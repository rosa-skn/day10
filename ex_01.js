function promiseMe(message) {
    return new Promise((promise) => {
        promise(`I promise you to ${message}`);
    });
}
promiseMe("fly to the moon").then((result) => {
    console.log(result);
});
