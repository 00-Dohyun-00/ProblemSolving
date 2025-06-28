function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (idx, sum) => {
        // 탈출
        if(idx === numbers.length){
            if(target === sum){
                answer++;
            }
            return;
        }
            
        // 진행
        dfs(idx+1, sum + numbers[idx]);
        dfs(idx+1, sum - numbers[idx]);
    }
    dfs(0,0);
    return answer;
}