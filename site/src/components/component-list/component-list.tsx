import { Component, Fragment, h, Host } from "@stencil/core";

/**
 * List of all components in use in the app
 */
@Component({
   tag: "component-list",
   styleUrl: "component-list.scss",
   shadow: false,
})
export class ComponentList {
   public render() {
      const items = [
         { tag: "ui-menu-button", example: <ui-menu-button /> },
         { tag: "h1", example: <h1>Aliquam vel felis mauris</h1> },
         { tag: "h2", example: <h2>Aliquam vel felis mauris</h2> },
         { tag: "h3", example: <h3>Aliquam vel felis mauris</h3> },
         {
            tag: "ui-h3-bar",
            example: <ui-h3-bar>Aliquam vel felis mauris</ui-h3-bar>,
         },
         { tag: "h4", example: <h4>Aliquam vel felis mauris</h4> },
         { tag: "hr", example: <hr /> },
         {
            tag: "p",
            example: (
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a eros luctus, ultricies nisl in, semper justo. Praesent
                  egestas ante non est semper suscipit.
               </p>
            ),
         },
         {
            tag: "ui-social-share",
            example: (
               <ui-social-share
                  image="icon-fb.svg"
                  name="SocialNetworkName"
                  cta="Social Share"
                  url="#"
               />
            ),
         },
         {
            tag: "ui-social-share invertColors=true",
            example: (
               <ui-social-share
                  invertColors={true}
                  image="icon-ig.svg"
                  name="SocialNetworkName"
                  cta="Social Share"
                  url="#"
               />
            ),
         },
         {
            tag: "ui-impact-box",
            example: (
               <ui-impact-box>
                  <h2>h2 heading</h2>
                  <p>Lorem ipsum dolor sit amet</p>
               </ui-impact-box>
            ),
         },
         { tag: "ui-loading-spinner", example: <ui-loading-spinner /> },
         {
            tag: 'ui-partner-image partner="Pizza"',
            example: <ui-partner-image partner="Pizza" />,
         },
         // {tag: "AAAA", example: FOOOO},
      ];
      return (
         <Host>
            <dl>
               {items.map((item) => (
                  <Fragment>
                     <dt>&lt;{item.tag}&gt;</dt>
                     <dd>{item.example}</dd>
                  </Fragment>
               ))}
            </dl>
            <div style={{ clear: "both" }}></div>
         </Host>
      );
   }
}
