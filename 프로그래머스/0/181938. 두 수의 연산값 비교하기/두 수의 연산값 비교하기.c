#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int a, int b) {
    int answer = 0;
    int ab = 0;
    int two_a_b = 0;
    
    int n = 10;
    int check_b = b;
    while(check_b >= 10){
        check_b /= 10;
        n *= 10;
    }
    
    ab = a * n + b;
    two_a_b = 2 * a * b;
    
    
    if(ab >= two_a_b){
        answer = ab;
    } else {
        answer = two_a_b;
    }
    
    
    return answer;
}