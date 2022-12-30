export default function validateInput(setter) {
   setter(previous => {
     const inputState = { ...previous };
     if (inputState.value === '') {
       inputState.error = true;
     }
     return inputState;
   })
 }