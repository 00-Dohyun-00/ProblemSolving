function solution(fees, records) {
    var answer = [];
    let incar = [];
    let outcar = [];
    let pay = [];
    
    records.forEach(item => item.split(' ')[2] === 'IN' ? incar.push(item) : outcar.push(item))

    for (let i = 0; i < outcar.length; i++){
        let ocar = outcar[i].split(' ');
        for(let j=0; j<incar.length; j++){
            let icar = incar[j].split(' ');
            // console.log(ocar, icar)
            if(ocar[1] === icar[1]){
                // incar 제거
                incar.splice(j, 1);
                // 금액계산
                let intime = icar[0].split(':');
                let outtime = ocar[0].split(':');
                
                let time = (Number(outtime[0]) * 60 + Number(outtime[1])) - (Number(intime[0]) * 60 + Number(intime[1]));
                 
                pay.push([icar[1], time]);
                break;
            }
        }
    }
  

    while(incar.length > 0){
        let icar = incar.shift().split(' ');
        // 금액계산
        let intime = icar[0].split(':');
        let outtime = '23:59'.split(':');

        let time = (Number(outtime[0]) * 60 + Number(outtime[1])) - (Number(intime[0]) * 60 + Number(intime[1]));
        
        pay.push([icar[1], time]);
    }
    
    let hash = new Map();
    pay.forEach(item => {
        let prevTime = hash.get(item[0]) ?? 0
        hash.set(item[0], prevTime + item[1])
    });
    
    let sorted = Array.from(hash).sort((a,b) => Number(a[0])-Number(b[0]));
    answer = sorted.map(item => {
         let money = item[1] > fees[0] ?  fees[1] + Math.ceil((item[1]-fees[0]) / fees[2]) * fees[3] : fees[1];
        return money;
    })
        

    return answer;
}