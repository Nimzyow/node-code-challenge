# Questions

Qs1: Explain the output of the following code and why

```js
    setTimeout(function() {
      console.log("1");
    }, 100);
    console.log("2");
```
Answer: The output will be
```
2
1
```
2 is logged first followed by 1. The setTimeout function allows the delay of console logging of number 1 by 100ms. The console logging of 1 is stored in the event loop and the file continues to be read. As soon as the console logging of 2 is read, the program executes this immendiately. After the event is executed, the JS engine looks back at the event queue to check if there anyting else to be executed and will then fire them off also. 

Qs2: Explain the output of the following code and why

```js
    function foo(d) {
      if(d < 10) {
        foo(d+1);
      }
      console.log(d);
    }
    foo(0);
```

Answer: the output will be
```
10
9
8
7
6
5
4
3
2
1
0
```

When foo is called with 0, the JavaScript engine creates a Function execution context for the function and pushes it to the top of the call stack. 
Since the initial value of d meets the if condition, recursion occurs with the line foo(d+1), where d will = 1. The Javascript engine yet again creates a new function execution context and pushes this to the top of the call stack. This loop of creating a functional execution context, pushing to the top of the call stack and calling on the recursion happens until d = 10. Since the if condition will no longer be met for d < 10, this particular call stack is finished with the line console.log(d). The Javascript engine then checks the call stack and resumes the execution where it left off from the top of the call stack to the bottom. The script will finally stop when the call stack is empty.

Qs3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
    function foo(d) {
      d = d || 5;
      console.log(d);
    }
```

Qs4: Explain the output of the following code and why

```js
    function foo(a) {
      return function(b) {
        return a + b;
      }
    }
    var bar = foo(1);
    console.log(bar(2))
```

Qs5: Explain how the following function would be used

```js
    function double(a, done) {
      setTimeout(function() {
        done(a * 2);
      }, 100);
    }
```
