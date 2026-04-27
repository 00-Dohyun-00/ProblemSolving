function solution(n) {
    var answer = 0;
    
    if(n == 1) return 1;
    if(n == 2) return 2;
    
    let a = 1;
    let b = 2;
    
    for(let i = 3; i<=n; i++){
        let next = (a+b) % 1234567;
        a = b;
        b = next;
    }
    
    answer = b;
    return answer;
}