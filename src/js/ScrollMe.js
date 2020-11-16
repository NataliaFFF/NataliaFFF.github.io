class ScrollMe {
  constructor() {
    this.trigger = document.querySelectorAll('.scrollTrigger');
    this.scrollTo = document.querySelector('.scrollToElement');

    this.bindEvents();
  }

  bindEvents() {
    this.trigger.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollTo.scrollIntoView({block: "start", behavior: "smooth"});
      });
    });
  }
}

export default new ScrollMe();
