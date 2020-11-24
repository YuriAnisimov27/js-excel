export function capitalize(string = '') {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(cur, tar) {
  const start = Math.min(cur, tar);
  const finish = Math.max(cur, tar);
  return new Array(finish - start + 1)
      .fill(start)
      .map((el, index) => el + index);
}
