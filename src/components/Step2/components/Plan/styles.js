import styled from "styled-components";

export const StyledPlan = styled.div`

   display: flex;
   flex-direction: column;
   row-gap: 0.75rem;
   margin-bottom: 1.5rem;   

   .plan__option {
      display: flex;
      border: 1px solid var(--light-grey);
      cursor: pointer;
      padding: 1rem 0.5rem;
      border-radius: 10px;
      transition: border 200ms;


      input {
         position: absolute;
         top: -100%;
         width: 0;
         height: 0;
      }

      i {
         background: center / contain no-repeat;
         display: inline-block;
         width: 40px;
         height: 40px;
         margin-right: 1rem;
      }

      .arcade {
         background-image: url(/images/icon-arcade.svg);
      }

      .advanced {
         background-image: url(/images/icon-advanced.svg);
      }

      .pro {
         background-image: url(/images/icon-pro.svg);
      }

      h3 {
         color: var(--navy);
         font-weight: 500;
         font-size: 1.05rem;
         margin-bottom: 0.3rem;
         letter-spacing: -0.35px;
         text-transform: capitalize;
      }

      span {
         font-size: 0.9rem;
         color: var(--grey);
      }

      h4 {
         margin-top: 0.5rem;
         margin-bottom: 0.25rem;
         letter-spacing: -0.5px;
         font-size: 0.8rem;
         font-weight: 500;
         color: var(--navy);
      }
   }

   .plan__option:hover {
      border-color: var(--blue-border);
   }

   .plan__option--active {
      border-color: var(--blue-border);
      background-color: var(--alabaster);
   }


   @media screen and (min-width: 1080px) {
      flex-direction: row;
      row-gap: 0;
      column-gap: 1.15rem;
      width: 100%;
      margin-bottom: 2rem;

      .plan__option {
         flex-direction: column;
         flex-grow: 2;
         padding: 1.2rem 0.95rem 0.9rem;
         flex-basis: 0;

         i {
            margin-bottom: 2.8rem;
         }
      }
   }
`