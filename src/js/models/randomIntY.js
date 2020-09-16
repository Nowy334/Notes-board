export function getRandomIntY() {
    let min = Math.ceil(100);
    let max = Math.floor(window.innerHeight - 250);
    return Math.floor(Math.random() * (max - min)) + min;
  }