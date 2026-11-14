export type Locale = 'en' | 'fr';

const en = {
  siteName: 'Free Password Generator',
  tagline: 'Strong passwords, PINs, and passphrases — 100% in your browser',
  heroLine1: 'Password generation',
  heroLine2: 'should be simple',
  heroLine3: 'and secure.',
  heroSub: 'Generate secrets instantly with',
  privacy: 'Privacy',
  terms: 'Terms',
  about: 'About',
  contact: 'Contact',
  howTo: 'How-to guide',
  strongPw: 'Strong password (no sign-up)',
  byHub: 'More free tools at web-free.site',
  upstream: 'Based on open-source PSWD by Maze (remvze)',
  allLocal: 'Passwords are generated on your device only — never uploaded.',
  language: 'Language',
  tabNormal: 'Password',
  tabDiceware: 'Passphrase',
  tabPin: 'PIN',
  faqTitle: 'Frequently asked questions',
} as const;

const fr: typeof en = {
  siteName: 'Générateur de mot de passe gratuit',
  tagline: 'Mots de passe, PIN et passphrases — 100 % dans le navigateur',
  heroLine1: 'Créer un mot de passe',
  heroLine2: 'devrait être simple',
  heroLine3: 'et sécurisé.',
  heroSub: 'Générez vos secrets avec',
  privacy: 'Confidentialité',
  terms: 'Conditions',
  about: 'À propos',
  contact: 'Contact',
  howTo: 'Guide pratique',
  strongPw: 'Mot de passe fort (sans compte)',
  byHub: 'Plus d’outils gratuits sur web-free.site',
  upstream: 'Basé sur PSWD open source par Maze (remvze)',
  allLocal: 'Les mots de passe sont générés uniquement sur votre appareil.',
  language: 'Langue',
  tabNormal: 'Mot de passe',
  tabDiceware: 'Passphrase',
  tabPin: 'PIN',
  faqTitle: 'Questions fréquentes',
};

const table = { en, fr };

export function t(locale: Locale, key: keyof typeof en): string {
  return table[locale][key];
}