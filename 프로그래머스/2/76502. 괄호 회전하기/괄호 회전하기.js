function solution(s) {
    var answer = 0;
    let stack = [];
    let hash = new Map();
    let arr = s.split('');
    
    hash.set('}', '{');
    hash.set(']', '[');
    hash.set(')', '(');
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            const lastKey = stack[stack.length - 1];
            
            if(lastKey && hash.get(arr[j]) === lastKey){
                stack.splice(stack.length - 1, 1);
            } else {
                stack.push(arr[j]);
            }
        }
       
        if(stack.length === 0){
            answer++;
        }
        stack = [];
    
        arr.push(arr[0]);
        arr.splice(0, 1);
 
    }

    return answer;
}