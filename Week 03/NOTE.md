## LL 算法构架AST 

四则运算
- TokenNumber:
    - 1 2 3 4 5 6 7 8 9 0 的组合

- Operator: + - * / 
- Whitespace: `<SP>`
- LineTerminator: `<LF> <CR>`

```
<Expression> ::=
    <AdditiveExpression><EOF>

 <AdditiveExpression> ::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression> ::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>
 ```
 ### LL语法分析

 ```
  <AdditiveExpression> ::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>
 ```

 ### BNF 巴克斯-诺尔范式
- `::=` 表示定义。
- `<>` 尖括号中的内容是必选内容。
- `[]` 方括号中的内容是可选项。
- `“”` 双引号中的内容是字符串。
- `|` 竖线两边的内容是可选内容。它相当于or。
- `*` 表示零个或者多个。
- `+` 表示一个或者多个。

### 
使用`Array.prototype.shift()` 和 `Array.prototype.unshift()` 进行数组的拼接。

