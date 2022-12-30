import { StyledMain } from "./styles";
import Bottom from "../Bottom";
import Confirmed from "../Confirmed";
import DesktopSidebar from "../DesktopSidebar";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";

export default function Main({ store }) {

   return (
      <StyledMain>
         <DesktopSidebar store={store} />
         <div className="desktop-container">
            {
               store.currentStep === 1 
               ? <Step1 store={store} />
               : store.currentStep === 2 
               ? <Step2 store={store} />
               : store.currentStep === 3 
               ? <Step3 store={store} />
               : store.currentStep === 4 
               ? <Step4 store={store} />
               : store.currentStep === 5 
               && <Confirmed />
            }
            <Bottom store={store} />
         </div>
      </StyledMain>
   )
}