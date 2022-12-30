import StepButtons from "../StepButtons";
import { StyledMobileSidebar } from "./styles";

export default function MobileSidebar({store}) {
   return (
      <StyledMobileSidebar>
         <StepButtons store={store} />
      </StyledMobileSidebar>
   )
}