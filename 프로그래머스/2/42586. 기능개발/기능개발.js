function solution(progresses, speeds) {
    var answer = [];
    //202507
    let queue = [];
    let days = progresses.map((item, i) => Math.ceil((100 - progresses[i]) / speeds[i]))
    
    let cnt = 1;
    let current = days[0];
    for(let i=0; i<days.length; i++){
        if(current >= days[i+1]){
            cnt++;
        } else {
            current = days[i+1];
            answer.push(cnt);
            cnt = 1;
        }
    }


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // 202505
//     let build = []; // 배포 날짜별로 기능 담은 이중배열
    
//     for(let i = 0; i <= progresses.length -1; i++){
//         let day = Math.ceil((100 - progresses[i]) / speeds[i]); // 배포까지 남은 날짜
        
//         // 첫 번째 기능 바로 push
//         if(build.length === 0 ){
//             build.push([day]);
//         } 
//         // 두 번째 기능부터 계산
//         else {
//             for(let j = 0; j <= build.length - 1; j++){
//                 // build의 마지막 index의 첫 번째 날짜보다 day가 작거나 같으면 같은 날 배포
//                 // (기존 배열에 push)
//                 if(day <= build[build.length -1][0]){
//                     build[build.length -1].push(day);
//                     break;
//                 } 
//                 // day가 크면 다른 날 배포 (새로운 배열 push)
//                 else {
//                     build.push([day])
//                     break;
//                 }
//             }
//         }
//     }
       
//     // 배포 횟수(이중배열 개수) 카운트
//     answer = build.map(item => item.length);

    return answer;
}