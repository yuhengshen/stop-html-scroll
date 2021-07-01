function stopScroll() {
  const height = document.documentElement.clientHeight;
  const {overflow: bodyOverflow,maxHeight: bodyMaxHeight} = document.body.style;
  const {overflow: htmlOverflow, maxHeight: htmlMaxHeight} = document.documentElement.style;
  document.documentElement.style.overflow = `hidden`;
  document.documentElement.style.maxHeight = `${height}px`;
  document.body.style.overflow = `hidden`;
  document.body.style.maxHeight = `${height}px`;
  return function resetStyle() {
    document.documentElement.style.overflow = htmlOverflow;
    document.documentElement.style.maxHeight = htmlMaxHeight;
    document.body.style.overflow = bodyOverflow;
    document.body.style.maxHeight = bodyMaxHeight;
  }
}

export default stopScroll;
