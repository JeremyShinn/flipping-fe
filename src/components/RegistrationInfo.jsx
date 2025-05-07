import { useState } from 'react';

function RegistrationInfo(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return(
        <form>
            <fieldset>
                <legend></legend>
                <label>
                    Name: 
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label> 
                     Email: 
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
            </fieldset>
            <button onClick={e => {
                alert("Thank you for registering, "+name+". We will send promotions to "+email+".");
                e.preventDefault();
            }}>Submit</button>
            
        </form>
    );
}

export default RegistrationInfo;