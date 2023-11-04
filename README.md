This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) through the following command:  
`podman run --rm -it -v ${PWD}:/nextjs-demo node:20-alpine3.17 npx create-next-app@latest nextjs-demo`  
Serve the app with:  
`podman run --rm --name nextjs -p 3000:3000 -w /nextjs-demo -v ${PWD}:/nextjs-demo node:20-alpine3.17 npm run dev`  

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### end to end tests
End to end tests are installed and configured through Playwright:
```
npm init playwright@latest
```
Tests files are in the `e2e/` folder. Playwright configuration file is `/playwright.config.ts`.
#### run tests
Tests are performed against the URL defined by the `BASE_URL` environment variable. If the variable is not defined then `http://host.containers.internal:3000` is used which is resolved to the host running a podman container.
##### UI mode
To run the tests in UI mode:
```
podman run --rm -it -p 8080:8080 -w /nextjs-demo -v ${PWD}:/nextjs-demo mcr.microsoft.com/playwright:v1.39.0-jammy npx playwright test --ui-host=0.0.0.0 --ui-port=8080
```
##### headless mode
To run the tests without opening a browser:
```
podman run --rm -it -p 8080:8080 -w /nextjs-demo -v ${PWD}:/nextjs-demo mcr.microsoft.com/playwright:v1.39.0-jammy npx playwright test
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
