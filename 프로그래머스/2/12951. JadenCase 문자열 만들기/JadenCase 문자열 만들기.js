function solution(s) {
    var answer = '';
    let arr = s.split(' ');
    for(let i = 0; i < arr.length; i++){
        let arri = arr[i].split('');  
        arri.forEach((item, j) => {
            if(j == 0){
                arri[j] = item.toUpperCase();
            } else {
                arri[j] = item.toLowerCase();
            }
        })
        arr[i] = arri.join(''); 
    }
    answer = arr.join(' ');
    return answer;
}