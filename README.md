# The Peacock Invitational

Polished Vite + TypeScript + Bootstrap single-page site for memorial golf tournament pre-registration.

## Run locally

```bash
npm install
npm run dev
```

## Before launch

Update the Formspree endpoint in `src/main.ts`:

```ts
const EVENT.formspreeEndpoint = 'https://formspree.io/f/your-form_id';
```

## Included assets

- `public/logo.png` - transparent logo for header and hero
- `public/hero-logo.png` - hero logo copy
- `public/logo-on-dark.png` - flat logo on dark background

## Edit candidate dates

Modify the `candidateDates` array in `src/main.ts`.
