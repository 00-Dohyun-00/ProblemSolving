function solution(want, number, discount) {
    var answer = 0;
    let hash = new Map(); // key: want, value: number
    
    // want, number를 map에 저장
    for(let i = 0; i<want.length; i++){
        hash.set(want[i], number[i]);
    }
    
    // // 값을 기준으로 내림차순 정렬
    // hash = new Map(
    //     [...hash.entries()].sort((a, b) => b[1] - a[1])
    // );
    
    // discount 10일씩 체크
    for(let i = 0; i<discount.length; i++){
        // 10일 이하로 남으면 break
        if(discount.length - i < 10) break;

        // 10일씩 체크
        let tenDays = new Map();
        for(let j = 0; j<10; j++){
            // hash에서 값 가져오기 (있으면 갯수 추가, 없으면 새로 추가)
            const current = tenDays.get(discount[i+j]) || 0;
            tenDays.set(discount[i+j], current + 1);
        }
        
        // hash랑 비교해서 같으면 answer++
        if (hash.size === tenDays.size) {
            let same = false;
            for (const [key, value] of hash.entries()) {
                if (!tenDays.has(key)) {
                    same = false;
                    break;
                } 
                if (tenDays.get(key) !== value) {
                    same = false;
                    break;
                }
                same = true;
            }
            if(same) answer++;
        };
    }
    
    return answer;
}