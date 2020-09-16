export function getRandomIntX() {
    let min = Math.ceil(250);
    let max = Math.floor(window.innerWidth - 250);
    return Math.floor(Math.random() * (max - min)) + min;
  }