import styled from "styled-components";

export const StyledBilling = styled.div`

   background-color: var(--alabaster);
   padding: 0.85rem;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;

   .billing__option {
      font-size: 0.915rem;
      font-weight: 500;
      color: var(--grey);
      cursor: pointer;

      input {
         position: absolute;
         width: 0;
         top: -10rem;
      }
   }

   .billing__option--active {
      color: var(--navy);
   }

   .billing__button {
      margin: 0 1.45rem;
      width: 38px;
      height: 20px;
      border: none;
      border-radius: 10px;
      background-color: var(--navy);
      padding: 4px;
      align-items: center;
      display: flex;
      transition: 200ms;
      cursor: pointer;

      i {
         display: inline-block;
         width: 12px;
         height: 12px;
         border-radius: 50%;
         background-color: var(--alabaster);
      }
   }

   .billing__button--yearly {
      justify-content: flex-end;
   }
`