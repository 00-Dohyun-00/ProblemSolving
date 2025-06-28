function solution(brown, yellow) {
    var answer = [];
    
    for(let i=1; i<=yellow; i++){
        let x = yellow / i;
        let y = i
        let need = ((x + 2) * 2) + (i * 2); 
        if(need === brown){
            answer = [(x + 2),  (i + 2)];
            break;
        }   
    }
    return answer;
}