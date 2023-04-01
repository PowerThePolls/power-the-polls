import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-impact",
    shadow: false,
})
export class PageImpact {

    public render() {
        return (
            <Host>
                <h1>IMPACT</h1>
                <p>
                    Power the Polls recruited over 700,000 potential poll
                     workers in 2020 and over 275,000 potential poll workers
                     in 2022.
                </p>
                <p>
                    In November 2022, Power the Polls partnered with Patinkin
                     Research Strategies to conduct a post-election survey to
                     assess the impact of our work. <strong>The biggest takeaway: Power
                     the Polls successfully recruited and placed poll workers who
                     showed up where they were needed, felt prepared to serve their
                     communities, and had a positive experience working the polls.
                     </strong>
                </p>
                <p>
                    Key findings:
                </p>
                <ul>
                    <li>95% of those who served as poll workers reported satisfaction in their work</li>
                    <li>88% expressed interest in working in future elections</li>
                    <li>85% of those who received local poll worker training felt prepared to serve during the election</li>
                    <li>86% believed that elections were run well in their community</li>
                    <li>52% of those who self-reported language abilities are bilingual, with reported fluency in over 50
                     different languages</li>
                </ul>
                <h3>DETAILED SURVEY FINDINGS</h3>
                <p>
                    Of Power the Polls’ recruits surveyed, 61% reported serving as a poll worker in the November 2022 General
                     Election (compared to 48.5% of respondents in 2020). Of these, 80% reported serving on Election Day and
                     19% reported serving during early voting.
                </p>
                <img src="/assets/images/impact/did_you_serve.png"></img>
                <p>
                    Survey respondents reported having an overwhelmingly positive
                     experience working the polls in 2022, with 95% reporting
                     satisfaction in their work and the vast majority (88%)
                     interested in continuing to work in future elections.
                </p>
                <img src="/assets/images/impact/satisfaction_with_experience.png"></img>
                <img src="/assets/images/impact/interest_in_serving.png"></img>
                <p>
                    Election administrators did an effective job training poll
                     workers. Almost every poll worker who received training
                     reported feeling prepared for Election Day.
                </p>
                <img src="/assets/images/impact/prepared_to_serve.png"></img>
                <p>
                    Trust in elections is high in the Power the Polls community:
                     86% of respondents believe that elections were run well in
                     their community.
                </p>
                <img src="/assets/images/impact/elections_well_run.png"></img>
                <p>
                    Over half of employed survey respondents reported that
                     their current employers offered time off to work the
                     polls. Most of these workers were employed by businesses
                     (41%), outpacing government (14%) and nonprofits (12%).
                </p>
                <img src="/assets/images/impact/was_time_off_given.png"></img>
                <p>
                    More than half (52%) of people recruited by Power the
                     Polls who self-reported their language abilities are
                     bilingual, with individuals reporting fluency in more
                     than 50 different languages.
                </p>
                <p>
                    Top languages include:
                </p>
                <ul>
                    <li>Spanish (37%)</li>
                    <li>French (3%)</li>
                    <li>Arabic (1.1%)</li>
                    <li>Haitian-Creole (1.1%)</li>
                    <li>ASL (1.0%)</li>
                    <li>Other languages (8.9%)</li>
                </ul>
                <img src="/assets/images/impact/language_breakdown.png"></img>
                <p>
                    This survey was conducted by Patinkin Research
                     Strategies and completed by 4,708 people across
                     the United States, pulled from two samples of the
                     Power the Polls 2022 sign-up list.
                </p>
                <p>
                    For more information about this survey, please reach
                     out to <a
                    href="mailto:info@powerthepolls.org">info@powerthepolls.org</a>
                </p>
            </Host>
        );
    }

}
