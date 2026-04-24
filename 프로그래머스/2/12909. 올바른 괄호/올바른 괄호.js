function solution(s){
    var answer = true;
    let arr = s.split('');
    let stack = [];

    for(let i =0; i<arr.length; i++){
        if(stack.length == 0){
            if(arr[i] == '('){
                stack.push(arr[i]);
            } else {
                answer = false;
                break;
            }
        } else if(stack[stack.length - 1] == '(' && arr[i] == ')'){
            stack.pop();
        } else if(stack[stack.length - 1] == '(' && arr[i] == '('){
            stack.push(arr[i]);
        } else if(stack[stack.length - 1] == ')'){
            answer = false;
            break;
        } 
    }

    if(stack.length !== 0) {
        answer = false;
    }

    return answer;
}