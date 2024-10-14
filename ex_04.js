function initializeMachine(machineName, timeRequired) {
    return new Promise((machine) => {
        setTimeout(() => {
            machine(`${machineName} initialized`);
        }, timeRequired * 1000);
    });
}
initializeMachine("Computer", 3).then((result) => {
    console.log(result);
});
