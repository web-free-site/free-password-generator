import { cn } from '@/helpers/styles';
import type { Locale } from '@/i18n/messages';
import { t } from '@/i18n/messages';
import type { GeneratorTab } from '@/lib/generator-types';

import styles from './generator-tabs.module.css';

type GeneratorTabsProps = {
  activeTab: GeneratorTab;
  locale?: Locale;
  onChange: (tab: GeneratorTab) => void;
};

export function GeneratorTabs({ activeTab, locale = 'en', onChange }: GeneratorTabsProps) {
  return (
    <div className={styles.tabs}>
      <button
        className={cn(activeTab === 'normal' && styles.active)}
        onClick={() => onChange('normal')}
      >
        {t(locale, 'tabNormal')}
      </button>
      <button
        className={cn(activeTab === 'diceware' && styles.active)}
        onClick={() => onChange('diceware')}
      >
        {t(locale, 'tabDiceware')}
      </button>
      <button
        className={cn(activeTab === 'pin' && styles.active)}
        onClick={() => onChange('pin')}
      >
        {t(locale, 'tabPin')}
      </button>
    </div>
  );
}
