#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// arr_len은 배열 arr의 길이입니다.
// query_len은 배열 query의 길이입니다.
int* solution(int arr[], size_t arr_len, int query[], size_t query_len) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    int* answer = (int*)malloc(arr_len * sizeof(int));
    int answer_len = arr_len;

    for(int i = 0; i < arr_len; i++){
        answer[i] = arr[i];
    }
    
    for(int i = 0; i < query_len; i++){
        for(int j = 0; j < arr_len; j++){
            if(query[i] == j){
                if(i % 2 == 0){
                    int cnt = 0;
                    for(int k = 0; k <= j; k++){
                        answer[k] = answer[k];
                        cnt++;
                    }
                    answer_len = cnt;
                } else {
                    int cnt = 0;
                    for(int k = j; k < answer_len; k++){
                        answer[cnt++] = answer[k];
                    }
                    answer_len = cnt;
                }
            }
        }
    }
    return answer;
}