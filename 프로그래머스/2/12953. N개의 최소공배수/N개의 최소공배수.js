function solution(arr) {
    var answer = 0;
    let cnt = 1;
    let n = 0

    while(true){
        n = arr[arr.length - 1] * cnt;
        cnt++;
        
        let isok = true;
        for(let i = 0; i<arr.length - 1; i++){
            if(n % arr[i] !== 0) {
                isok = false;
                break;
            }
        }
        if(isok){
            answer = n;
            break;
        }
    }
    return answer;
}