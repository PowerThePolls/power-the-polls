import { FunctionalComponent, h } from "@stencil/core";

import { StateInfo } from "../data/States";

/**
 * Empty container element, i.e.: `<></>`
 **/
const Fragment: FunctionalComponent<{}> = ( _, children ) => children;

const NextSteps: FunctionalComponent<{ stateInfo: StateInfo | null }> = ( { stateInfo } ) => (
   stateInfo != null && stateInfo.noPollWorkersNeeded ? (
      <Fragment>
         <h1>Thank you so much for your interest in being a poll worker!</h1>
         <p>
            Good news: <strong>{stateInfo.name} has indicated that they have all the election workers they need this year!</strong>
         </p>
         <p>
            The bad news is, that means we won’t have a place for you to serve as a poll worker, since your state is all set, and jurisdiction requirements unfortunately mean
            you won’t be eligible to serve in another state.
         </p>
         <p>
            We are passing your information on to your state's election administrators who will reach out if their needs change or if there are other
            opportunities to help their offices.
         </p>
         <p>
            <strong>You can still help power the polls</strong> by voting in this upcoming election, and encouraging your friends and family across the country to register
            to vote and, for those who live in other states - signing up to be poll workers.
         </p>
      </Fragment>
   ) : (
         <Fragment>
            <h1>You’re one step closer to Powering the Polls!</h1>
            <h2>What’s next?</h2>
            <hr />
         </Fragment>
      )
);
export default NextSteps;