import './script1'
import './script2'
import './script3'
import './script4'
import './script5'
import './script6'

let a = 5,
    b = 6,
    c;

alert('До изменения: a = ' + (a) + " b =" + (b));

c = a; //a=5 c=5
a = b; //a=6 b=6
b = c; //b=5 c=5

alert('C добавления новой переменной: a = ' + (a) + ' b = ' + (b));

b = b + a; //5+6=11
a = b - a; //11-6=5
b = b - a; //11-5=6

alert('Без добавления новой переменной: a = ' + (a) + ' b = ' + (b));

