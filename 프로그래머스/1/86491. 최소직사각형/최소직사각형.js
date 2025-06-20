function solution(sizes) {
    var answer = 0;
    let biggestW = 0;
    let biggestH = 0;
    sizes.forEach((item, idx) => {
        let w
        let h
        if(item[0] <= item[1]){
            w = item[1];
            h = item[0];
            
        }else {
            w = item[0];
            h = item[1];
        }
        
        if(biggestW < w){
            biggestW = w;
        }
        if(biggestH < h){
            biggestH = h;
        }
    })
    
    answer = biggestW * biggestH;
    return answer;
}