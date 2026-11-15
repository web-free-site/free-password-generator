import { SITE } from '@/lib/site';

export type Locale = 'en' | 'fr';

export interface PageSeo {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  h1?: string;
  faq?: { q: string; a: string }[];
}

export const HOME_SEO: Record<Locale, PageSeo> = {
  en: {
    path: '/',
    locale: 'en',
    title: 'Free Password Generator — strong passwords, PINs & passphrases',
    description:
      'Generate strong random passwords, secure PINs, and Diceware passphrases in your browser. No sign-up, no server — copy instantly. Entropy from Web Crypto & zxcvbn strength check.',
    h1: 'Free Password Generator',
    faq: [
      {
        q: 'Is this password generator free?',
        a: 'Yes. There is no account, subscription, or server upload. Passwords are generated locally in your browser.',
      },
      {
        q: 'Are my passwords sent to a server?',
        a: 'No. Generation uses your device only (Web Crypto and in-page libraries). Nothing leaves your browser unless you copy it yourself.',
      },
      {
        q: 'What can I generate?',
        a: 'Random character passwords with custom length and symbol sets, numeric PINs, and memorable Diceware-style passphrases.',
      },
      {
        q: 'How do I pick a strong password?',
        a: 'Use at least 14–16 characters, mix character types, or choose a long passphrase with six or more words. Avoid reusing passwords across sites.',
      },
    ],
  },
  fr: {
    path: '/fr/',
    locale: 'fr',
    title: 'Générateur de mot de passe gratuit — fort, PIN & passphrase',
    description:
      'Créez des mots de passe robustes, des codes PIN et des passphrases Diceware dans votre navigateur. Sans inscription, 100 % local.',
    h1: 'Générateur de mot de passe gratuit',
    faq: [
      {
        q: 'Ce générateur est-il gratuit ?',
        a: 'Oui. Pas de compte ni d’abonnement. Les mots de passe sont créés sur votre appareil.',
      },
      {
        q: 'Mes mots de passe sont-ils envoyés en ligne ?',
        a: 'Non. Tout se fait dans le navigateur ; rien n’est transmis à nos serveurs.',
      },
      {
        q: 'Quels types de secrets puis-je créer ?',
        a: 'Mots de passe aléatoires, PIN numériques et passphrases de type Diceware.',
      },
      {
        q: 'Comment choisir un mot de passe solide ?',
        a: 'Visez 14 caractères ou plus, variez les types de symboles, ou utilisez une longue passphrase de plusieurs mots.',
      },
    ],
  },
};

export const LONG_TAIL_PAGES: PageSeo[] = [
  {
    path: '/strong-password-generator-no-signup/',
    locale: 'en',
    title: 'Strong password generator — no sign-up, in the browser',
    description:
      'Create strong unique passwords instantly without an account. Client-side Web Crypto randomness, customizable length, symbols, and live strength feedback.',
    h1: 'Strong password generator with no sign-up',
    faq: [
      {
        q: 'Why use a browser-based generator?',
        a: 'Secrets never travel over the network during generation, which reduces exposure compared with server-side tools.',
      },
      {
        q: 'How long should a password be?',
        a: 'For most accounts, 14 characters or more with mixed character types is a solid default.',
      },
    ],
  },
  {
    path: '/how-to-create-secure-passwords/',
    locale: 'en',
    title: 'How to create secure passwords — practical guide',
    description:
      'Step-by-step guide: length, randomness, passphrases vs passwords, PIN rules, and how to use our free generator safely in the browser.',
    h1: 'How to create secure passwords',
    faq: [
      {
        q: 'Passphrase or random password?',
        a: 'Passphrases are easier to type and remember; random strings excel when pasted from a manager. Both work when they are long and unique.',
      },
      {
        q: 'Should I reuse passwords?',
        a: 'No. Use a unique password (or passphrase) per site and store them in a password manager.',
      },
    ],
  },
  {
    path: "/how-to-create-a-strong-passphrase/",
    locale: 'en',
    title: "How to create a strong passphrase",
    description: "Build a long, random word-based passphrase in your browser with Free Password Generator, and store it in a password manager rather than reusing it.",
    h1: "How to create a strong passphrase",
    faq: [{"q": "Use several random words, not a famous quote?", "a": "A line from a book or a song is easier to guess than words drawn at random. Use the passphrase option in Free Password Generator rather than inventing a phrase from memory."}, {"q": "Prefer more words over clever substitutions?", "a": "Adding one more random word usually helps more than replacing letters with similar digits in a short phrase."}],
  },
  {
    path: "/how-to-generate-a-wifi-password/",
    locale: 'en',
    title: "How to generate a Wi-Fi password or PIN",
    description: "Create a long random Wi-Fi password or a numeric PIN in your browser with Free Password Generator, then store it safely and update the router.",
    h1: "How to generate a Wi-Fi password",
    faq: [{"q": "Generate a long random password?", "a": "Open Free Password Generator and create a high-length password. If the router rejects some symbols, turn those character types off and generate again."}, {"q": "Copy it into a password manager first?", "a": "Save the new password before you change the router, so you do not lock yourself out."}],
  },
];

export function canonicalUrl(path: string): string {
  const normalized = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
  return `${SITE.canonicalHost}${normalized === '/' ? '/' : normalized}`;
}

export function jsonLdWebApp(locale: Locale): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE.name,
    url: SITE.canonicalHost,
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    inLanguage: locale === 'fr' ? 'fr' : 'en',
    description: HOME_SEO[locale].description,
  };
}

export function jsonLdFaq(faq: { q: string; a: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}