function solution(progresses, speeds) {
    var answer = [];
    let q = [];
    
    for(let i =0; i<progresses.length; i++){
        q.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let check = q[0];
    let cnt = 1;
    for(let i=1; i<q.length + 1; i++){
        if(check >= q[i]){
            cnt++;
        } else {
            check = q[i];
            answer.push(cnt);
            cnt = 1;
        }
    }
    
    return answer;
}