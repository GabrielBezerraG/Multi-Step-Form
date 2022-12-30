import { StyledPlan } from "./styles";
import data from '../../../../../data.json';

export default function Plan({ store }) {
   return (
      <StyledPlan>
         {Object.keys(data.plans).map(plan => {
            
            const planData = data.plans[plan];
            
            return (
               <label key={plan} className={store.plan === plan ? "plan__option plan__option--active" : "plan__option"}>
                  <input
                     type="radio"
                     onChange={() => store.setPlan(plan)}
                     checked={store.plan === plan}
                     name="plan-option"
                  />
                  <i className={plan} />
                  <div>
                     <h3>{plan}</h3>
                     {store.monthly
                        ? <span>${planData.monthly}/mo</span>
                        : <span>${planData.yearly}/yr</span>
                     }
                     {!store.monthly && <h4>2 months free</h4>}
                  </div>
               </label>
            )
         })}
      </StyledPlan>
   )
}