class IntersectionObserverList {
  mapping;
  observer;
  constructor() {
    this.mapping = new Map();
    this.observer = new IntersectionObserver(
      (entries) => {
        for (var entry of entries) {
          var callback = this.mapping.get(entry.target);

          callback && callback(entry.isIntersecting);
        }
      },
      {
        rootMargin: "300px 0px 300px 0px",
      }
    );
  }
  add(element, callback) {
    this.mapping.set(element, callback);
    this.observer.observe(element);
  }
  ngOnDestroy() {
    this.mapping.clear();
    this.observer.disconnect();
  }
  remove(element) {
    this.mapping.delete(element);
    this.observer.unobserve(element);
  }
}
const observer = new IntersectionObserverList();

$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});

$('[data-animate="true"]').each(function (i) {
  console.log("$(this)", $(this));
  var element = $(this)[0];
  observer.add(element, (isIntersecting) => {
    if (isIntersecting) {
      $(this).addClass("animate-slide-down");
    } else {
      $(this).removeClass("animate-slide-down");
    }
  });
});
