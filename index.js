let slider  = document.querySelector('[data-length-slider]');
let sliderValue = document.querySelector('.password-length-value');
let uppercaseInput = document.querySelector('#uppercase');
let lowercaseInput = document.querySelector('#lowercase');
let numbersInput = document.querySelector('#numbers');
let symbolsInput = document.querySelector('#symbols');
let genratePassBtn = document.querySelector('.genrateBtn');
let passwordOutput = document.querySelector('.password-output');
let copybtn = document.querySelector('.copybtn');
let copiSpan = document.querySelector('.copi-to-clipboard');
console.log(passwordOutput);
let symbols="!@#$%^&*()_+";
let numbers = "0123456789";
let lowercaseAlpha="";
let uppercaseAlpha="";
for(let i='a' ;i<='z';i++)
    {
        lowercaseAlpha+=i;
    }

    
for (let i = 97; i <= 122; i++) {
    lowercaseAlpha += String.fromCharCode(i);
}


    for (let i = 65; i <= 90; i++) {
        uppercaseAlpha += String.fromCharCode(i);
    } 


function getRandNum()
{
    let a = Math.random();
    a= a*100;
    
    return Math.floor(a);
}    

let password = "";

   for(let i = 0;i<slider.value;i++)
    {
        password+=uppercaseAlpha[getRandNum()%26];
    }





function genratePass(){
   password="";

   let len = sliderValue.textContent;



   if(uppercaseInput.checked)
    {
        password+=uppercaseAlpha[getRandNum()%26];
        len--;
    }

    if(lowercaseInput.checked)
        {
            password+=lowercaseAlpha[getRandNum()%26];
            len--;
        }

        if(numbersInput.checked)
            {
                password+=numbers[getRandNum()%numbers.length]
                len--;
            }

            if(symbolsInput.checked)
                {
                    password+=symbols[getRandNum()%symbols.length]
                    len--;
                }

                while(len>0)
                    {
                        len--;
                        let x = getRandNum()%4;

                        if(x ==0 )
                            {
                                password+=uppercaseAlpha[getRandNum()%26];
                            }
                            if(x==1)
                                {
                                    password+=lowercaseAlpha[getRandNum()%26];
                                }

                                if(x==2)
                                    {
                                        password+=numbers[getRandNum()%numbers.length];
                                    }
                                    if(x == 3)
                                        {
                                            password+=symbols[getRandNum()%symbols.length];
                                        }
                    }

     
      



        
        

}


uppercaseInput.addEventListener('click',genratePass);
lowercaseInput.addEventListener('click',genratePass);
numbersInput.addEventListener('click',genratePass);
symbolsInput.addEventListener('click',genratePass);






slider.value = 10;


slider.addEventListener('input', function() {
        genratePass();
        sliderValue.textContent = slider.value;
});

genratePassBtn.addEventListener('click',()=>{
    passwordOutput.value=password;
});

copybtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(passwordOutput.value);
    copiSpan.textContent = "copied to clipboard"


})
