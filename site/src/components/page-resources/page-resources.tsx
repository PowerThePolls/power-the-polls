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
                    You've signed up with Power the Polls and completed the poll worker application through your local
                    elections office—and now you're waiting to hear back. Or perhaps you've been selected as a poll
                    worker! Maybe you’re still thinking about submitting an application and want to know more before you
                    do. Wherever you are in the process, here are some resources to help you get ready to serve.
                </p>


                <h2>You’ve signed up to be a poll worker—now what?</h2>
                <p>
                    You’ve signed up with Power the Polls—now what? Read here for an overview of your journey to
                    becoming a poll worker.
                </p>

                <h2>A Day in the Life of a Poll Worker</h2>
                <p>
                    Want to learn a little bit more about what to expect on the average day of a poll worker? Read here
                    for more.
                </p>

                <h2>Questions to Ask in Your Official Poll Worker Training</h2>
                <p>
                    Your local elections office will schedule an official training for you. Get ready to make the most
                    of this valuable training time.
                </p>

                <p>
                    Please note these supplemental resources do not take the place of the official poll worker training
                    and resources that your elections office provides. If you have specific questions related to your
                    service as a poll worker or the rules and resources in your jurisdiction,{" "}
                    <stencil-route-link url="/search">reach out to your local election
                        administrator.</stencil-route-link>
                </p>

            </Host>
        );
    }

}
