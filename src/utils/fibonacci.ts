function Fibonacci(start: number, end: number) {
  if (start < 0 || end < 0 || start === 0 || end === 0) {
    return 'error';
  } else {
    let sequence = [1, 1];
    let i = 2;
    while (sequence[i - 1] < end) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
      i++;
    }
    return sequence.filter((x) => x >= start && x <= end);
  }
}

export default Fibonacci;
