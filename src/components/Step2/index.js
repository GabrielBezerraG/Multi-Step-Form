import Billing from "./components/Billing";
import Plan from "./components/Plan";

export default function Step2({ store }) {
   return (
      <div>
         <h1 className="title">Select your plan</h1>
         <h2 className="subtitle">You have the option of monthly or yearly billing.</h2>
         <form>
            <Plan store={store} />
            <Billing store={store} />
         </form>
      </div>
   )
}