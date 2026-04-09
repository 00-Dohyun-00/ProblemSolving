#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// arr_len은 배열 arr의 길이입니다.
int* solution(int arr[], size_t arr_len) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    int* answer = (int*)malloc(arr_len * sizeof(int));
    int first_idx = -1;
    int last_idx = -1;
    
    for(int i = 0; i < arr_len; i++){
        if(arr[i] == 2 && first_idx == -1) first_idx = i;
        if(arr[i] == 2) last_idx = i; 
    }
    
    if(first_idx == -1){
        answer[0] = -1;
    } else { 
        int idx = 0;
        for(int i = first_idx; i <= last_idx; i++){
            answer[idx++] = arr[i];
        }
    }
    

    

    
    return answer;
}