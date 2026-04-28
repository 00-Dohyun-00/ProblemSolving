function solution(n, words) {
    var answer = [];
    let is = false;
    let idx = -1;

    for(let i = 0; i<words.length; i++){
        // 마지막 문자 확인
        if(i != 0 && words[i-1][words[i-1].length-1] !== words[i][0]){
            is = true;
            idx = i;
            break;
        }
            
        // 등장했던 단어인지 확인
        for(let j = 0; j < i; j++){
            if(words[i] == words[j]){
                is = true;
                idx = i;
                break;
            }
        }
        if(is) break;
            
        // 한 글자인지 확인
        if(words[i].length == 1){
            is = true;
            idx = i;
            break;
        }
    }
    
    if(!is) return [0,0];
    
 let cnt = (idx % n) + 1;
let round = Math.floor(idx / n) + 1;

    
    answer = [cnt, round]

    return answer;
}