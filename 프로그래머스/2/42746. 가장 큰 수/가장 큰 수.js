function solution(numbers) {
  const strs = numbers.map(String);
  strs.sort((a, b) => (b + a).localeCompare(a + b)); // 핵심
  const result = strs.join('');
  return result.startsWith('0') ? '0' : result;
}