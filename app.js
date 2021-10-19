const validateForm = () => {
    let name = document.getElementById('fName').value;
    
    let phone = document.getElementById('phone').value;
    
    let email = document.getElementById('email').value;
    
    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    
        if(name === "" && name !== Number) {
            alert("Please fillup the name please"); 
            return false;
        }
        else if(isNaN(phone) || phone === '')
        {
                alert('This number is not valid.')
            }
        else if(!filter.test(email) && email === '')
         {
                alert('Please provide a valid email');
                email.focus;
                return false; 
        }
        else {
            alert(`You've filled the form successfully.`)
        }
}
