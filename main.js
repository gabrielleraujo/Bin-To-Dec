let pilha = [];

function evento()
{   
    let decimal = 9; 
    const numberString = document.getElementById('b-input').value;

    pilha = stackUp(numberString);

    decimal = unstack(pilha);

    document.getElementById('d-input').value = decimal;   

    return true;
}

//----------------------------------------------------------------------------------------

function stackUp(numberString)
{   
    let countStackUp = 0;
    let number = 0;

    while(countStackUp < 20)    // 20 is the limit of digits suported to converter.
    {
        number = parseInt(numberString.substring(countStackUp,countStackUp+1));
        if(number == 0 || number == 1)
        {
            pilha.push(number);
        }
        else
        {
            countStackUp = 20;
        }
        countStackUp++;
    }
    return pilha;    
}

//----------------------------------------------------------------------------------------

function unstack(pilha)
{
    let result = 0;
    let countUnstack = 0; // potency
    let digit = pilha.pop();

    while (digit != null) // readyng the stack.
    {
        if (digit === 1)
        {
            result += Math.pow(2, countUnstack);
        }
        countUnstack++;
        digit = pilha.pop();
    }
    return result;  // result in a decimal number.
}

//----------------------------------------------------------------------------------------
