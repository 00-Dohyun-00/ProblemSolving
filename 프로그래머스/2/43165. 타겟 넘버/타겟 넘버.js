function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (index, sum) => {
      
        // 탈출
        if(index === numbers.length){
            if(sum === target){
                answer++;
            }
            return;
        }
        
        // 진행
        dfs(index+1, sum + numbers[index]);
        dfs(index+1, sum - numbers[index]);
    }
    
    dfs(0,0);
    return answer;
}