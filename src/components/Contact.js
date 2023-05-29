import React from 'react'

const Contact = () => {
    return (
        <div className='contact-page' >
            <main>

                <h1>Contact Us</h1>

                <form>
                  <div>
                    <leble>Name</leble>
                    <input type="text" required placeholder='Abc' />
                  </div>

                  <div>
                    <leble>Email</leble>
                    <input type="email" required placeholder='Abc@gmail.com' />
                  </div>
                  
                  <div>
                    <leble>Message</leble>
                    <input type="text" required placeholder='Tell us your query..' />
                  </div>
                    
                    <button type='submit'>Send</button>
                   
                </form>
            </main>
        </div>
    )
}

export default Contact
