import styled from "styled-components";

export const StyledBottom = styled.div`
   position: absolute;
   display: flex;
   justify-content: space-between;
   align-items: baseline;
   width: 100%;
   left: 0;
   padding: 1rem;
   bottom: -4.5rem;
   box-sizing: border-box;

   button {
      border: none;
      font-family: inherit;
      font-size: 0.9rem;
      cursor: pointer;
      user-select: none;
   }
   
   .previous {
      background-color: inherit;
      color: var(--grey);
      font-weight: 500;
   }

   .next, .confirm {
      color: var(--alabaster);
      border-radius: 5px;
      padding: 0.75rem;
      box-sizing: border-box;
      width: 6rem;
      transition: background 200ms;
   }
   
   .next {
      background-color: var(--navy);
   }

   .next:hover {
      background-color: var(--navy-hover);
   }

   .confirm {
      background-color: var(--blue);
   }

   .confirm:hover {
      background-color: var(--blue-hover);
   }

   @media screen and (min-width: 1080px) {
      position: static;
      left: auto;
      bottom: auto;
      padding: 1rem 0;

      button {
         font-size: 1.03rem;
      }

      .previous {
         padding: 0;
      }

      .next, .confirm {
         padding: 0.95rem;
         width: 7.65rem;
         border-radius: 8px;
      }
   }
`