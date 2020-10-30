function kmp(source,pattern){
    if(source == pattern){
        return 0;
    }
    //计算tabel
    let table = new Array(pattern.length).fill(0);
    {  
        let i = 1, j = 0;
        while(i < pattern.length){
            if(pattern[i] == pattern[j]){
                ++j , ++i;
                table[i] = j;
            }else{
                if(j > 0){
                    j = table[j];
                }else{
                    ++i;
                }
            }
        }

    }

    //查找

    {
        let i = 0, j = 0;
        while(i < source.length){
            if(pattern[j] === source[i]){
                ++i,++j;
            }else{
                if(j > 0){
                    j = table[j];
                }else{
                    ++i;
                }
            }
            if(j == pattern.length)
                return i-j;
        }
        return -1;
    }
}


//abc c 

console.log(kmp("abc","c"));
console.log(kmp("hello","ll"));
console.log(kmp("",""));
console.log(kmp("aaa","xxx"));


