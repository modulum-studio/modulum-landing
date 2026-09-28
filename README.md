# Modulum Studio

Personal site for Modulum Studio: a space where I build software out of curiosity, from mobile prototypes to product ideas.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The form sends messages through [Web3Forms](https://web3forms.com). Create a form there, then add its access key to `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key
```

The key is public by design. Add the same variable to the hosting environment and allow the production domain in the Web3Forms dashboard.

## Languages

The site is available in English and Spanish. The language is detected from the browser and remembered in `localStorage`. Copy lives in `src/i18n/en.ts` and `src/i18n/es.ts`.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint               |
