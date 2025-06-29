function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let q = Array(bridge_length-1).fill(0);
    let time = 1;
    
    q.push(truck_weights.shift());
    
    while(q.reduce((acc, cur) => acc + cur, 0) > 0){
        time++;
        // 1초 경과마다 한 칸씩 이동
        q.shift();
        // 다음 트럭을 더한 총합 무게가 weight보다 가벼우면 트럭 하나 채우기
        let totalWeight = q.reduce((acc, cur) => acc + cur, 0);
        if(truck_weights[0] && totalWeight + truck_weights[0] <= weight){
            q.push(truck_weights.shift());
        } else {
            q.push(0);
        }
        
    }
    
    answer = time;
    
    return answer;
}