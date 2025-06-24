function solution(priorities, location) {
    var answer = 0; 
    let newarr = []; 
    priorities.map((v, i) => newarr.push({'key': v, 'idx':i}));
    
    while(newarr.length > 0){
        let keys = newarr.map(v => v.key);
        if(newarr[0].key === Math.max(...keys)){
            answer++;   
            if(newarr[0].idx === location) break;
            newarr.splice(0, 1);        
        } else {
            newarr.push(newarr[0]);
            newarr.splice(0, 1);        
        }
    }
    
    return answer;
}