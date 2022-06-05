import {fromEvent, interval, Observable, range, merge} from 'rxjs';
import {filter, map, scan} from 'rxjs/operators';

const decisionWindow = document.querySelector('.decision-window');

//вывод простых чисел
export function sample1() {
    const stream$ = range(1, 100)
    .pipe(                                          //Pipe - Чтобы применить несколько преобразований по очереди
        filter(v => findingPrimeNumbers(v)),
        scan((acc, v) => acc.concat(v), [])  //Scan - оператор для объединения значений
    )
        .subscribe(res => {
            decisionWindow.textContent = res.join(' ')
        });
    stream$.unsubscribe();
}

function findingPrimeNumbers(num) {
    if(num <= 1)
        return false;
    else if(num === 2)
        return  true;
    else {
        for (let i = 2; i < num; i++)
            if(num % i === 0)
                return false;
            return true;
    }
}

//обратный отсчет с ошибкой
export function sample2() {
    const stream$ = new Observable(observer => {
        observer.next(5);
        observer.next(4);
        observer.next(3);
        observer.next(2);
        observer.next(1);
        observer.error("error");
    });

    const subscription = stream$.subscribe({
        next: v => alert(v),
        error: e => alert(e),
        complete: () => alert("complete"),
    });

    subscription.unsubscribe();
}

//смена фона при клике
export function sample3(element) {
    document.body.append(document.createElement('button'));
    document.body.append(document.createElement('button'));
    document.body.append(document.createElement('button'));

    document.getElementsByTagName('button')[0].textContent = "button-1";
    document.getElementsByTagName('button')[1].textContent = "button-2";
    document.getElementsByTagName('button')[2].textContent = "button-3";

    const firstStream = fromEvent(document.getElementsByTagName('button')[0], 'click');
    const secondStream = fromEvent(document.getElementsByTagName('button')[1], 'click');
    const thirdStream = fromEvent(document.getElementsByTagName('button')[2], 'click');

    const generalStream = merge(firstStream.pipe(), secondStream.pipe(), thirdStream.pipe());
    const subscribe = generalStream.subscribe( () => {
        let backgroundColor = "#";
        for(let i  = 0; i < 3; i++) {
            backgroundColor += Math.floor(Math.random() * 99).toString();
        }
        document.body.setAttribute("bgcolor", backgroundColor);
    })

}

export function sample4() {
    const stream$ = interval(1000)
    .pipe(
        map(v => v * Math.floor(Math.random() * 100)),
        filter(v => v % 3 !== 0)
    );
    
    const subscriptions = [];
    subscriptions.push(stream$.subscribe({
        next: v => console.log("first observer: " + v),
        error: e => console.error(e),
        complete: () => console.log("complete stream at sample3"),
    }));

    setTimeout(() => {
        subscriptions.push(
            stream$.subscribe({
                next: v => console.log("second observer: " + v),
                error: e => console.error(e),
                complete: () => console.log("complete stream at sample3"),
            })
        );
    }, 3000);

    setTimeout(() => subscriptions.forEach(s => s.unsubscribe()), 10000);
}
