import { Component, h, Prop } from "@stencil/core";
import { MatchResults } from "@stencil/router"; // To access route parameters

interface CouncilMemberData {
   title: string;
   quote: string;
   imgSrc: string;
}

@Component({
   tag: "page-council-member",
   styleUrl: "page-council-member.scss",
   shadow: false,
})
export class PageCouncilMember {
   @Prop() public match!: MatchResults;

   // Define quotes, titles, and images for each council member
   public councilData: { [key: string]: CouncilMemberData } = {
      "Kerry Washington": {
         title: "Actor, Producer, Director, Author & Activist",
         quote: `Poll workers are frontline heroes of democracy! Their work helps to ensure that ALL Americans are able to cast our votes safely and securely. By recruiting poll workers who are excited to serve their communities, Power the Polls has proven its ability to preserve trust in our electoral system, especially when democracy is under threat. It is an honor to serve as co-chair of the effort to support their commitment to democracy and recruit the next generation of poll workers.`,
         imgSrc: "/assets/images/council_headshots/KerryWashington_1.jpg",
      },
      "Rep. Adam Kinzinger": {
         title: "Former Member of Congress (R-IL)",
         quote: `At a time when our democracy is facing unique and historic threats, the role poll workers play in keeping our elections free and fair has never been more important. That’s why Power the Polls’ work is so important and why I’m proud to serve as the Advisory Council’s Co-Chair. I encourage all Americans to sign up to be poll workers through Power the Polls as a great way to serve our communities.`,
         imgSrc:
            "/assets/images/council_headshots/RepAdamKinzinger_APPROVED.jpeg",
      },
      "Francisco Aguilar": {
         title: "Nevada Secretary of State",
         quote: `Poll workers are the unsung heroes of our democracy, and it is crucial that they receive the support and training they need to ensure that we all have the opportunity to exercise our right to vote. By connecting election officials with potential poll workers, Power the Polls helps jurisdictions across the country serve voters and ensure safe and fair elections.`,
         imgSrc:
            "/assets/images/council_headshots/FranciscoAguilar_official.jpg",
      },
      "Brad Raffensperger": {
         title: "Georgia Secretary of State",
         quote: `Accurate and fair elections are the backbone of our republic, and poll workers help ensure elections run smoothly. Serving as a poll worker is a valuable public service and a way to give back. I’m honored to be supporting Power the Polls as they encourage more Americans to participate in this important work.`,
         imgSrc:
            "/assets/images/council_headshots/BradRaffensperger_official.jpeg",
      },
      "Rye Barcott": {
         title: "Co-Founder and Chief Executive Officer, With Honor",
         quote: `<a href="https://withhonor.org/">With Honor Action</a> is focused on finding leaders in our communities who will serve with civility, integrity, and courage. It's these same principles we hope to find in citizens from across party lines who will step up as poll workers and keep our elections running smoothly. Power the Polls has helped recruit hundreds of thousands of poll workers since 2020, and I’m excited to support their ongoing work during this election season.`,
         imgSrc: "/assets/images/council_headshots/RyeBarcott_official.jpg",
      },
      "Crystal Echo Hawk": {
         title: "Founder and Chief Executive Officer, IllumiNative",
         quote: `Empowering Indigenous communities to be the authors and champions of their own stories, especially as we commemorate the 100th anniversary of the Native right to vote, is essential for strengthening our democratic system. One of the most impactful ways to engage is by serving as a poll worker, ensuring that our polling stations reflect the diversity of the communities they serve. I’m looking forward to supporting Power the Polls’ continued efforts to foster inclusivity and representation at the polls this election season.`,
         imgSrc:
            "/assets/images/council_headshots/CrystalEchoHawk_APPROVED.jpg",
      },
      "Annie Gonzalez": {
         title: "Producer, Actress, Activist",
         quote: `With so many critical issues at stake in the coming election, getting involved is more important than ever. We can fake support, but we can’t fake showing up! One great way to make a difference is to show up in your community by signing up to be a poll worker. Not only can you get paid, but you can also make sure that when people show up to vote, they see friendly faces. For people who haven’t traditionally been involved in the civic process, that can make all the difference and spark a lifelong habit of community engagement.`,
         imgSrc: "/assets/images/council_headshots/AnnieGonzalez_1.jpeg",
      },
      "Arndrea Waters King": {
         title: "President, Drum Major Institute",
         quote: `It's up to each one of us to move our society toward a vision of equality and justice for all, and the ballot box is one essential place where that change is made. The freedom to vote is sacred, and Power the Polls’ work to recruit, support, and empower poll workers makes our democracy stronger.`,
         imgSrc:
            "/assets/images/council_headshots/Arndrea Waters King_official.jpeg",
      },
      "Santiago Mayer": {
         title: "Founder and Executive Director, Voters of Tomorrow",
         quote: `Making sure that young people engage in civic life early is the key to building the lifelong habits that will help sustain our democracy. I can’t think of a better way to start getting involved than serving as a poll worker — which, in most states, you can do even if you’re not yet old enough to vote — and I’m tremendously proud to be a part of the Power the Polls Advisory Council.`,
         imgSrc: "/assets/images/council_headshots/SantiagoMayer_1.jpeg",
      },
      "Desmond Meade": {
         title: "President and Executive Director, Florida Rights Restoration Coalition",
         quote: `We must never take our democracy or our right to vote for granted. By recruiting poll workers to serve in our elections, Power the Polls is helping to build a culture of civic participation and engagement. With a historic election coming up this November, these efforts have never been more crucial.`,
         imgSrc: "/assets/images/council_headshots/DesmondMeade_APPROVED.jpeg",
      },
      "Ashley Spillane": {
         title: "Founder, Civic Responsibility Project",
         quote: `This year, as Americans prepare to vote in this critical election, it is absolutely vital that we have plenty of enthusiastic, well-trained poll workers who are committed to ensuring our elections run smoothly. It's such a great way to give back to your community, support your neighbors, and help protect democracy. I am so lucky that I get to hear from many friends and thousands of volunteers at Power the Polls about what a fun and rewarding experience they have serving as poll workers.`,
         imgSrc:
            "/assets/images/council_headshots/AshleySpillane_APPROVED.jpeg",
      },
      "Gabriel Sterling": {
         title: "Chief Operating Officer, Office of Georgia Secretary of State",
         quote: `Poll workers are essential to running smooth and fair elections. It's a role that requires commitment and dedication, and Power the Polls helps connect people to these important opportunities. I'm glad to be part of the Advisory Council and support their mission to recruit more poll workers.`,
         imgSrc:
            "/assets/images/council_headshots/GabrielSterling_official.jpeg",
      },
      "Charlie Sykes": {
         title: "Former Editor-in-Chief, The Bulwark",
         quote: `An informed and engaged citizenry is crucial to a functioning democracy, and poll workers play a critical role in the electoral process. I'm proud to support Power the Polls in their mission to recruit and train poll workers, ensuring that our elections are fair and transparent.`,
         imgSrc: "/assets/images/council_headshots/CharlieSykes_official.jpeg",
      },
      "Tiffany Yu": {
         title: "Author, The Anti-Ableist Manifesto, and Founder, Diversability",
         quote: `A key part of promoting inclusion in our society is giving people – including people with disabilities – the opportunity to participate fully in our elections. As a former disabled poll worker supervisor, I’m proud to support Power the Polls’ efforts to ensure that all voters have access to the ballot box, and that people with disabilities can make their voices heard in our democracy.`,
         imgSrc: "/assets/images/council_headshots/TiffanyYu_APPROVED.jpg",
      },
   };

   // Navigate back to the previous page
   public navigateBack() {
      window.history.back();
   }

   public render() {
      const memberName = this.match.params.memberName; // Extract route parameter

      const memberData = this.councilData[memberName]; // Get the relevant data

      if (!memberData) {
         return (
            <div class="council-member-page">
               <button class="back-button" onClick={() => this.navigateBack()}>
                  Back
               </button>
               <div>Council member not found</div>
            </div>
         );
      }

      return (
         <div class="council-member-page">
            <div class="council-member-content">
               <button class="back-button" onClick={() => this.navigateBack()}>
                  Back
               </button>
               <h1 class="member-name">{memberName}</h1>
               <img
                  class="headshot"
                  src={memberData.imgSrc}
                  alt={`Headshot of ${memberName}`}
               />
               <h2 class="council-title">{memberData.title}</h2>
               <div class="quote-container">
                  <blockquote
                     class="quote"
                     innerHTML={memberData.quote}
                  ></blockquote>
               </div>
            </div>
         </div>
      );
   }
}
