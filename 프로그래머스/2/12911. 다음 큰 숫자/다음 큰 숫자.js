function solution(n) {
    var answer = 0;
    let nts = n.toString(2).split('');
    let ntscnt1 = 0;
    
    for(let i = 0; i<nts.length; i++){
            if(nts[i] == 1) ntscnt1++;
        }
    
    
    while(true){
        n++;
        let ts = 0;
        let cnt1 = 0;
        ts = n.toString(2).split('');
        for(let i = 0; i<ts.length; i++){
            if(ts[i] == 1) cnt1++;
        }
        
        if(ntscnt1 === cnt1){
            answer = n;
            break;
        }
        
        
    }
    return answer;
}