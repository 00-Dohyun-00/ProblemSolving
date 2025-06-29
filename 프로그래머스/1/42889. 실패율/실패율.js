function solution(N, stages) {
    let answer = [];
    var arr = Array.from({length: N+1},(_, i)=> [i, 0]);
 
    for(let i = 0; i<stages.length; i++){
        if(arr[stages[i]-1]){
            arr[stages[i]-1][1]++;
        }
    }

    for(let i = 1; i<arr.length; i++){
        let clear = arr.slice(i-1).reduce((acc,cur) => acc+cur[1], 0);
        let yet = arr[i-1][1]
        
        let p = yet / clear;
        
        arr[i-1].push(p);
   
    }
    
    arr.sort((a,b) => b[2] - a[2]);
    
    answer = arr.map(item => item[0] + 1);
    answer.pop();
    return answer;
}