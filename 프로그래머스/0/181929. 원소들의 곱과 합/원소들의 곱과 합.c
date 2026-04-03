#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// num_list_len은 배열 num_list의 길이입니다.
int solution(int num_list[], size_t num_list_len) {
    int answer = 0;
    int multiply = 1;
    int add_square = 0;

    for(int i = 0; i < num_list_len; i++){
        multiply *= num_list[i];
        add_square += num_list[i];
    }
    
    add_square = add_square * add_square;
    
    if(multiply < add_square) answer = 1;
    
    
    return answer;
}