---
title: moobidesk
app_file: 🦙/test.py
sdk: gradio
sdk_version: 3.35.2
---
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


---

## Development Checks

- [ ] all content in content/page_js_object.ts
- [ ] reusing maximum components
- [ ] all pages responsive
- [ ] all links working
- [ ] all routes working
- [ ] navbar responsivity working
- [ ] correct content at every page
- [ ] add links on the navbars
- [ ] interactive components on whatsapp page
- [ ] interactive components on pricing page
- [ ] correct currency calculation for currency page
- [ ] add SEO for all pages

---

- Partner Page

- [x] become a partner redirects to /request-demo
- [x] become tech / resell / whitelabel partner redirects to /request-demo

---

- Home Page

- [x] contact us redirects to #footer-top at /
- [x] talk to expert to /request-demo

---

- Navbar

- [ ] talk-to-expert button redirects to /request-demo
- [ ] white navbar (CommonNavbar) links when screen >= xl
- [ ] fix all navbar issues
- [ ] put navbar at every page

---

- request-demo ( Talk to and expert)

- ~~[ ] put correct footer ( FooterBottom ) ~~
- [x] put Navbar

---

- customer-support-solution ( products-1 )

- [x] add navbar
- [x] contact us button link
- [x] try it free button link ( top and bottom 2 places button given)

> [ ] minors : keyFeaturePanel colored heading

---

- enterprise page ( products-2 )

- [x] add navbar
- [x] contact us button link
- [x] fix orange button text is SEE IT IN ACTION, link is /enterprise-demo
- [x] blue section banner button text = REQUEST A DEMO , link is /enterprise-demo
- [x] moobidesk enterprise first panel image not visible

---

- whatsapp solution page

- [x] add navbar
- [x] mid blue banner extract into sep component, it is interactive component. implement that

---

- /live-chat-solution

- [x] add navbar
- [x] mid blue banner try live chat free 

---

- /insurance 

- [x] add navbar

---

- /retail

- [x] add navbar
- [x] contact us button blue

---

/pricing

- [x] add navbar
- [x] contact us buttons link
- [x] currency correction
- [x] discount addition

> changes while implementation

1. Pricing.section_2.discountPercentage new field
2. Pricing.currencyList renamed, and values changed
---

- footer top 

- [x] refactor
