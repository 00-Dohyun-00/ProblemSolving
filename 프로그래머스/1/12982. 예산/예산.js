function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b) => a-b);
    for(let i=0; i<d.length; i++){
        if(budget-d[i] >= 0) {
            answer++;
            budget = budget-d[i];
        } else {
            break;
        }
    }
    return answer;
}