var obs = Rx.Observable.create(function (o) {
    setTimeout(() => o.onNext("1"), 1000);
    setTimeout(() => o.onNext("2"), 2000);
    setTimeout(() => o.onNext("3"), 3000);
    setTimeout(() => o.onNext("4"), 4000);
});

var obs2 = Rx.Observable.create(function (o) {
    setTimeout(() => o.onNext("11"), 500);
    setTimeout(() => o.onNext("22"), 1000);
    setTimeout(() => o.onNext("33"), 1500);
    setTimeout(() => o.onNext("44"), 2000);
});

var merged = Rx.Observable.merge(obs, obs2);
var concat = Rx.Observable.concat(obs2, obs);

// obs.subscribe(function(i)  {
//     console.log(i);
// });
// 
// obs2.subscribe(function(i)  {
//     console.debug(i);
// });
// 
// 

merged.subscribe(function(i)  {
    console.log(i);
});


// concat.subscribe(function(i)  {
//     console.log(i);
// });


