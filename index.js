let a='',b='';
const btn0=document.querySelector("#bin0");
const btn1=document.querySelector("#bin1");
const clr=document.querySelector("#clr");
const equal=document.querySelector("#equal");
const add=document.querySelector("#add");
const sub=document.querySelector("#sub");
const mult=document.querySelector("#mult");
const div=document.querySelector("#div");
const res=document.querySelector("#res");
let show='';
let op='';
let flag=0;
let input=(k)=>{
    if (flag == 0) a += k;
    else b += k;
    show += k;
    res.innerHTML = show;
}
let clear=()=>{
    a = '';
    b = '';
    show = '';
    res.innerHTML = '';
    flag = 0;
    op = '';
}
let calc=()=>{
    if (a != '' && b != '') {
        result(op);
        b = '';
        op = '';
        flag = 0;
    }
}
let op1=()=>{
    if (a != '' && op == '') {
        show += "+";
        op += "+";
    }
    flag = 1;
    res.innerHTML = show;
}
let op2=()=>{
    if (a != '' && op == '') {
        show += "-";
        op += "-";
    }
    flag = 1;
    res.innerHTML = show;
}
let op3=()=>{
    if (a != '' && op == '') {
        show += "*";
        op += "*";
    }
    flag = 1;
    res.innerHTML = show;
}
let op4=()=>{
    if (a != '' && op == '') {
        op += "/";
    } show += "/";

    flag = 1;
    res.innerHTML = show;
}
let back=()=>{
    if(show[show.length-1]!='1' && show[show.length-1]!='0') op='';
    else if(show.includes('+') || show.includes('-') || show.includes('*') || show.includes('/')) b=b.slice(0,-1);
    else a=a.slice(0,-1);
    show=show.slice(0,-1);
    res.innerHTML=show;
}
btn0.addEventListener('click',function(){
    input("0");
});
btn1.addEventListener('click',function(){
    input("1");
});
clr.addEventListener('click',clear);
equal.addEventListener('click',calc);
add.addEventListener('click',op1);
sub.addEventListener('click',op2);
mult.addEventListener('click',op3);
div.addEventListener('click',op4);
document.addEventListener('keydown',(event)=>{
    switch(event.keyCode){
        case 107:
            op1();
            break;
        case 109:
            op2();
            break;
        case 106:
            op3();
            break;
        case 111:
            op4();
            break;
        case 187:
            calc();
            break;
        case 13:
            calc();
            break;
        case 48:
            input("0");
            break;
        case 49:
            input("1");
            break;
        case 67:
            clear();
            break;
        case 8:
            back();
            break;
    }
})
function result(){
    var ans;
    switch(op){
        case '+':
            ans=sToNum(a)+sToNum(b);
            show=numToS(ans);
            res.innerHTML=show;
            a=show;
            break;
        case '-':
            ans=sToNum(a)-sToNum(b);
            show=numToS(ans);
            res.innerHTML=show;
            a=show;
            break;
        case '*':
            ans=sToNum(a)*sToNum(b);
            show=numToS(ans);
            res.innerHTML=show;
            a=show;
            break;
        case '/':
            ans=Math.floor(sToNum(a)/sToNum(b));
            show=numToS(ans);
            res.innerHTML=show;
            a=show;
            break;
    }
}
function sToNum(s){
    let temp=0;
    let c=1;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]=='1') temp+=c;
        c*=2;
    }
    return temp;
}
function numToS(ans){
    let temp='';
    temp=Number(ans).toString(2);
    return temp;
}