import { StyledBottom } from "./styles";

export default function Bottom({store}) {
   return (
      <StyledBottom>

         {
            store.currentStep > 1 && store.currentStep < 5
            ? <button onClick={store.previousStep} className="previous">Go Back</button>
            : <span />
         }
         
         {
            store.currentStep < 4 
            ? <button onClick={store.nextStep} className="next">Next Step</button>
            : store.currentStep === 4 
            && <button onClick={store.nextStep} className="confirm">Confirm</button>
         }
         
      </StyledBottom>
   )
}