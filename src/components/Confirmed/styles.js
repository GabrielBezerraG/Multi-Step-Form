import styled from "styled-components";

export const StyledConfirmed = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   padding: 2.75rem 0 1.75rem;

   i {
      display: inline-block;
      background: url(/images/icon-thank-you.svg) center / contain no-repeat;
      width: 56px;
      height: 56px;
      margin-bottom: 1.65rem;
   }

   @media screen and (min-width: 1080px) {
      
      height: 100%;
      padding-bottom: 3rem;

      i {
         width: 80px;
         height: 80px;
         margin-bottom: 2.1rem;
      }

      h1 {
         margin-bottom: 1.2rem;
      }
   }
`