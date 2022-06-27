export function debounce(callback, wait) {
    console.log(callback, wait)
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}