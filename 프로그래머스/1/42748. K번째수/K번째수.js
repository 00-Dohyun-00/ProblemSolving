function solution(array, commands) {
    var answer = [];
    
    // 20250627
    commands.forEach((item) => {
        let newarr = JSON.parse(JSON.stringify(array)); 
        newarr = newarr.splice(item[0]-1, item[1] - item[0] +1) ;
        newarr.sort((a,b) => a - b);
        answer.push(newarr[item[2] -1]);
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

//     for(let i =0; i<commands.length; i++){
//         answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a - b)[commands[i][2]-1]);
        
//     }
   
    return answer;
}