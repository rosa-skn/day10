function worker(task, timeRequired) {
    return new Promise((todo) => {
        setTimeout(() => {
            todo(`${task} done`);
        }, timeRequired);
    });
}
async function factory(tasks) {
    for (const { task, timeRequired } of tasks.tasks) {
        const time = parseInt(timeRequired);
        const result = await worker(task, time);
        console.log(result);
    }
}
let tasks = {
    tasks: [
        {
            task: 'Teaching Astronomy',
            timeRequired: '500',
        },
        {
            task: 'Going to work',
            timeRequired: '1000',
        },
        {
            task: 'Repair module',
            timeRequired: '1000',
        },
        {
            task: 'Refill fuel',
            timeRequired: '1500',
        },
    ],
};
factory(tasks);


