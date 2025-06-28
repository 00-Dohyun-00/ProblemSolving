function solution(begin, target, words) {
    var answer = 0;
    
    let q = [[begin, 0]];
    let visited = Array.from({length: words.length}).fill(false);
    
    while(q.length > 0){
        let [now, cnt] = q.shift();
        
        // 탈출
        if(target === now){
            answer = cnt;
            break;
        }
        
        for(let i=0; i<words.length; i++){
            let difCnt = 0;
            
            if(visited[i] === false){
                for(let j=0; j<words[i].length; j++){
                    if(now[j] !== words[i][j]) difCnt++;
                }

                if(difCnt === 1){
                    q.push([words[i], cnt + 1]);
                    visited[i] = true;
                }
            }
          
        }
    }
    return answer;
}