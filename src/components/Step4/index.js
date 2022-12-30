import { StyledStep4 } from "./styles";
import data from '../../../data.json';

export default function Step4({ store }) {

   const currentPlan = data.plans[store.plan];
   const addOns = [];

   for (const item in store.addOns) {
      if (store.addOns[item]) {
         addOns.push(item);
      }
   }

   const total = computeTotal();

   function computeTotal() {
      let billing;
      let suffix;
      let sum = 0;

      if (store.monthly) {
         billing = 'monthly';
         suffix = 'mo'
      } else {
         billing = 'yearly';
         suffix = 'yr'
      }

      sum += currentPlan[billing];

      if (addOns.length > 0) {
         sum += addOns.reduce((acc, addOn) => acc + data.addOns[addOn][billing], 0);
      }

      return `$${sum}/${suffix}`;
   }

   return (
      <StyledStep4>
         <h1 className="title">Finishing up</h1>
         <h2 className="subtitle">Double-check everything looks OK before confirming.</h2>
         <div className="table">
            <article className="plan">
               <h3>
                  {store.plan} ({store.monthly ? "monthly" : "yearly"})
               </h3>
               <button onClick={() => store.setCurrentStep(2)} type="button">Change</button>
               <span>{store.monthly ? `$${currentPlan.monthly}/mo` : `$${currentPlan.yearly}/yr`}</span>
            </article>
            <div className="horizontal-line" />
            {addOns.length > 0 ?
               <div className="add-ons">
                  {addOns.map(item => {
                     const addOnData = data.addOns[item];

                     return (
                        <article key={item} className="add-on">
                           <h4>{addOnData.name}</h4>
                           <span>{store.monthly ? `+$${addOnData.monthly}/mo` : `+$${addOnData.yearly}/yr`}</span>
                        </article>
                     )
                  })}
               </div>
               
               : <article className="empty">No add-ons selected</article>
            }

         </div>
         <div className="total">
            <h4>Total (per {store.monthly ? "month" : "year"})</h4>
            <h5>{total}</h5>
         </div>
      </StyledStep4>
   )
}