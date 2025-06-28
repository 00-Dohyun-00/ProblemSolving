function solution(maps) {
    var answer = -1;
    let arrx = [0,0,-1,1];
    let arry = [-1,1,0,0];
    
    let q = [[0,0,1]];
    
    let visited = Array.from({length: maps.length}, ()=>{
        return Array(maps[0].length).fill(false);
    })
  
    while(q.length > 0){
        // 현재
        const [x, y, num] = q.shift();
        
        // 탈출
        if(x === maps.length - 1 && y === maps[0].length -1){
            answer = num;
            break;
        }
        
        // 사방 확인
        for(let i =0; i<4; i++){
            const nx = x + arrx[i];
            const ny = y + arry[i];
            
            // 갈 수 있는 장소?
            if(nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length && maps[nx][ny] === 1 && !visited[nx][ny]){
                visited[nx][ny] = true;
                
                q.push([nx, ny, num+1]);
                
            }
        }
    }
    
    return answer;
}