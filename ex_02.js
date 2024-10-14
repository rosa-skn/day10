function checkFuel(fuel) {
    return new Promise((good, notready) => {
        if (fuel >= 9) {
            good("Ready to launch");
        } else {
            notready("Please refill fuel");
        }
    });
}
const fuel = 12;

checkFuel(fuel)
    .then((message) => {
        console.log(message);
    })
    .catch((notready) => {
        console.log(notready);
    });
