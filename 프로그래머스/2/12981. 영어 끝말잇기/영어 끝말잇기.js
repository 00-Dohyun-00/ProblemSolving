function solution(n, words) {
    var answer = [];
    let wrongIdx = -1;

    for(let i = 0; i<words.length ; i++){
        // 한 글자인지
        if(words[i].split('').length == 1){
            wrongIdx = i;
        }
        
        //1. 이어지는 단어인지
        if(i !== 0){
            let f = words[i].split('')[0];
            let l = words[i-1].split('')[words[i-1].length - 1];
            if(f !== l){
                if((wrongIdx != -1 && i < wrongIdx) || wrongIdx == -1){
                    wrongIdx = i;
                }
            }
        }
        
        //2. 같은 단어 쓴 적 있는지
        for(let j = 0; j<i; j++){
            if(words[i] == words[j]){
                if((wrongIdx != -1 && i < wrongIdx) || wrongIdx == -1){
                    wrongIdx = i;
                }
            }
        }
    }
    
    // 없으면
    if(wrongIdx == -1){
        return [0,0];
    }
    
    // 있으면
    let a = 0;
    let b = 1;
    for(let i = 0; i<wrongIdx+1; i++){
        if(a == n){
            a = 1;
            b++;
        } else {
            a++;
        }
    }
    
    answer = [a, b];
    
    

    return answer;
}