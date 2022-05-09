import { Component, h, Host } from "@stencil/core";

@Component({
   tag: "page-about",
   shadow: false,
})
export class PageAbout {
   public render() {
      return (
         <Host>
            <h1>About Us</h1>
            <p>
               Power the Polls was launched in June 2020 by a coalition of
               businesses and nonprofits seeking to recruit a new wave of poll
               workers ahead of the 2020 election. America was in the midst of a
               nationwide poll worker shortage, and the consequences had already
               been felt in primary elections with reduced polling locations,
               long lines, and voters waiting to cast their ballot for several
               hours. Historically, most poll workers are over the age of 60,
               and in the era of uncertainty caused by the coronavirus, fewer
               were signing up for the job.
            </p>
            <p>
               Power the Polls had an original goal of recruiting 250,000 new
               prospective poll workers. In less than 100 days, Power the Polls
               harnessed the energy of individuals interested in ensuring a
               fair, safe and secure election, and was able to recruit over
               700,000 prospective poll workers across the United States.
               Consequently, the shortages we saw during the 2020 primaries were
               limited in the general election: little to no poll worker
               shortages were reported during states’ early voting period and on
               Tuesday, November 3, 2020.
            </p>
            <h3>Providing Accurate Poll Worker Information</h3>
            <p>
               Power the Polls uses data on poll worker requirements researched
               and collected by the nonpartisan Fair Elections Center, creators
               of the unique{" "}
               <a
                  href="https://www.workelections.org"
                  target="_blank"
                  rel="noopener"
                  title="Open workelections.org in a new window"
               >
                  workelections.org
               </a>
               &nbsp; web portal. Information is available on poll worker
               compensation, hours, application links, and training and voter
               registration requirements for more than 4,000 jurisdictions in
               states across the country.
            </p>
         </Host>
      );
   }
}
