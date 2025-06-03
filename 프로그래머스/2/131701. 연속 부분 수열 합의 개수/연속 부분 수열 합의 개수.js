function solution(elements) {
    let newEl = [...elements, ...elements]; // 원형 수열이므로 연속하는 부분 elements 길이 넘을 수 있음
    let arr = new Set;
    
    // i 수열의 길이만큼 반복
    for(let i = 0; i<elements.length; i++){
        // j 각각의 시작 index
        for(let j = 0; j<newEl.length ; j++){
            
            // 기준 숫자 + n개 (i+1개까지)
            let check = [];
            let cnt = 0; 
            while(cnt !== i+1){
                if(!newEl[cnt + j]) break;
              
                check.push(newEl[cnt + j]);
                cnt++;
            }
            
            // 해당값 더해서 arr에 추가
            arr.add(check.reduce((acc,cur) => acc + cur, 0))
        }
    }
    
    return arr.size;
}