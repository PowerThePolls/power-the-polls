import { FunctionalComponent, h } from "@stencil/core";

import { JurisdictionInfo } from "../../data/States";

const CompleteApplicationButton: FunctionalComponent<{
   jurisdiction: JurisdictionInfo;
}> = ({ jurisdiction: j }) =>
   j?.online_application &&
   j?.online_application !== "" && (
      <a
         class="poll-worker-action cta"
         href={j.online_application}
         target="_blank"
      >
         Complete your application
      </a>
   );
export default CompleteApplicationButton;
