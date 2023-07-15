function countvowels(str){
var count=0
for(var i=0;i<str.lenght;i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
        count ++
    }
}
return count
}