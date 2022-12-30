import StepButtons from "../StepButtons";
import { StyledDesktopSidebar } from "./styles";

export default function DesktopSidebar({store}) {
   return (
      <StyledDesktopSidebar>
         <StepButtons store={store} />
      </StyledDesktopSidebar>
   )
}