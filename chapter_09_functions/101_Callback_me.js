function john_is_working(worker, callback) {
    let work = worker;
    callback(worker);
}

function postOnTwitter(work) {
    console.log(`Just finished ${work}! 🎉`);
}

john_is_working("Computer class", postOnTwitter);

// Output:
// Just finished Computer class! 🎉     
