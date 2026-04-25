function solution(brown, yellow) {
    var answer = [];
    
    for(let i = 1; i <= yellow; i++){
        if(yellow % i == 0){
            if((((yellow / i) * 2) + (i * 2) + 4) == brown){
                answer = [((yellow / i) + 2) , (i + 2)];
                break;
            }
        }
    }
    
    return answer;
}