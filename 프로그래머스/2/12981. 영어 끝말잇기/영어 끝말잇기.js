function solution(n, words) {
    var answer = [];
    
    let seen = new Map(); // key : 겹치는 단어 확인, value: 이어지지 않는 단어 확인
    
    for(let i = 0; i <= words.length; i++){
        // 겹치는 단어, 이어지지 않는 단어 없을 경우 [0,0] 반환
        if(i === words.length){
            answer = [0, 0];
            break;
        }
        
        const key = words[i]; // 현재 단어
        const value = key.split('')[key.length - 1]; // 현재 단어의 마지막 글자
        
        // 겹치는 단어, 이어지지 않는 단어 체크
        if(seen.size !== 0){
            const dup = seen.has(key); // 중복 단어 체크
            const notCon = seen.get(words[i-1]) !== key.split('')[0] // 연결되지 않는 단어 체크
            
            if(dup || notCon){
                const personNum = i % n + 1; // 번호
                const turn = Math.floor(i / n) + 1; // 차례
                answer = [personNum, turn]
                break;
            }
        }
        
        // 해당사항 없는 경우 seen에 추가
        seen.set(key, value);
    }

    return answer;
}