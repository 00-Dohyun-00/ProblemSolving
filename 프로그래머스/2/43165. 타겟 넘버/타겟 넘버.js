function solution(numbers, target) {
    var answer = 0;
    
    const fn = (idx, sum) => {
        
        //탈출
        if(idx === numbers.length){
            if(sum === target){
                answer++;
            }
            return;
        }
        
        
        //진행
        fn(idx+1, sum + numbers[idx]);
        fn(idx+1, sum - numbers[idx]);
        
    }
    
    fn(0, 0);
    return answer;
}