from time import time

f,c,a,b=5**(1/2),0,int(input('Enter upper limit : ')),int(input('Enter lower limit : ')) #input strings are not used in the orginal code

start=time()
for i in range(a,b+1):
    c+=int(((((1+f)/2)**i)-(((1-f)/2)**i))*(1/f)) #Binet's Formula
print(c,time()-start)

def fib(a):
    return a if a<=1 else 1 if a==2 else fib(a-1)+fib(a-2) 
c=0
start=time()
for i in range(a,b+1):
    c+=fib(i)
print(c,time()-start)