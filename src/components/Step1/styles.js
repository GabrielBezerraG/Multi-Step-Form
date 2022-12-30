import styled from "styled-components";

export const StyledStep1 = styled.div`
   
   form {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
   }

   label {
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--navy);
      row-gap: 0.25rem;
      letter-spacing: -0.35px;
      position: relative;
      
   }

   .input {
      outline: none;
      border: 1px solid var(--light-grey);
      color: var(--navy);
      border-radius: 5px;
      padding: 0.6rem 0.9rem;
      font-family: inherit;
      font-size: 0.95rem;
      font-weight: 500;
      letter-spacing: -0.35px;
   }

   .input:focus {
      border-color: var(--navy);
   }

   .input::placeholder {
      color: var(--grey)
   }

   .input--required {
      border-color: var(--red);
   }

   .required {
      position: absolute;
      right: 0;
      color: var(--red);
      font-weight: 700;
   }

   @media screen and (min-width: 1080px) {
      form {
         row-gap: 1.6rem;
      }

      label {
         font-size: 0.9rem;
         row-gap: 0.5rem;
      }

      .input {
         font-size: 1.04rem;
         padding: 0.86rem 0.95rem;
         border-radius: 8px;
      }

      .required {
         font-size: 0.92rem;
      }

   }
`