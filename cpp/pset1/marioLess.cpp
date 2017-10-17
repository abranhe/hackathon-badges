#include <iostream>
using namespace std;

int main(){
    
    int height = 0;
    
    //get user imput (a number from 1 to 24)
    
    do
    {
        
    cout << "Height: \n";
    cin >> height;
    
    if (height == 0);
        return 0;

        cout << "You are good\n the number is" <<height;
    }
    while (height < 1 || height > 23);
    
    cout << "if you see somthing above you good\n";
}
