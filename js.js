function check(c)
{
    if (c == '+' || c == '-' || c == 'x' || c == '÷')
    {
        i = 0;
        opc = 0;
        text = document.getElementById("txt");
        while (i < text.value.length)
        {
            if((text.value.charAt(i) == '-'
            || text.value.charAt(i) == '+'
            || text.value.charAt(i) == '÷'
            || text.value.charAt(i) == 'x'))
            {
                opc++;
            }
            i++;
        }
        if (opc == 0)
            return 1;
        if (opc == 1 && (text.value.charAt(0) == '-' || text.value.charAt(0) == '+'))
        {
            return 1;
        }
        return 0;
    }
    return 1;
}

function cleartext(){
    text = document.getElementById("txt");
    text.value = "";
}

function typee(c) {
    var text = document.getElementById("txt");
    if (check(c) == 0)
        return 0;
    if ((c == 'x' || c == '÷') && (text.value.length == 0 
        || (text.value.length == 1 && 
        (text.value.charAt(0) == '-' || text.value.charAt(0) == '+'))))
    {
        return 0;
    }
    if (c == '+' || c == '-' || c == '÷' || c == 'x')
    {
        if (text.value.charAt(text.value.length - 1) == '-'
        || text.value.charAt(text.value.length - 1) == '+'
        || text.value.charAt(text.value.length - 1) == '÷'
        || text.value.charAt(text.value.length - 1) == 'x')
            text.value = text.value.slice(0, -1);
    }
    text.value += c;
}

function del(){
    var text = document.getElementById("txt");
    text.value = text.value.slice(0, -1);
}

function calc(text)
{
    var text = document.getElementById("txt");
    let num1 = "";
    let num2 = "";
    let i;
    i = 0;
    sign = 1;
    if(text.value.charAt(0) == '-')
    {
        sign = -1;
        i++;
    }
    if (text.value.charAt(0) == '+')
        i++;

    while(!(text.value.charAt(i) == '-'
    || text.value.charAt(i) == '+'
    || text.value.charAt(i) == '÷'
    || text.value.charAt(i) == 'x') && i < text.value.length)
    {
        num1 += text.value.charAt(i);
        i++;
    }
    op = text.value.charAt(i);
    i++;
    while(i < text.value.length)
    {
        num2 += text.value.charAt(i);
        i++;
    }
    num1 = parseInt(num1)  * sign;
    num2 = parseInt(num2);
    if (op == '+')
        text.value = num1 + num2;
    if (op == '-')
        text.value = num1 - num2;
    if (op == 'x')
        text.value = num1 * num2;
    if (op == '÷')
    {
        if (num2 == 0)
        {
            text.value = "error";
            return ;
        }
        text.value = num1 / num2;
    }
}
