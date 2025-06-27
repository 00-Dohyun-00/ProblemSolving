function solution(clothes) {
    //20250627
    let hash = new Map();
    
    clothes.forEach(item => {
        let newValue = hash.get(item[1]) ? hash.get(item[1]) + ',' + item[0] : item[0];
        hash.set(item[1], newValue);
    })
    
    let cnt = 1;;
    for (const [key, value] of hash){
        cnt *= (value.split(',').length + 1);
    }
    
    return cnt - 1
    
    
    
    
    
    
    
    
    
    
//     // js에서 hash map 사용 (Map은 키-값 쌍으로 이루어진 컬렉션)
//     const map = new Map();
    
//     for (let i =0; i < clothes.length ; i++) {

//         // ["yellow_hat","header"] -> 의상, 종류
//         const cloth = clothes[i][0];
//         const clothType = clothes[i][1];
        
//         // 해쉬 맵에서 리스트 가져옴. 없으면 신규 생성
//         const list = map.get(clothType) ?? new Array();
        
//         // list 마지막에 해당 의상을 추가.
//         list.push(cloth)
        
//         // 해쉬맵에 업데이트 : 신규 -> 추가, 존재 -> 업데이트
//         map.set(clothType, list)
            
//     }
    
//     // 모든 경우를 곱 하려면 최초 값이 1이여야 함.
//     let answer = 1;
    
//     for (let key of map.keys()) {
//         // key는 옷의 종류 값
        
//         // 총 경우의 수 -> 해당 종류의 의상이 있는 경우에는 입지 않는 경우도 생각해야 함.
//         // header -> "yellow_hat" 만 등록되어 있다면? 모자를 입지 않는 경우도 생각 해야 함.
//         answer *= map.get(key).length + 1; 
        
//     }
    
//     // 옷을 아무것도 입지 않는 케이스는 제외
//     return answer - 1;
}