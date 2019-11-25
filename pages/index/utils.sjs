const trackStyle = (start, end) => {
  const smallerX = Math.min(start, end)
  const deltaX = Math.abs(start - end)
  return {
    left: `${smallerX}%`,
    width: `${deltaX}%`
  }

};

export default {
  trackStyle
};
