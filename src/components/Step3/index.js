import { StyledStep3 } from "./styles";
import data from '../../../data.json';

export default function Step3({store}) {

   function toggleAddOn(property) {
      const state = {...store.addOns};
      state[property] = !state[property]
      store.setAddOns(state);
   }

   return (
      <StyledStep3>
         <h1 className="title">Pick add-ons</h1>
         <h2 className="subtitle">Add-ons help enhance your gaming experience.</h2>
         <form>

            {Object.keys(data.addOns).map((item) => {
               const addOnData = data.addOns[item];
               return (

                  <label key={addOnData.name} className={store.addOns[item] ? "add-on add-on--active" : "add-on"}>
                     <input 
                        type="checkbox" 
                        name="add-on" 
                        onChange={() => toggleAddOn(item)}
                        checked={store.addOns[item]}
                     />
                     <button onClick={() => toggleAddOn(item)} type="button">
                        <i />
                     </button>
                     <h3>{addOnData.name}</h3>
                     <h4>{addOnData.description}</h4>
                     <span>{store.monthly ? `+$${addOnData.monthly}/mo` : `+$${addOnData.yearly}/yr`}</span>
                  </label>

               )
            })}

         </form>
      </StyledStep3>
   )
}