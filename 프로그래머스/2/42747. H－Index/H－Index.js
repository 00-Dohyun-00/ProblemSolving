function solution(citations) {
    var answer = 0;
    // 0 이상 => [0101010]
    // 1 이상 => [0101010]
    for(let i = 0; i<=Math.max(...citations); i++){
        let arr = [];
        for(let j = 0; j<citations.length; j++){
            if(citations[j] >= i){
                arr.push(1);
            } else {
                arr.push(0);
            }
        }
        // h번 이상 인용된 논문이 h편 이하일경우 break
        if(i > arr.filter(v => v === 1).length){
            answer = i - 1;
            break;
        }
    }
    return answer;
}