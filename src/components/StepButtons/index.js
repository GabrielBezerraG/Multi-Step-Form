import { StyledStepButtons } from "./styles";
import data from '../../../data.json';

export default function StepButtons({store}) {
   return (
      <StyledStepButtons>
         {data.steps.map(step => {
            return (
               <div key={step.index} className="step">
                  <i className={store.currentStep === step.index 
                  ? "step__icon step__icon--active" 
                  : "step__icon"
                  }>
                     <span>{step.index}</span>
                  </i>
                  <div className="step__text">
                     <h3>Step {step.index}</h3>
                     <h4>{step.text}</h4>
                  </div>
               </div>
            )
         })}
      </StyledStepButtons>
   )
}