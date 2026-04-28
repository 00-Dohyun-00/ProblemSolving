function solution(progresses, speeds) {
    var answer = [];
    let queue = [];
    
    for(let i = 0; i<=progresses.length; i++){
        let day = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        if(i == 0){
            queue.push(day);
        } else {
            if(queue[0] >= day){
                queue.push(day);
            } else {
                answer.push(queue.length);
                queue = [day];
            }
        }
        
        
    }
    return answer;
}