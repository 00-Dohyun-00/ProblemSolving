function solution(k, tangerine) {
    var answer = 0;
    
    tangerine.sort((a,b) => a - b); // 오름차순
    
    let cnt = [{size: tangerine[0], count: 0}];
    // 귤 사이즈별로 개수 정리
    for(let i = 0; i < tangerine.length; i++){
        if(tangerine[i] === cnt[cnt.length - 1].size){
            cnt[cnt.length - 1].count = cnt[cnt.length - 1].count + 1;
        } else {
            cnt.push({size: tangerine[i], count: 1});
        }
        
    }
    
    cnt.sort((a, b) => b.count - a.count); // 개수 기준 내림차순
    
    // count가 k개가 될 때 까지 더하기, answer++
    let tangerineCnt = 0
    for(let i = 0; i < cnt.length; i++){
        if(tangerineCnt >= k) break;
      
        tangerineCnt += cnt[i].count;
        answer++;
    
    }
    return answer;
}