function solution(n)
{
    var ans = 0;
    let common = 1; // 등비수(1배터리로 갈 수 있는 최대 거리)
    
    // 남은 거리가 0이 될 때 까지 반복
    while (n - common >= 0){
        // 1배터리로 갈 수 있는 최대 거리
        while(common < n){
            let newCommon = common * 2;
            if(newCommon > n) break;
            common = newCommon;

        }
        // 배터리 사용
        ans++;
        // 초기화
        n = n - common;
        common = 1
    }

    return ans;
}