function solution(priorities, location) {
    var answer = 0;
    let isDone = false;
    
    while(isDone == false){
        let isBigger = false;
        for(let i = 1; i<priorities.length; i++){
            if(priorities[0] < priorities[i]){
                isBigger = true;
                break;
            }
        }
        
        if(isBigger){
             if(location !== 0){

                    priorities.push(priorities[0]);
                    priorities.shift();
                    location--;
              
            } else {
               
                    priorities.push(priorities[0]);
                    priorities.shift();
                    location = priorities.length -1;
                    i = 1;
                }
            }   
        else {
            if(location !== 0){
                    priorities.shift();
                    location--;
                    answer++;
            } else {
                    answer++;
                    isDone = true;
                 
                    break;
                }
                
        }
    }
    return answer;
}