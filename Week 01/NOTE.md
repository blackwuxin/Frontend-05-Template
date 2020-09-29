## 学习笔记

### let局部变量
添加`{}`包裹`let`变量，反复赋值
```
{
            let win = true;
            for(let j = 0; j< 3; j++){
                if(pattern[j][2-j] !== color){
                    win = false;
                }
            }
            if(win){
                return true;
            }
}
```

### AI策略
- 第一层策略: 我要赢
- 第二层策略：别输
- 第三层策略：我们走完了之后，不管对方怎么走，我们都不会输

这是一个递归的过程，对方最好的策略，对我们来说是最糟糕的策略。

### 一位数组复制
```
    function clone(pattern) {
        return Object.create(pattern);
    }
```