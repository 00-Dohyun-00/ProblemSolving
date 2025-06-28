function solution(maps) {
    var answer = 0;
    // console.log(maps); 
    
    const x = [0,0,-1,1];
    const y = [-1,1,0,0];
    
    const q = [[0,0,1]]; // 현재x, 현재y, 이동칸개수
    
    const visited = Array.from({length: maps.length}, ()=>
        Array(maps[0].length).fill(false)
    );
    visited[0][0] = true;
    
    
    while(q.length > 0){
        const [nowX, nowY, num] = q.shift();
        
        // 도착
        if(nowX === maps.length-1 && nowY === maps[0].length -1){
            answer = num;
             console.log(answer)
            break;
        }
        
        // 방향탐색
        for(let i = 0; i<4; i++){
            const nx = nowX + x[i];
            const ny = nowY + y[i];
            
            if(0 <= nx && nx < maps.length && 0 <= ny && ny < maps[0].length && !visited[nx][ny] && maps[nx][ny] === 1){
                q.push([nx, ny, num+1]);
                visited[nx][ny] = true;
            }
        }
        
    }
    // 도착불가
    if(answer === 0){
        answer = -1;
    }
    
    
    
    
    
    return answer;
}