function solution(topping) {
// var answer = 0;    

//     topping.forEach((item, idx) =>{
        
//         let older = topping.slice(0, idx);
//         let younger = topping.slice(idx, topping.length);

//         const olderCnt = new Set(older).size;
//         const youngerCnt = new Set(younger).size;
        
//         if(olderCnt === youngerCnt){
//             answer++;
//         }
//     })
    
    // 1) 오른쪽(미처리 구간)의 빈도수와 고유 개수 계산
    const rightMap = new Map();
    for (const v of topping) {
        rightMap.set(v, (rightMap.get(v) || 0) + 1);
    }
    let rightUnique = rightMap.size;

    // 2) 왼쪽(처리 완료 구간)의 고유 집합
    const leftSet = new Set();
    let answer = 0;

    // 마지막 인덱스 뒤는 자를 수 없으므로 length-1 까지만 순회
    for (let i = 0; i < topping.length - 1; i++) {
      const v = topping[i];

      // 왼쪽 집합에 원소 추가
      leftSet.add(v);

      // 오른쪽 빈도수 하나 차감
      const cnt = rightMap.get(v) - 1;
      if (cnt === 0) {
        rightMap.delete(v);
        rightUnique--;
      } else {
        rightMap.set(v, cnt);
      }

      // 두 구간의 고유 개수가 같으면 조건 충족
      if (leftSet.size === rightUnique) {
        answer++;
      }
    }
 
    
    return answer;
}