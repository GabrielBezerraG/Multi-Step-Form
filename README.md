# Multi-Step-Form
This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## My Process
- I built this page using Next.js and styled-components and given the complexity of the challenge, it took me extra time to complete it.
- Since the mobile sidebar and the desktop sidebar are located in different places, I ended up creating two distinct sidebar components but only one component for the step icons which is a child of both. 
- I used a JSON file containing data related to the steps, plans and add-ons to dynamically render elements on the page. This made it possible to calculate the final price on the last step.
- Once again I created an object in the main component  with all state properties that is passed to every component to keep the code more organized.
  
## 🔧 Built With
- Next.Js
- Styled-components
- React
- Git
- CSS Grid
- Flexbox
- Media Queries
