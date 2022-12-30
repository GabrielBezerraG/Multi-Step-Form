import StepButtons from "../StepButtons";
import { StyledDesktopSidebar } from "./styles";

export default function DesktopSidebar({store}) {
   return (
      <StyledDesktopSidebar src="/images/bg-sidebar-desktop.svg">
         <StepButtons store={store} />
      </StyledDesktopSidebar>
   )
}