function solution(n) {
    var answer = 0;
    let a = 1; 
    let b = 1;
    
    if (n <= 2) return 1;
    
    for (let i = 3; i<=n; i++){
        answer = (a + b) % 1234567;
        a = b;
        b = answer;
    }
    return answer;
}