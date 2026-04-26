function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => a - b);
    
    for(let i = 0; i<citations[citations.length-1]; i++){
        let cnt = 0;
        for(let j = 0; j<citations.length; j++){
            if(i <= citations[j]){
                cnt++;
            }
        }
        if(cnt >= i){
            answer = i;
        } else {
            break;
        }
        
    }
    
    return answer;
}