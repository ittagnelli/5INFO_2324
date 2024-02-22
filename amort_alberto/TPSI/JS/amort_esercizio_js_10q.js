
let remove= function(str1, str2){
    str1=str1.replace(str2, "");
    return str1; 
    
}

console.log(remove("The quick brown fox jumps over the lazy dog", "the"));
