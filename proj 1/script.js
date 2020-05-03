const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');



function inputHandler(inputArray)
{
    inputArray.forEach(input => {
        if(input.value.trim()==='')
        {
            showError(input,`${inputCapital(input)} is required`)
            
        }
        else
        {
            showSuccses(input);
        }
    });
}

function inputCapital(input)
{
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);

}

function inputLengthHandler(input,min,max)
{
    if(input.value.length<min)
    {
        showError(input,`${inputCapital(input)} length  need be at least ${min}`)
    }
    else if(input.value.length>max)
    {
        showError(input,`${inputCapital(input)} length  need be at maximum ${max}`)
    }
    else
    {
        showSuccses(input);
    }
}

function checkPasswordsMatch(input1, input2) {
    console.log(input1.value,input2.value)
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
  }
  

showError=(input,msg)=>
{
    const parent=input.parentElement;
    parent.className='form-control error';
    const small=parent.querySelector('small');
    small.innerHTML=msg;

}

showSuccses=(input)=>
{
    const parent=input.parentElement;
    parent.className='form-control success ';
    const small=parent.querySelector('small');


}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccses(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    console.log('mmmm')
    inputHandler([username,email,password,password2]);
    inputLengthHandler(username,3,15);
    inputLengthHandler(password,3,15);
    inputLengthHandler(password2,3,15);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
   /* if(username.value==='')
    {
        showError(username,'error')
    }
    else
    {
        showSuccses(username);
    }
    if(email.value==='')
    {
        showError(email,'Email is required')
    }
    else if(!validateEmail(email.value))
    {
        showError(email,'Not a valid email')
    }
    else
    {
        showSuccses(email);
    }
    if(password.value==='')
    {
        showError(password,'Password is required')
    }
    else
    {
        showSuccses(password);
    }

    if(password2.value==='')
    {
        showError(password2,'password2 is required')
    }
    else
    {
        showSuccses(password2);
    }*/
    
})