import {Component, h, Host} from "@stencil/core";

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
                    Power the Polls was launched in June 2020 by a coalition of businesses and nonprofits seeking to
                     recruit a new wave of poll workers ahead of the 2020 election. America was in the midst of a
                     nationwide poll worker shortage, and the consequences had already been felt in primary elections
                     with reduced polling locations, long lines, and voters waiting to cast their ballot for several hours.
                     In the era of uncertainty caused by the coronavirus, fewer poll workers were signing up for the job.
                </p>
                <p>
                    Power the Polls had an original goal of recruiting 250,000 new prospective poll workers. In less than
                     100 days, Power the Polls harnessed the energy of individuals interested in ensuring a fair and safe
                     election, recruiting over 700,000 prospective poll workers across the United States. Consequently,
                     the shortages we saw during the 2020 primaries were limited in the general election: little to no
                     poll worker shortages were reported during states’ early voting period and on Tuesday, November 3,
                     2020. We continued this work in the lead up to the 2022 election, recruiting more than 275,000 poll
                     workers in states all across the nation – and we can’t stop now.
                </p>
                <p>
                    When polling places close, it becomes more difficult for voters to access the ballot box. That’s why 
                    Power the Polls is continuing its work to recruit a new generation of poll workers who can ensure
                     safe and fair access to the ballot box in elections to come.
                </p>
                <h3>Providing Accurate Poll Worker Information</h3>
                <p>
                    Power the Polls relies on objective data about poll worker requirements and applications collected
                     from over 5,000 jurisdictions assembled by the non-partisan Fair Elections Center. Information is
                     available on poll worker compensation, hours, application links, and training and voter registration
                     requirements.
                </p>
            </Host>
        );
    }

}
