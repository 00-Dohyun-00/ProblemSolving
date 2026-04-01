#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int getNum(int n){
    int mul = 10;
    
    while(n >= 10){
        n /= 10;
        mul *= 10;
    }
    
    return mul;
}

int solution(int a, int b) {
    int answer = 0;
    int ab = 0;
    int ba = 0;
    
    
    ab = a * getNum(b) + b;
    ba = b * getNum(a) + a;
    
    if(ab >= ba) {
        answer = ab;
    } else {
        answer = ba;
    }
    
    return answer;
}