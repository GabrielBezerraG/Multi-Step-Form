import styled from "styled-components";

export const StyledStep3 = styled.div`

   form {
      display: flex;
      flex-direction: column;
      row-gap: 0.75rem;
   }

   .add-on {
      display: grid;
      grid-template: auto auto / auto 1fr auto;
      border: 1px solid var(--light-grey);
      border-radius: 10px;
      padding: 0.85rem;
      row-gap: 0.3rem;
      cursor: pointer;
      transition: all 200ms;

      input {
         position: absolute;
         width: 0;
         top: -10rem;
      }

      button {
         grid-area: 1/1/3/2;
         align-self: center;
         width: 22px;
         height: 22px;
         background-color: inherit;
         box-sizing: border-box;
         border: 1px solid var(--light-grey);
         border-radius: 5px;
         position: relative;
         margin-right: 1rem;
         cursor: inherit;
      }

      h3 {
         grid-area: 1/2/2/3;
         color: var(--navy);
         font-weight: 500;
         font-size: 0.92rem;
         letter-spacing: -0.35px;
      }

      h4 {
         grid-area: 2/2/3/3;
         color: var(--grey);
         font-size: 0.8rem;
         letter-spacing: -0.35px;
      }

      span {
         grid-area: 1/3/3/4;
         align-self: center;
         color: var(--blue);
         font-size: 0.78rem;
         font-weight: 500;
         letter-spacing: -0.35px;
      }
   }

   .add-on:hover {
      border-color: var(--blue-border);
   }

   .add-on--active {
      border-color: var(--blue-border);
      background-color: var(--alabaster);

      button {
         background-color: var(--blue);

         i {
            display: inline-block;
            background: url(/images/icon-checkmark.svg) center / contain no-repeat;
            width: 12px;
            height: 9px;
            position: absolute;
            top: 6px;
            left: 4px;
         }
      }
   }

   @media screen and (min-width: 1080px) {
      form {
         row-gap: 1rem;
      }

      .add-on {
         padding: 1.25rem 1.45rem;
         row-gap: 0.45rem;

         button {
            margin-right: 1.45rem;
         }

         h3 {
            font-size: 1.035rem;
         }

         h4 {
            font-size: 0.92rem;
         }

         span {
            font-size: 0.91rem;
         }
      }
   }

`