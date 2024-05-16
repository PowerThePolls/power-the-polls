import { Component, h, Host, Prop } from "@stencil/core";

@Component({
   tag: "page-advisory",
   styleUrl: "page-advisory.scss",
   shadow: false,
})
export class PageAdvisory {
   @Prop() public pageTitle?: string;

   public render() {
      return (
         <Host>
            <header aria-label="Advisory Council Page Header">
               <h1>{this.pageTitle || ""}</h1>
            </header>
            <div class="advisory-council-page">
               <main
                  role="main"
                  aria-label="Advisory Council Page Main Content"
               >
                  <section aria-label="Council Description">
                     <p class="council-description">
                        The Power the Polls Advisory Council is made up of
                        prominent cultural, political, and advocacy leaders from
                        across the political spectrum, united in their support
                        for recruiting poll workers — one of the most effective,
                        nonpartisan actions everyday Americans can take in
                        support of our democracy.
                     </p>
                  </section>

                  <section aria-label="Council Members">
                     <div>
                        <h2>Co-Chairs</h2>
                     </div>

                     <div class="co-chair-container">
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Kerry Washington">
                              <img
                                 class="co-chair"
                                 src="/assets/images/council_headshots/cropped_headshots/KerryWashington_1_cropped.jpg"
                                 alt="Headshot of Kerry Washington"
                              />
                              <p class="council-name">Kerry Washington</p>
                              <p class="council-title">
                                 Actor, Producer, Director, Author & Activist
                              </p>
                           </stencil-route-link>
                        </div>
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Rep. Adam Kinzinger">
                              <img
                                 class="co-chair"
                                 src="/assets/images/council_headshots/cropped_headshots/RepAdamKinzinger_APPROVED_cropped.jpg"
                                 alt="Headshot of Rep. Adam Kinzinger"
                              />
                              <p class="council-name">Rep. Adam Kinzinger</p>
                              <p class="council-title">
                                 Former Member of Congress (R-IL)
                              </p>
                           </stencil-route-link>
                        </div>
                     </div>
                     <h2>Members</h2>
                     <div class="council-container">
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Francisco Aguilar">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/FranciscoAguilar_official_cropped.jpg"
                                 alt="Headshot of Francisco Aguilar"
                              />
                              <p class="council-name">Francisco Aguilar</p>
                              <p class="council-title">
                                 Nevada Secretary of State
                              </p>
                           </stencil-route-link>
                        </div>
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Brad Raffensperger">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/BradRaffensperger_official_cropped.jpg"
                                 alt="Headshot of Brad Raffensperger"
                              />
                              <p class="council-name">Brad Raffensperger</p>
                              <p class="council-title">
                                 Georgia Secretary of State
                              </p>
                           </stencil-route-link>
                        </div>

                        <div class="council-content">
                           <stencil-route-link url="/council-member/Rye Barcott">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/RyeBarcott_APPROVED_cropped.jpg"
                                 alt="Headshot of Rye Barcott"
                              />
                              <p class="council-name">Rye Barcott</p>
                              <p class="council-title">
                                 Co-Founder and Chief Executive Officer, With
                                 Honor
                              </p>
                           </stencil-route-link>
                        </div>

                        <div class="council-content">
                           <stencil-route-link url="/council-member/Crystal Echo Hawk">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/CrystalEchoHawk_APPROVED_cropped.jpg"
                                 alt="Headshot of Crystal Echo Hawk"
                              />
                              <p class="council-name">Crystal Echo Hawk</p>
                              <p class="council-title">
                                 Founder and Chief Executive Officer,
                                 IllumiNative
                              </p>
                           </stencil-route-link>
                        </div>
                     </div>

                     <div class="council-container">
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Annie Gonzalez">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/AnnieGonzalez_1_cropped.jpg"
                                 alt="Headshot of Annie Gonzalez"
                              />
                              <p class="council-name">Annie Gonzalez</p>
                              <p class="council-title">
                                 Producer, Actress, Activist
                              </p>
                           </stencil-route-link>
                        </div>

                        <div class="council-content">
                           <stencil-route-link url="/council-member/Arndrea Waters King">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/Arndrea Waters King_official_cropped.jpg"
                                 alt="Headshot of Arndrea Waters King"
                              />
                              <p class="council-name">Arndrea Waters King</p>
                              <p class="council-title">
                                 President, Drum Major Institute
                              </p>
                           </stencil-route-link>
                        </div>
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Santiago Mayer">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/SantiagoMayer_1_cropped.jpg"
                                 alt="Headshot of Santiago Mayer"
                              />
                              <p class="council-name">Santiago Mayer</p>
                              <p class="council-title">
                                 Founder and Executive Director, Voters of
                                 Tomorrow
                              </p>
                           </stencil-route-link>
                        </div>
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Desmond Meade">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/DesmondMeade_APPROVED_cropped.jpg"
                                 alt="Headshot of Desmond Meade"
                              />
                              <p class="council-name">Desmond Meade</p>
                              <p class="council-title">
                                 President and Executive Director, Florida
                                 Rights Restoration Coalition
                              </p>
                           </stencil-route-link>
                        </div>
                     </div>
                     <div class="council-container">
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Ashley Spillane">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/AshleySpillane_APPROVED_cropped.jpg"
                                 alt="Headshot of Ashley Spillane"
                              />
                              <p class="council-name">Ashley Spillane</p>
                              <p class="council-title">
                                 Founder, Civic Responsibility Project
                              </p>
                           </stencil-route-link>
                        </div>
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Gabriel Sterling">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/GabrielSterling_official_cropped.jpg"
                                 alt="Headshot of Gabriel Sterling"
                              />
                              <p class="council-name">Gabriel Sterling</p>
                              <p class="council-title">
                                 Chief Operating Officer, Office of Georgia
                                 Secretary of State
                              </p>
                           </stencil-route-link>
                        </div>
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Charlie Sykes">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/CharlieSykes_official_cropped.jpg"
                                 alt="Headshot of Charlie Sykes"
                              />
                              <p class="council-name">Charlie Sykes</p>
                              <p class="council-title">
                                 Former Editor-in-Chief, The Bulwark
                              </p>
                           </stencil-route-link>
                        </div>
                        <div class="council-content">
                           <stencil-route-link url="/council-member/Tiffany Yu">
                              <img
                                 class="council-headshot"
                                 src="/assets/images/council_headshots/cropped_headshots/TiffanyYu_APPROVED 1_cropped.jpg"
                                 alt="Headshot of Tiffany Yu"
                              />
                              <p class="council-name">Tiffany Yu</p>
                              <p class="council-title">
                                 Author and Founder, Diversability
                              </p>
                           </stencil-route-link>
                        </div>
                     </div>
                  </section>
               </main>
            </div>
         </Host>
      );
   }
}
