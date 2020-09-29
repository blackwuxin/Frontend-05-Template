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


