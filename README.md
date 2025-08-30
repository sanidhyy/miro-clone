<a name="readme-top"></a>

# Miro Clone - Real-time collaboration, versatile canvas, rich media, secure.

![Miro Clone - Real-time collaboration, versatile canvas, rich media, secure.](/.github/images/img_main.png "Miro Clone - Real-time collaboration, versatile canvas, rich media, secure.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/miro-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/miro-clone/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/miro-clone/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/miro-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/miro-clone/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/miro-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/miro-clone/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/miro-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/miro-clone/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/miro-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/miro-clone/pulls "GitHub pull requests")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://clone-miro.vercel.app/ "Vercel status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
miro-clone/
  |- app/
    |-- (dashboard)/
        |--- _components/
            |---- board-card/
            |---- sidebar/
            |---- board-list.tsx
            |---- empty-boards.tsx
            |---- empty-favourites.tsx
            |---- empty-org.tsx
            |---- empty-search.tsx
            |---- invite-button.tsx
            |---- navbar.tsx
            |---- new-board-button.tsx
            |---- org-sidebar.tsx
            |---- search-input.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- api/liveblocks-auth/
        |--- route.ts
    |-- board/[boardId]/
        |--- _components/
            |---- canvas.tsx
            |---- color-picker.tsx
            |---- cursor.tsx
            |---- cursors-presence.tsx
            |---- ellipse.tsx
            |---- info.tsx
            |---- layer-preview.tsx
            |---- loading.tsx
            |---- note.tsx
            |---- participants.tsx
            |---- path.tsx
            |---- rectangle.tsx
            |---- selection-box.tsx
            |---- selection-tools.tsx
            |---- text.tsx
            |---- tool-button.tsx
            |---- toolbar.tsx
            |---- user-avatar.tsx
        |--- page.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- auth/
    |-- modals/
    |-- ui/
    |-- actions.tsx
    |-- confirm-modal.tsx
    |-- hint.tsx
    |-- room.tsx
  |- config/
    |-- index.ts
  |- convex/
    |-- _generated/
    |-- auth.config.js
    |-- board.ts
    |-- boards.ts
    |-- schema.ts
    |-- tsconfig.json
  |- hooks/
    |-- use-api-mutation.tsx
    |-- use-disable-scroll-bounce.tsx
    |-- use-selection-bounds.tsx
  |- lib/
    |-- utils.ts
  |- providers/
    |-- convex-client-provider.tsx
    |-- modal-provider.tsx
  |- public/
    |-- placeholders/
    |-- elements.svg
    |-- empty-boards.svg
    |-- empty-favourites.svg
    |-- empty-search.svg
    |-- logo.svg
  |- store/
    |-- use-rename-modal.ts
  |- types/
    |-- canvas.ts
  |- .env.local
  |- .env.local.example
  |- .eslintrc.json
  |- .gitignore
  |- components.json
  |- environment.d.ts
  |- liveblocks.config.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# disable next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# deployment for convex
CONVEX_DEPLOYMENT=dev:convex-app-name # team: <your-team-name>, project: <your-project-name>

# convex deployment url
NEXT_PUBLIC_CONVEX_URL=https://convex-app-name.convex.cloud

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk default org id
CLERK_DEFAULT_ORGANIZATION_ID=org_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# liveblocks api keys
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_dev_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
LIVEBLOCKS_SECRET_KEY=sk_dev_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```

### 5. Convex Deployment Configuration:

#### a. Visit the Convex Website:

- Go to the [Convex website](https://convex.cloud/) and sign in to your account.

#### b. Access Deployment Settings:

- Navigate to the deployment settings section in your Convex account.

#### c. Retrieve Deployment Configuration:

- Find the deployment details, including team and project names.
- Update the `CONVEX_DEPLOYMENT` variable in the `.env.local` file with the obtained information.

### 6. Clerk Authentication Keys:

#### a. Visit the Clerk Website:

- Go to the [Clerk website](https://clerk.dev/) and sign in to your Clerk account.

#### b. Access API Keys:

- Find the section in your Clerk account related to API keys or authentication settings.

#### c. Generate Keys:

- Generate a pair of keys (Publishable Key and Secret Key).

#### d. Update `.env.local`:

- Replace the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` variables in the `.env.local` file with the keys obtained from Clerk.

#### e. Get Default Organization Id

- Go to Clerk Dashboard > Settings > Organizations and Enable Organizations.
- Create a new organization, Replace the `CLERK_DEFAULT_ORGANIZATION_ID` with the newly created organization id.

### 7. Liveblocks API Keys:

#### a. Visit the Liveblocks Website:

- Go to the [Liveblocks website](https://liveblocks.io/) and sign in to your Liveblocks account.

#### b. Access API Keys:

- Navigate to your Liveblocks account settings or API keys section.

#### c. Generate Keys:

- Generate a pair of keys (Public Key and Secret Key) for development.

#### d. Update `.env.local`:

- Replace the `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` and `LIVEBLOCKS_SECRET_KEY` variables in the `.env.local` file with the Liveblocks API keys obtained.

### 8. Save and Secure:

- Save the changes to the `.env.local` file.

9. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.
10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Create New Boards](/.github/images/img2.png "Create New Boards")

![Rename Boards](/.github/images/img3.png "Rename Boards")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![MySQL](https://skillicons.dev/icons?i=mysql "MySQL")](https://mysql.com/ "MySQL")

## :wrench: Stats

[![Stats for Miro Clone](/.github/images/stats.svg "Stats for Miro Clone")](https://pagespeed.web.dev/analysis?url=https://clone-miro.vercel.app/ "Stats for Miro Clone")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Miro Clone.

- Thanks to CodeWithAntonio: https://codewithantonio.com/
- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.29.7
- [@liveblocks/client](https://www.npmjs.com/package/@liveblocks/client): ^1.10.1
- [@liveblocks/node](https://www.npmjs.com/package/@liveblocks/node): ^1.10.1
- [@liveblocks/react](https://www.npmjs.com/package/@liveblocks/react): ^1.10.1
- [@radix-ui/react-alert-dialog](https://www.npmjs.com/package/@radix-ui/react-alert-dialog): ^1.0.5
- [@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar): ^1.0.4
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.0.5
- [@radix-ui/react-dropdown-menu](https://www.npmjs.com/package/@radix-ui/react-dropdown-menu): ^2.0.6
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [@radix-ui/react-tooltip](https://www.npmjs.com/package/@radix-ui/react-tooltip): ^1.0.7
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.0
- [convex](https://www.npmjs.com/package/convex): ^1.9.0
- [convex-helpers](https://www.npmjs.com/package/convex-helpers): ^0.1.23
- [date-fns](https://www.npmjs.com/package/date-fns): ^3.3.1
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.323.0
- [nanoid](https://www.npmjs.com/package/nanoid): ^5.0.6
- [next](https://www.npmjs.com/package/next): 14.1.0
- [next-themes](https://www.npmjs.com/package/next-themes): ^0.2.1
- [perfect-freehand](https://www.npmjs.com/package/perfect-freehand): ^1.2.2
- [query-string](https://www.npmjs.com/package/query-string): ^8.2.0
- [react](https://www.npmjs.com/package/react): ^18
- [react-contenteditable](https://www.npmjs.com/package/react-contenteditable): ^3.3.7
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [sonner](https://www.npmjs.com/package/sonner): ^1.4.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.2.1
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [usehooks-ts](https://www.npmjs.com/package/usehooks-ts): ^2.14.0
- [zustand](https://www.npmjs.com/package/zustand): ^4.5.1

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmiro-clone "Tweet about this project")
[![Subscribe to my YouTube Channel](https://img.shields.io/youtube/channel/subscribers/UCNAz_hUVBG2ZUN8TVm0bmYw)](https://www.youtube.com/@OPGAMER./?sub_confirmation=1 "Subscribe to my YouTube Channel")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/miro-clone&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/miro-clone&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/miro-clone&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/miro-clone&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
