import styled from "styled-components";

export const StyledStepButtons = styled.div`
   display: flex;
   justify-content: center;
   column-gap: 1rem;
   padding: 2rem;

   .step__icon {
      border: 1px solid var(--alabaster);
      display: inline-block;
      text-align: center;
      width: 31px;
      height: 31px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--alabaster);
      font-weight: 500;
      font-size: 0.95rem;
   }

   .step__icon--active {
      background-color: var(--light-blue);
      border-color: var(--light-blue);
      color: var(--navy);
      font-weight: 700;
   }

   .step__text {
      display: none;
   }

   @media screen and (min-width: 1080px) {
      padding: 2.5rem 2.05rem;
      flex-direction: column;
      justify-content: flex-start;
      column-gap: 0;
      row-gap: 2rem;

      .step {
         display: flex;
         column-gap: 1rem;
      }

      .step__text {
         display: block;
         text-transform: uppercase;
         
         h3 {
            font-size: 0.8rem;
            font-weight: 300;
            color: var(--light-grey);
            margin-bottom: 0.25rem;
         }
         
         h4 {
            color: var(--white);
            font-weight: 500;
            font-size: 0.94rem;
            letter-spacing: 0.75px;

         }
      }
   }
`