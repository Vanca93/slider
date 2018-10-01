var slider = tns({
            container: ".my-slider",
            items: 4,
            slideBy: 1,
            speed: 800,
            gutter: 20,
            controls: false,
            nav: false,
        });
let a = document.querySelectorAll('img');
let title = document.getElementById('title');
let review = document.getElementById('review');
let counter = document.getElementById('counter');
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function(e) {
        let id = parseInt(e.target.src.slice(-6, -5));
        counter.innerHTML = "0" + id;
        id = id > 3 ? id - 4 : id + 1;
        slider.goTo(id);
        title.innerHTML = a[i].getAttribute("data-title");
        review.innerHTML = a[i].getAttribute("data-review");
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove('selected');
            a[i].src === e.target.src && a[i].classList.add('selected');
        }
    });
}
document.querySelector('.arrow').addEventListener('click', function () {
    let arr = document.getElementsByClassName('tns-slide-active');
    slider.goTo('prev');
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('selected');
    }
    console.log(arr[arr.length - 1]);
    arr[arr.length - 1].classList.add('selected');
    let id = parseInt(arr[arr.length - 1].src.slice(-6, -5));
    counter.innerHTML = "0" + id;
    title.innerHTML = a[arr.length - 1].getAttribute("data-title");
    review.innerHTML = a[arr.length - 1].getAttribute("data-review");
});