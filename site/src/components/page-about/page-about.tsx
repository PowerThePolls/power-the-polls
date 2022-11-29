import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-about",
    styleUrl: "page-about.scss",
    shadow: false,
})
export class PageAbout {

    public render() {
        return (
            <Host>
                <h1>About Us</h1>
                <div class="inspire">
                <h3>We Aim to Inspire Americans to Sign Up to be Poll Workers</h3>
                <p>
                    <b>America needs more poll workers to ensure a safe and fair election. </b> Power the Polls is designed to
                    address that need to recruit a new wave of
                    younger, more diverse poll workers who can help protect fair access to the ballot box now and in the
                    future. Power the Polls is a first-of-its-kind, nonpartisan initiative for recruiting poll workers.
                </p>
                </div>
                <p>
                    Power the Polls was launched in June 2020 by a coalition of businesses and nonprofits seeking to
                    recruit a new wave of poll workers ahead of the 2020 election. America was in the midst of a
                    nationwide poll worker shortage, and the consequences had already been felt in primary elections
                    with reduced polling locations, long lines, and voters waiting to cast their ballot for several
                    hours. In the era of uncertainty caused by the coronavirus, fewer poll workers were signing up for
                    the job.
                </p>
                <p>
                    Power the Polls had an original goal of recruiting 250,000 new prospective poll workers. In less
                    than 100 days, Power the Polls harnessed the energy of individuals interested in ensuring a fair and
                    safe election, recruiting over 700,000 prospective poll workers across the United States.
                    Consequently, the shortages we saw during the 2020 primaries were limited in the general election:
                    little to no poll worker shortages were reported during states’ early voting period and on Tuesday,
                    November 3, 2020.
                </p>
                <p>
                    When polling places close, it becomes more difficult for voters to access the ballot box. That’s why
                    Power the Polls is continuing its work to recruit a new generation of poll workers who can ensure
                    safe and fair access to the ballot box in 2022 and in elections to come.
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
