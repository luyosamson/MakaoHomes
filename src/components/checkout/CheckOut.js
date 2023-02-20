import React, { useState } from "react";
import './CheckOut.css'


function Checkout() {
    const [selectedOption, setSelectedOption] = useState("option1");

    function handleOptionChange(e) {
        setSelectedOption(e.target.value);
    }

    return (
        <div>
            <div className="formContainer">
            <form className="radioForm">
              <h2>Select payment method</h2>
              <div className="radioButton">
                
                    <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleOptionChange}
                    />
                    <h1> Mpesa </h1>
                    <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleOptionChange}
                    />
                   <h1>Bank</h1>
                
                </div>
            </form>
            {selectedOption === "option1" && (
                <form className="mpesaForm">
                    <h4>
                        Pay with Mpesa
                        {/* <input type="text" /> */}
                        
                    </h4>
                   <label>Enter Mpesa number</label> <input type='number' placeholder="Enter your mpesa number"
                    name='mpesa' />
                    <button type="submit">CHECKOUT</button>
                </form>
                
            )}
            {selectedOption === "option2" && (
                <form className="bankForm"   >
                    <h4>
                        Pay with Bank
                        {/* <input type="text" /> */}
                    </h4>
                    <label className="option">Choose your bank:</label><select>
                    <option>KCB</option>
                    <option>Equity</option>
                    <option>Co-operative</option>
                    <option>Standard Chatered</option>
                    <option>I&M Bank</option>
                    <option>Access Bank</option>
                    </select>
                    <label className="enter">Enter your bank account number:</label> <input type='number'
                     placeholder="Enter Your Account Number"/>

                     <button type="submit">Checkout</button>
                   
            
                </form>
            )}
            </div>
        </div>
    );
}
export default Checkout