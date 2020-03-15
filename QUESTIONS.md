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

When foo is called with 0, the conditions are met for a recursion to occur on line foo(d+1). This gets placed on top of the call stack and the JavaScript engine remembers the function still hasn't been fully complete.

Each time foo(d+1) is called and placed on top of the call stack until foo receives (10). So the recursion loop of foo will look like the following:

foo(1)
foo(2)
foo(3)
foo(4)
foo(5)
foo(6)
foo(7)
foo(8)
foo(9)
foo(10)

Note: foo(10) is placed on top of the call stack and foo(1) on the bottom.

Once foo receives 10, the function reaches console.log(d), logs 10 and that particular function is complete. The JavaScript engine then checks the top of the call stack and realises "oh, I have foo(9) that needs completing!" 

So foo 9 then reaces console.log(d), logs 9 and that function is complete. This pattern continues until foo(1).

But remember we initially passed foo(0) at the very beginning, so it too will then be executed and reaches console.log(d), logs 0 and that function is complete and the call stack is finally empty! Phew!!

.

Qs3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
    function foo(d) {
      d = d || 5;
      console.log(d);
    }
```

Answer: Any falsy value will result in d resorting to the default value of 5 which may not be the intention of the use.

This could still be useful though in the context of interest, like in the following example:

```js
    function increaseInterestRate(d) {
      d = d || 5;
      statement.addInterest(d)
    }
```
In this context, the interest rate will still increase and the person who holds this account will get into a bad mood.

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

Answer: The output will be

```
3
```
The concept shown here is a closure. a variable called bar calls on the function foo which returns the inner anonymous function. 

In essense bar will be bar = function(b) {return a + b}

bar can then be called with whatever value we want. But here is the special thing about closures, the inner function always has access to the variables and parameters of its outer function, even after the function has returned. So in this specific example, bar will still have access to a!

That is why bar = function(b) {return a + b} will still work, despite a not looking like it has been defined.

The scope looks like the following:

Global scope [
  foo scope [
    a = 1
    bar scope [
      b = 2
    ]
  ]
]

bar will search for a within its own scope and realise that "hey, a is not here". It will then search outside its scope and see that it is in foo and be "there you are!!". bar already has access to b within its own scope so it will not need to look any further. bar will then return the result of a + b

Qs5: Explain how the following function would be used

```js
    function double(a, done) {
      setTimeout(function() {
        done(a * 2);
      }, 100);
    }
```

the double function accepts two arguments. the first will be a number and the second will be a callback which executes after 100ms.