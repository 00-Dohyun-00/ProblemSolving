#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    // n이 홀수라면
    if(n % 2 != 0){
        int cnt = 0;
        
        while(cnt != n){
            if(cnt % 2 != 0){
                answer += cnt;
            }
            cnt++;
        }
        
        answer += n;
    }
    // 짝수라면
    else {
        int cnt = 0;
        
        while(cnt != n){
            if(cnt % 2 == 0){
                answer += cnt * cnt;
            }
           
            cnt++;
        }
        
        answer += n * n;
        
    }
    return answer;
}