function solution(x) {
    var answer = true;
    let n = String(x).split('').reduce((acc, cur) => acc+Number(cur), 0);
    answer = x % n=== 0;
    return answer;
}