import styled from 'styled-components';

export const StyledMobileSidebar = styled.div`
   box-sizing: border-box;
   width: 100%;
   height: 170px;
   background: url(/images/bg-sidebar-mobile.svg) center / cover no-repeat;
   margin-bottom: -4.5rem;

   @media screen and (min-width: 1080px) {
      display: none;
   }
`