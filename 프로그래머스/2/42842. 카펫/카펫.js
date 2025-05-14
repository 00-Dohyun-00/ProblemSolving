function solution(brown, yellow) {
    var answer = [];

        let pfm = []; // prime factorization math
        // 소인수분해
        for(let i = 1; i <= yellow; i++){
            if(yellow % i === 0) pfm.push(i);
        }
        // 갈색 개수 찾기
        for(let i = 0; i < pfm.length / 2; i++){
            let brownCnt = ((pfm[i] + 2) * 2) + (pfm[pfm.length - 1 - i] * 2);
            if(brownCnt === brown){
                let width = pfm[pfm.length - 1 - i] + 2;
                let length = pfm[i] + 2;
                answer = [width, length];
            }
        }  

        
    return answer;
}