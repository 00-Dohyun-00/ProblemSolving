#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(int n) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    int size = 2;
    int* answer = (int*)malloc(size * sizeof(int));
    int index = 0; 
    
    answer[index++] = n;
    
    while(n > 1){
        
        if(n % 2 == 0){
            n = n/2;
        }else {
            n = 3*n+1;
        }
        
        if(index == size -1) {
            size *= 2;;
            answer = realloc(answer, size * sizeof(int));
        }
        answer[index++] = n;
    }
    
    return answer;
}