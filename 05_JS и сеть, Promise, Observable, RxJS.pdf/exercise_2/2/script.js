class Observable {
    constructor(subscriptionFunction) {
        this.subscriptionFunction = subscriptionFunction;
    }
    subscribe(observer) {
        this.subscriptionFunction(observer);
    }
}

function timer(seconds) {
    return new Observable((observer) => {
        setTimeout(() => {
            observer.next("Error");
        }, seconds * 1000);
    });
}

timer(5).subscribe({
    next: value => alert(value)
})