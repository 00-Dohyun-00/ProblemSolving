function solution(s) {
    var answer = '';
    let check = s.toUpperCase();
    let upper = [];
    let lower = [];
    for(let i = 0; i<s.length; i++){
        if(check[i] === s[i]){
            upper.push(s[i]);
        } else {
            lower.push(s[i]);
        }
    }
    answer = lower.sort((a,b) => b.localeCompare(a)).join('') + upper.sort((a,b) => b.localeCompare(a)).join('');
    return answer;
}