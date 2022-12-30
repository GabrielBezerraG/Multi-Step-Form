import styled from "styled-components";

export const StyledMain = styled.main`
   background-color: var(--white);
   margin: 0 1rem;
   border-radius: 10px;
   padding: 2.2rem 1.5rem;
   box-shadow: 0 20px 25px -10px #9699ab44;

   .desktop-container {
      padding: 0;
   }

   @media screen and (min-width: 1080px) {
      display: flex;
      height: 568px;
      padding: 1rem 0.95rem;
      border-radius: 15px;

      .desktop-container {
         padding: 2.6rem 5.25rem 0 6.25rem;
         width: 635px;
         box-sizing: border-box;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
      }
   }

   
`