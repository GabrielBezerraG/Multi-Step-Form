import styled from "styled-components";

export const StyledStep4 = styled.div`

   .table {
      display: flex;
      flex-direction: column;
      padding: 1.15rem 1rem;
      background-color: var(--alabaster);
      border-radius: 10px;
      margin-bottom: 1.5rem;
   }

   .plan {
      display: grid;
      grid-template: auto auto / 1fr auto;
      align-items: center;
      row-gap: 0.2rem;
      margin-bottom: 0.85rem;

      h3 {
         grid-area: 1/1/2/2;
         font-weight: 500;
         font-size: 0.92rem;
         letter-spacing: -0.35px;
         color: var(--navy);
         text-transform: capitalize;

      }

      button {
         grid-area: 2/1/3/2;
         justify-self: start;
         border: none;
         text-decoration: underline 2px;
         background-color: inherit;
         font-family: inherit;
         color: var(--grey);
         padding: 0;
         font-size: 0.9rem;
         letter-spacing: -0.35px;
         cursor: pointer;
         transition: color 200ms;
      }

      button:hover {
         color: var(--blue);
      }

      span {
         grid-area: 1/2/3/3;
         color: var(--navy);
         font-size: 0.92rem;
         font-weight: 700;
         letter-spacing: -0.35px;
      }
   }

   .horizontal-line {
      border-bottom: 1px solid var(--light-grey);
      margin-bottom: 1rem;
   }

   .add-ons {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      article {
         display: flex;
         justify-content: space-between;

         h4 {
            color: var(--grey);
            font-size: 0.91rem;
            letter-spacing: -0.35px;
         }

         span {
            color: var(--navy);
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: -0.35px;
         }
      }
   }

   .empty {
      color: var(--grey);
      font-size: 0.91rem;
      letter-spacing: -0.35px;
   }

   .total {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      align-items: baseline;

      h4 {
         color: var(--grey);
         font-size: 0.91rem;
         letter-spacing: -0.25px;
      }

      h5 {
         color: var(--blue);
         font-weight: 700;
      }
   }

   @media screen and (min-width: 1080px) {

      .table {
         padding: 1.35rem 1.5rem 1.5rem;
         margin-bottom: 1.65rem;
      }

      .plan {
         row-gap: 0.35rem;
         margin-bottom: 1.55rem;

         h3 {
            font-size: 1.035rem;
         }

         span {
            font-size: 1.05rem;
         }
      }

      .horizontal-line {
         margin-bottom: 1.25rem;
      }

      .add-ons {
         row-gap: 1.35rem;
      }

      .total {
         padding: 0 1.5rem;

         h5 {
            font-size: 1.28rem;
         }
      }

   }

`