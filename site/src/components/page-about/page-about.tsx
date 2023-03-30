import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-about",
    shadow: false,
})
export class PageAbout {

    public render() {
        return (
            <Host>
                <h1>ABOUT US</h1>
                <p>
                    Power the Polls is a first-of-its-kind, nonpartisan
                     initiative to recruit the next generation of poll
                     workers to ensure safe and fair elections for
                     all voters. 
                </p>
                <p>
                    When polling places close, it becomes more difficult
                     for voters to access the ballot box. That’s why Power
                     the Polls is working to recruit a new generation of
                     poll workers excited to serve their communities,
                     help their neighbors vote, and ensure safe access
                     to the ballot box for years to come. 
                </p>
                <p>
                    Power the Polls was launched in June 2020 by a coalition
                     of businesses and nonprofits, including Civic Alliance,
                     Civic Responsibility Project, Comedy Central, Fair
                     Elections Center, Pizza to the Polls, MTV Entertainment
                     Group, and Center for Secure & Modern Elections. Power
                     the Polls relies on objective data about poll worker
                     requirements and applications collected from over 5,000
                     jurisdictions assembled by the non-partisan Fair Elections
                     Center.
                </p>
                <h3>HOW POWER THE POLLS WORKS</h3>
                <p>
                    <strong>We recruit potential poll workers.</strong> We work with a diverse
                     coalition of partners to recruit the next generation of
                      poll workers to power our elections. When someone signs
                      up through Power the Polls, we direct them to their
                       state or local jurisdiction’s official online application
                      to apply. We also provide resources on the importance of
                          poll workers in ensuring safe and fair elections. 
                </p>
                <p>
                    <strong>We identify needs for poll workers.</strong> We coordinate
                     directly with elections administrators and state-based partners
                     to identify and meet poll worker needs in local communities,
                     including needs for bilingual and tech-savvy poll workers.
                     In 2020 and 2022, we worked with local elections officials,
                     Secretaries of State, and State Election Directors to address
                     poll worker shortages, and we are proud to continue this
                     critical work. 
                </p>
                <p>
                    <strong>We house a centralized hub for localized poll worker information.</strong> Type in any U.S.
                     zip code at powerthepolls.org/search and you’ll find local
                     information on poll worker compensation, hours, application
                     links, and training and voter registration requirements.
                     This objective data is collected and maintained by the
                     nonpartisan Fair Elections Center, as part of the
                     WorkElections project. 
                </p>
                <h1>HOW POWER THE POLLS STARTED </h1>
                <p>
                    In the spring of 2020, America was in the midst of a
                    nationwide poll worker shortage: primary elections
                    across the country saw reduced polling locations,
                    long lines, and voters waiting to cast their ballot for
                    several hours. Amidst the uncertainty caused by COVID-19,
                    fewer poll workers were signing up for the job.
                </p>
                <p>
                    In June 2020, Power the Polls was launched by a coalition
                    of businesses and nonprofits with the original goal of
                    recruiting 250,000 new prospective poll workers to
                    fill these gaps. In less than 100 days, Power the
                    Polls recruited over 700,000 prospective poll workers
                    across the United States. As a result, the shortages
                    we saw during the 2020 primaries were limited in
                    the general election: little to no poll worker
                    shortages were reported during states’ early
                    voting period and on Election Day.
                </p>
                <p>
                    We continued this work in the lead up to the 2022
                    election, recruiting more than 275,000 poll workers
                    in states all across the nation—people interested
                    in serving their communities, helping their neighbors
                    vote, and ensuring a fair and safe election. We can’t
                    stop now.
                </p>

            </Host>
        );
    }

}
