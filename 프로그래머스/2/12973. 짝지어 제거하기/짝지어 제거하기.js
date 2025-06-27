function solution(s)
{
    // 20250627
    let stack = [];
    
    for(let i = 0; i<s.length; i++){
        if(stack.length === 0 || stack[stack.length -1] !== s[i]){
            stack.push(s[i]);
        } else {
            stack.splice(stack.length -1, 1);
        }
    }

    if(stack.length === 0){
        return 1
    } else {
        return 0
    }   
        
// 20231118  
//     let aStack =[]
//     let bStack =[]
    
//     s = s.split('')
    
//     const f = (stack1, stack2, s, i) => {
//          if(s[i] === stack1[stack1.length-1]){
//                 stack1.pop()
//             } else {
//                 stack2.push(s[i])
//             }
//     }
    
//     for(let i = 0 ; i < s.length; i++){
//         if(i % 2 !== 0){
//             f(bStack, aStack, s, i)
//         } else if(i % 2 === 0){
//             f(aStack, bStack, s, i)
//         }
//     }
    
//     if(aStack.length === 0 && bStack.length === 0){
//         return 1
//     } else {
//         return 0
//     }
 
}