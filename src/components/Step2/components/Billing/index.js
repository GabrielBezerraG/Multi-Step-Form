import { StyledBilling } from "./styles";

export default function Billing({store}) {
   return (
      <StyledBilling>
         <label className={store.monthly ? "billing__option billing__option--active" : "billing__option"}>
            Monthly
            <input onChange={() => store.setMonthly(true)} checked={store.monthly} type="radio" name="billing" />
         </label>
         <button
            onClick={() => store.setMonthly(!store.monthly)}
            type="button"
            className={store.monthly ? "billing__button" : "billing__button billing__button--yearly"}
         >
            <i />
         </button>
         <label className={store.monthly ? "billing__option" : "billing__option billing__option--active"}>
            Yearly
            <input onChange={() => store.setMonthly(false)} checked={!store.monthly} type="radio" name="billing" />
         </label>
      </StyledBilling>
   )
}