# [Power the Polls](https://powerthepolls.org)  
[![GitHub](https://img.shields.io/github/license/PowerThePolls/power-the-polls)](https://github.com/PowerThePolls/power-the-polls/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@ptp-us/power-the-polls-form)](https://www.npmjs.com/package/@ptp-us/power-the-polls-form)

There are two projects in this repository:

1. `/power-the-polls-form` contains the main submission form as an independent web component. It is used by `/site` and intended for sharing with partners and generally spreading the signup as wide as possible.
2. `/site` contains the website for powerthepolls.org

## `/power-the-polls-form`

### Developing Locally

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start a server locally and watch changes

To do a full build, run `npm run build`.

### Deploying

This is currently done manually

1. Bump the version in `./package.json`, if creating a beta version, make sure there is a revision, e.g., `1.0.0-beta.1`, `1.2.0-beta.24`.
2. Run `npm run release` to do a production release. Run `npm run release:beta` to do a beta release.
3. Enter your 2-factor auth key when prompted in order to publish to NPM
4. You will then also want to change `/site/package.json` to this new version (or use `npm update`)

### Dependencies

#### APIs

> Both of these pieces could be replaced with similar products with minimal disruption.

1. [ActionKit](https://ptp.actionkit.com/admin/), is the data store and provides marketing and chase functionality
2. [SmartyStreets](https://account.smartystreets.com/), is used for address autocomplete and data augmentation.
3. [WorkElections](https://www.workelections.org), provides all our jurisdiction and election data.

## `/site`

* `./public`  
  Files here are copied directly to the build output and will be available at `/*` in the deployed website.
* `./styles`  
  Root SCSS for the entire app in addition to styles injected into every component. These app-wide styles should be kept to a minimum in favor of component styles.
* `./src`  
  Compiled TypeScript files comprising the app. Start at `./src/index.html` which just has a single `<app-root>` element, then look at the component in `./src/components/app-root` and go from there...

### Developing Locally

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start a server locally and watch changes to files

#### Developing the site and form in tandem

1. In `/site`, run `npm run link:form`
2. In `/power-the-polls-form` Use `npm run build` which will build the form and then  in `/site` run `npm run dev`
   > NOTE: Watch doesn't work across the projects atm. So you'll still have to kill the process and re-run `npm run dev` if you change the form.
3. Don't commit the modified `package.json`!
4. Make sure you run `npm run unlink:form` when you are done to fix the `package.json`.

### Deploying the Form

To deploy the NPM package for the PtP form you will need to do a few steps:

1. Update the package version in `power-the-polls-form/package.json`
2. Release the form using the following commands:
    ```shell
    cd power-the-polls-form
    npm run release
    ```
3. Update the package on the site using the `<VERSION>` you set above in the `package.json`.
    ```shell
    cd site
   npm install power-the-polls-form@<VERSION>
    ```
4. Create a PR to have Netlify create a preview of the site and verify everything looks good. 
5. Merge the PR.

### Deploying the Site

Run `npm run build` to do a production build. The contents of `/dist/www` can then be deployed to a host or CDN.

Currently, commits to the `master` branch and opened pull requests trigger automatic deploys in [Netlify](https://netlify.com) to the production site (`master`) or a custom subdomain (PRs).

#### Netlify Settings

[Deploy settings](https://app.netlify.com/sites/powerthepolls/settings/deploys) should auto load from the `netlify.toml` in the project but you can also set manually:  
base directory: `site`  
command: `npm install && npm run build`  
publish directory: `dist/www`

[![Netlify Status](https://api.netlify.com/api/v1/badges/7b1345e9-242b-4e34-bcef-3f57b3d6a6f0/deploy-status)](https://app.netlify.com/sites/powerthepolls/deploys)
