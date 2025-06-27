function solution(arr) {
    var answer = [];
    if(arr.length === 1) answer = [-1];
    else {
        answer = arr.filter(item => item !== Math.min(...arr))
    } 
    return answer;
}