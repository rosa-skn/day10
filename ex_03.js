function promiseMe(message) {
    return new Promise((promise) => {
        promise(`I promise you to ${message}`);
    });
}
function checkStatus(promise) {
    promise
        .then((result) => {
            console.log(result);
        })
        .finally(() => {
            console.log('Checking status over');
        });
}
checkStatus(promiseMe("fly to the moon"));

