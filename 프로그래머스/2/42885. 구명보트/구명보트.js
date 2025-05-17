function solution(people, limit) {
    var answer = 0;
    let sorted = people.sort((a, b) => a - b); // 오름차순
    
    // 정확성: 81.5, 효율성: 11.1, 합계: 92.6 / 100.0
    //   while(0 < sorted.length){
    //     // 무게 제한 안에 드는 경우
    //     if(sorted[0] + sorted[sorted.length - 1] <= limit){
    //         // 배열에서 삭제
    //         // 카운트 ++
    //         sorted.splice(0, 1);
    //         sorted.splice(sorted.length - 1, 1);
    //         answer++;      
    //     } 
    //     // 함께 배에 탈 수 있는 사람이 없는 경우
    //     else{
    //         // 배열에서 삭제
    //         // 카운트 ++
    //         sorted.splice(sorted.length - 1, 1);
    //         answer++;
    //     }
    // }
    
    // 정확성: 81.5, 효율성: 14.8, 합계: 96.3 / 100.0
//     let startIdx = 0;
//     let endIdx = sorted.length - 1;
    
//     while(0 <= endIdx - startIdx){
//         // 마지막 한 명
//         if(endIdx - startIdx === 0){
//             // 카운트 ++
//             // while문 탈출
//             answer++;
//             break;
//         }
//         // 무게 제한 안에 드는 경우
//         if(sorted[startIdx] + sorted[endIdx] <= limit){
//             // startIdx++, endIdx-- 
//             // 카운트 ++
//             startIdx++; 
//             endIdx--; 
//             answer++;      
//         } 
//         // 함께 배에 탈 수 있는 사람이 없는 경우
//         else{
//             // endIdx-- 
//             // 카운트 ++
//             endIdx--;
//             answer++;
//         }
//     }
    
    let startIdx = 0;
    let endIdx = sorted.length - 1;
    
    while(0 <= endIdx - startIdx){
        // 무게 제한 안에 드는 경우
        if(sorted[startIdx] + sorted[endIdx] <= limit){
            // startIdx++, endIdx-- 
            startIdx++;    
        } 
        // 카운트++
        // endIdx--
        answer++;
        endIdx--;  
    }
    
    
    return answer;
}