
## JavaScript
- Atom
- Expression
- Statement
- Structure
- Program/Module

## Atom
- Grammer
    - Grammer Tree vs Priority
    - Left hand side & Right hand side
- Runtime
    - Type Convertion
    - Reference


## Expression

- Memeber
    - a.b
    - a[b]
    - foo\`string\`
    - super.b
    - super['b']
    - new.target
    - new Foo()
- New
    - new Foo

    Example:
    ```
    new a()()
    new new a()
    ```

- Call
    - foo()
    - super()
    - foo()['b']
    - foo().b
    - foo()\`abc\`

     Example:
    ```
    new a()['b']
    ```
 - Left hand side & Right hand side
    Example:
    ```
    a.b = c;
    a + b = c;  error
    ```
    只有 left hand side 才有资格放在等号右边

 - Update
    - a ++
    - a -- 
    - -- a
    - ++ a

    Example:
    ```
    ++ a ++
    ++ (a ++) 
    都是不合法的
    ```
- Unary
    - delete a.b
    - void foo() 
    - typeof a
    - \+ a
    - \- a
    - \~ a 
    - ! a
    - await a 

- Exponental
  - ** 乘方，右结合
  
  Example:
  ```
  3 ** 2 ** 3
  3 ** （2 ** 3）
  ···

- Mulitplicative
    - \* / %
- Additive
    - \+ -
- Shift
    - << >> >>>
- Relationship
    - <> <= => instanceof in
- Equality
    - ==
    - !=
    - ===
    - !==
- Bitwise
    - & ^ |

- Logical
    - &&
    - ||
    - 短路原则

- Conditional
    - ? :
    - 三目运算符
## Reference
- Object
- Key
- delete
- assign


## Type Convertion
- a + b
- "false" == false
- a[0] = 1

## Unboxing
- toPremitive
- toString vs ValueOf
- Symbol.toPrimitive

```
var o = {
    toString(){ return "2" },
    valueOf() { return "1" },
    [Symbol.toPrimitive]() { return "3" } 
}

var x = {}
x[o] =  1
console.log("x" + o);
```

## Statement
- Grammer
    - 简单语句
    - 声明语句
    - 声明
- Runtime
    - Completion Record
        ```
        if(x === 1)
            return 10;
        ```
        - 我们需要一个数据结构来描述语句的执行结果：是否返回了？返回值是啥？等等......
        - [[type]]: normal,breack,continue,return,or throw
        - [[value]]: 基本类型
        - [[target]]: lable
    - Lexical Environent
