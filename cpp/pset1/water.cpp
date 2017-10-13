/*Created by @19cah*/

#include <iostream>
using namespace std;

int main()
{
    int minutes, bottles;
    
    do
    {
       cout << "minutes: \n";
        cin >> minutes;
    }
    while(minutes < 1);
    
    bottles = (minutes * 12);
    cout << "bottles: " << bottles;
}
