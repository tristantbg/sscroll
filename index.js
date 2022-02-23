import tinkerbell from 'tinkerbell'

const getOffset = node => node.getBoundingClientRect().top + window.pageYOffset

// Easing
// https://github.com/jaxgeller/ez.js/blob/master/ez.js

const easeOutExpo = (t, b, c, d) => {
  return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
}

export default (target, opts = {}) => {
  if (!target) return

  const end = getOffset(target) + (opts.offset || 0)
  const duration = opts.duration || 500
  const ease = opts.ease || easeOutExpo

  return duration ? (
    tinkerbell(window.pageYOffset, end, duration, ease)(p => window.scrollTo(0, p))
  ) : (
    window.scrollTo(0, end)
  )
}
