import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-resources",
    styleUrl: "page-resources.scss",
    shadow: false,
})
export class PageResources {

    public render() {
        return (
            <Host>
                <h1>Resources</h1>
                <p>
                    Now that you've <stencil-route-link url={`/${formPath}#form`} onClick={onSelectNavItem}>
                    signed up</stencil-route-link>
                     with Power the Polls, here are some resources to help you get ready to serve.
                </p>

                <div class="col-md-3 col-sm-4">
                    <div class="wrimagecard wrimagecard-topimage">
                        <a href="#">
                        <div class="wrimagecard-topimage_header" style="background-color:  rgba(250, 188, 9, 0.1)">
                        <center><i class="fa fa-info-circle" style="color:#fabc09"> </i></center>
                    </div>
                <div class="wrimagecard-topimage_title">
                    <h4>Information
                    <div class="pull-right badge" id="WrInformation"></div></h4>
                </div>

                <h2>
                    You’ve signed up to be a poll worker - now what? - <a href="/assets/documents/now-what.pdf"
                                                                          target="_blank" rel="noopener noreferrer">Click
                    here</a>
                </h2>
                <p>
                    You’ve signed up with Power the Polls—now what? Read <a href="/assets/documents/now-what.pdf"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer">here</a> for an
                    overview of your journey to becoming a poll worker.
                </p>

                <h2>
                    A Day in the Life of a Poll Worker - <a href="/assets/documents/a-day-in-the-life.pdf"
                                                            target="_blank"
                                                            rel="noopener noreferrer">Click here</a>
                </h2>
                <p>
                    Want to learn a little bit more about what to expect on the average day of a poll worker? Read <a
                    href="/assets/documents/a-day-in-the-life.pdf" target="_blank" rel="noopener noreferrer">here</a>
                    for more.
                </p>

                <h2>
                    25 Questions to Ask in Your Official Poll Worker Training - <a
                    href="/assets/documents/25-questions-to-ask.pdf" target="_blank" rel="noopener noreferrer">Click
                    here</a>
                </h2>
                <p>
                    Your local elections office will schedule an official training for you. Get ready to make the most
                    of this valuable training time by reviewing this checklist <a
                    href="/assets/documents/25-questions-to-ask.pdf" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
                <h2>
                    Election Day Checklist for Poll Workers - <a href="/assets/documents/election-day-checklist.pdf"
                                                                 target="_blank" rel="noopener noreferrer">Click
                    here</a>
                </h2>
                <p>
                    Early voting and Election Day are right around the corner. <a
                    href="/assets/documents/election-day-checklist.pdf" target="_blank" rel="noopener noreferrer">Print
                    or save</a> this checklist to help you prepare.
                </p>
                <br />
                <br />
                <p>
                    Please note these supplemental resources do not take the place of the official poll worker training
                    and resources that your elections office provides. If you have specific questions related to your
                    service as a poll worker or the rules and resources in your jurisdiction,{" "}
                    <stencil-route-link url="/search">reach out to your local election
                        administrator.
                    </stencil-route-link>
                </p>

            </Host>
        );
    }

}
