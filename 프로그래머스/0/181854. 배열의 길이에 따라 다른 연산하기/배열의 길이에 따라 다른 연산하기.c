#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// arr_len은 배열 arr의 길이입니다.
int* solution(int arr[], size_t arr_len, int n) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    int* answer = (int*)malloc(arr_len * sizeof(int));
    
    if(arr_len % 2 == 0){
         for(int i = 0; i < arr_len; i = i+2){
            answer[i] = arr[i];
            answer[i+1] = arr[i+1] + n;
        }
    } else {
        for(int i = 0; i < arr_len; i = i+2){
            answer[i] = arr[i] + n;
            answer[i+1] = arr[i+1];
        }
    } 
    
    return answer;
}