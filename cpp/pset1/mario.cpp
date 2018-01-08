#include <iostream>
using namespace std;

int main()
{
    int height = 0;
 
    
        
    //get user input
    do
    {
        cout << "Enter a non-negative integer < 24: ";
        cin >> height;
    
    
        if (height == 0)
        {
            return 0;
        }
    }
    while (height < 0 || height > 23);
    
    cout << height;
}
