import { StyledStep1 } from "./styles";
import React from "react";

export default function Step1({ store }) {

   function handleChange(event) {

      const setter = event.target.dataset.setter;
      const inputState = {
         value: event.target.value,
         error: false,
      }

      if (inputState.value === '') {
         inputState.error = true
      }

      store[setter](inputState);

   }
   return (
      <StyledStep1>
         <h1 className="title">Personal info</h1>
         <h2 className="subtitle">Please provide your name, email address, and phone number.</h2>
         <form>
            <label>
               Name
               {store.nameInput.error && <span className="required">This field is required</span>}
               <input
                  className={store.nameInput.error ? "input input--required" : "input"}
                  type="text"
                  data-setter="setNameInput"
                  placeholder="e.g. Stephen King"
                  onChange={(e) => handleChange(e)}
                  value={store.nameInput.value}
               />
            </label>
            <label>
               Email Address
               {store.emailInput.error && <span className="required">This field is required</span>}
               <input
                  className={store.emailInput.error ? "input input--required" : "input"}
                  type="text"
                  data-setter="setEmailInput"
                  placeholder="e.g. stephenking@lorem.com"
                  onChange={(e) => handleChange(e)}
                  value={store.emailInput.value}
               />
            </label>
            <label>
               Phone Number
               {store.phoneInput.error && <span className="required">This field is required</span>}
               <input
                  className={store.phoneInput.error ? "input input--required" : "input"}
                  type="text"
                  data-setter="setPhoneInput"
                  placeholder="e.g. +1 234 567 890"
                  onChange={(e) => handleChange(e)}
                  value={store.phoneInput.value}
               />
            </label>
         </form>
      </StyledStep1>
   )
}