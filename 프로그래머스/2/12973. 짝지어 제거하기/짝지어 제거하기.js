function solution(s)
{
    var answer = -1;
    let stack = [];
    s = s.split('');

    for(let i = 0; i<s.length; i++){
        if(i == 0){
            stack.push(s[i]);
        } else {
            if(stack[stack.length-1] == s[i]){
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    
    if(stack.length == 0){
        answer = 1;
    }else {
        answer = 0;
    }
   

    return answer;
}