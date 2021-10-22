let form = document.getElementById('input-form');
let cName = document.getElementById('fName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

let phoneFilter = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm




    form.addEventListener('submit', (e) => {
        
       

        checkInputs();
    });
    
    const checkInputs = () => {
        const cNameValue = document.getElementById('fName').value;
        const emailValue = document.getElementById('email').value;
        const phoneValue= document.getElementById('phone').value;
    
        if(cNameValue === '' || cNameValue == null ){
           alert('Name must be filled out.')
        }  
        else if(!emailFilter.test(email.value)) {
            alert('Please provide a valid email');
            email.focus;
            return false; 
        }
        else if(!phoneFilter.test(phone.value)){
            alert('Please provide a valid phone number.')
            phone.focus;
            return false;
        }
        else{
            alert('You order will be handed over to you within 30 minutes')
        }


        
    } 
    
