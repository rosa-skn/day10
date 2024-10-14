async function asyncFunc() {
    return "Hello World !";
}
asyncFunc().then(promise => {
    console.log(promise);
});
