function conversion(){
    let kind=document.getElementById('coin').value;
    let amount=document.getElementById('shekels').value;
    let sum=amount;
    let coin1='euro';
    let coin2='dolar';
    let coin3='Pound Sterling';
    if(kind==coin1  && amount>0){
        sum/=4.2;
        alert(sum);
    }
    else if(kind==coin2  && amount>0){
        sum/=3.9;
        alert(sum);
    }
    else if(kind==coin3  && amount>0){
        sum/=5.0;
        alert(sum);
    }
    else if(kind!=coin1 && kind!=coin2 && kind!=coin3){
        alert('wrong type of coin')
    }
    else if(amount<0 || amount>='a' && amount<='z'){
        alert('not entered number input');
    }
}