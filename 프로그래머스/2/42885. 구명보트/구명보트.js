function solution(people, limit) {
    var answer = 0;
    let idx = 0;
    people.sort((a, b) => a - b);
    
    for(let i = people.length - 1; i >= idx; i--){
        if(people[idx] + people[i] <= limit){
            idx++;
        } 
        answer++;
    }
    
    
    return answer;
}