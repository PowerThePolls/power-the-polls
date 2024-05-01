import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "page-advisory",
  styleUrl: "page-advisory.scss",
  shadow: false,
})
export class PageAdvisory {
  /**
   * The page's title
   */
  @Prop() public pageTitle?: string;

  public render() {
    return (
      <Host>
        <header aria-label="Advisory Council Page Header">
          <h1>{this.pageTitle || ""}</h1>
        </header>

        <main role="main" aria-label="Advisory Council Page Main Content">
          <section aria-label="Council Description">
            <p class="council-description">
              The Power the Polls Advisory Council is made up of prominent
              cultural, political, and advocacy leaders from across the
              political spectrum, united in their support for recruiting
              poll workers — one of the most effective, nonpartisan
              actions everyday Americans can take in support of our
              democracy.
            </p>
          </section>

          <section aria-label="Council Members">
            <h2>Members</h2>
            <div class="council-container">
              <div class="council-content">
                <img
                  class="council-headshot"
                  src="/assets/images/council_headshots/KerryWashington_1.png"
                  alt="Headshot of Kerry Washington"
                />
                <p class="council-name">Kerry Washington</p>
                <p class="council-title">Actress, producer/director, activist</p>
              </div>
              <div class="council-content">
                <img
                  class="council-headshot"
                  src="/assets/images/council_headshots/RepAdamKinzinger_APPROVED.jpeg"
                  alt="Headshot of Rep. Adam Kinzinger"
                />
                <p class="council-name">Rep. Adam Kinzinger</p>
                <p class="council-title">Former member of Congress (R-IL)</p>
              </div>
              <div class="council-content">
                <img
                  class="council-headshot"
                  src="/assets/images/council_headshots/FranciscoAguilar_official.jpg"
                  alt="Headshot of Francisco Aguilar"
                />
                <p class="council-name">Francisco Aguilar</p>
                <p class="council-title">Nevada Secretary of State</p>
              </div>
              <div class="council-content">
                <img
                  class="council-headshot"
                  src="/assets/images/council_headshots/BradRaffensperger_official.jpeg"
                  alt="Headshot of Brad Raffensperger"
                />
                <p class="council-name">Brad Raffensperger</p>
                <p class="council-title">Georgia Secretary of State</p>
              </div>
            </div>
            <div class="council-container">
              <div class="council-content">
                <img
                  class="council-headshot"
                  src="/assets/images/council_headshots/RyeBarcott_official.jpg"
                  alt="Headshot of Rye Barcott"
                />
                <p class="council-name">Rye Barcott</p>
                <p class="council-title">Co-founder, With Honor</p>
              </div>
              <div class="council-content">
                <img
                  class="council-headshot"
                  src="/assets/images/council_headshots/Arndrea Waters King_official.jpeg"
                  alt="Headshot of Arndrea Waters King"
                />
                <p class="council-name">Arndrea Waters King</p>
                <p class="council-title">President, Drum Major Institute</p>
              </div>
              <div class="council-content">
                <img
                  class="council-headshot"
                  src="/assets/images/council_headshots/SantiagoMayer_1.jpeg"
                  alt="Headshot of Santiago Mayer"
                />
                <p class="council-name">Santiago Mayer</p>
                <p class="council-title">Founder and Executive Director, Voters of Tomorrow</p>
              </div>
              <div class="council-content">
                <img
                  class="council-headshot"
                  src="/assets/images/council_headshots/DesmondMeade_APPROVED.jpeg"
                  alt="Headshot of Desmond Meade"
                />
                <p class="council-name">Desmond Meade</p>
                <p class="council-title">President and Executive Director, Florida Rights Restoration Coalition</p>
              </div>
            </div>
          </section>

          <section aria-label="Quotes">
                        <div class="quote">
                <p>
                “Poll workers strengthen our democracy by helping ensure our elections are safe, secure, and accessible for all voters. Power the Polls has proven its ability to help ensure democracy is a positive and empowering experience for all voters, and I’m honored to serve as a co-chair of the effort and help support their crucial work to recruit the next generation of poll workers.”
                </p>
                <p>- Kerry Washington</p>
            </div>
            <div class="quote right">
                <p>
                “At a time when our democracy is facing unique and historic threats, the role poll workers play in keeping our elections free and fair has never been more important. That’s why Power the Polls’ work is so important and why I’m proud to serve as the Advisory Council’s Co-Chair. I encourage all Americans to sign up to be poll workers through Power the Polls as a great way to serve our communities.”
                </p>
                <p>- Rep. Adam Kinzinger</p>
            </div>
            <div class="quote">
                <p>
                “Poll workers are on the frontlines of our democracy, and it is crucial that they receive the support and training they need to ensure that we all have the opportunity to exercise our right to vote. By connecting election officials with potential poll workers, Power the Polls helps jurisdictions across the country serve voters and ensure safe and fair elections.”
                </p>
                <p>- Sec. Francisco Aguilar </p>
            </div>
            <div class="quote right">
                <p>
                “Accurate and fair elections are the backbone of our democracy, and poll workers help ensure elections run smoothly. Serving as a poll worker is a valuable public service and a way to give back. I’m honored to be supporting Power the Polls as they encourage more Americans to participate in this important work.”
                </p>
                <p>- Sec. Brad Raffensperger </p>
            </div>
            <div class="quote">
                <p>
                "With Honor Action is focused on finding leaders in our communities who will serve with civility, integrity, and courage. It's these same principles we hope to find in citizens from across party lines who will step up as poll workers and keep our elections running smoothly. Power the Polls has helped recruit hundreds of thousands of poll workers since 2020, and I’m excited to support their ongoing work during this election season.”
                </p>
                <p>- Rye Barcott </p>
            </div>
            <div class="quote right">
                <p>
                “It's up to each one of us to move our society toward a vision of equality and justice for all, and the ballot box is one essential place where that change is made. The freedom to vote is sacred, and Power the Polls’ work to recruit, support, and empower poll workers makes our democracy stronger.”
                </p>
                <p>- Arndrea Waters King </p>
            </div>
            <div class="quote">
                <p>
                “Making sure that young people engage in civic life early is the key to building the lifelong habits that will help sustain our democracy. I can’t think of a better way to start getting involved than serving as a poll worker — which, in most states, you can do even if you’re not yet old enough to vote — and I’m tremendously proud to be a part of the Power the Polls Advisory Council.”
                </p>
                <p>- Santiago Mayer </p>
            </div>
            <div class="quote right">
                <p>
                “A key part of promoting inclusion in our society is giving people – including people with disabilities – the opportunity to participate fully in our elections. As a former disabled poll worker supervisor, I’m proud to support Power the Polls’ efforts to ensure that all voters have access to the ballot box, and that people with disabilities can make their voices heard in our democracy.”
                </p>
                <p>- Tiffany Yu </p>
            </div>
          </section>
        </main>
      </Host>
    );
  }
}
