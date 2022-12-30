import styled from "styled-components";

export const StyledDesktopSidebar = styled.div`

   display: none;

   @media screen and (min-width: 1080px) {
      display: block;
      width: 275px;
      background: url(/images/bg-sidebar-desktop.svg) 100% no-repeat;
   }

`