function solution(progresses, speeds) {
    var answer = [];
    let time = [];
    
    for(let i = 0; i<progresses.length; i++){
        time.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    let cnt = 0;
    let idx = 0;
    for(let i = 0; i<time.length; i++){
        if(i == 0){
            cnt++;
        }else {
            if(time[i] > time[idx]){
                answer.push(cnt);
                cnt = 1;
                idx = i;
            } else {
                cnt++;
            }
        }
    }
    answer.push(cnt);
    
    
    return answer;
}