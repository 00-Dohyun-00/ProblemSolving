#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// date1_len은 배열 date1의 길이입니다.
// date2_len은 배열 date2의 길이입니다.
int solution(int date1[], size_t date1_len, int date2[], size_t date2_len) {
    int answer = 0;
    
    if(date1[0] < date2[0]){
        answer = 1;
    } else if(date1[0] > date2[0]){
        answer = 0;
    } else {
        if(date1[1] < date2[1]){
            answer = 1;
        } else if(date1[1] > date2[1]){
            answer = 0;
        } else {
            if(date1[2] < date2[2]){
                answer = 1;
            } else {
                answer = 0;
            }
        }
    }

    
    return answer;
}