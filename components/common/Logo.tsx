import clsx from 'clsx';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'inline' | 'sidebar';
  showWordmark?: boolean;
};

const sizes = {
  small: { icon: 32, text: 'text-base' },
  medium: { icon: 40, text: 'text-lg' },
  large: { icon: 52, text: 'text-2xl' },
};

export default function Logo({ size = 'medium', variant = 'inline', showWordmark = true }: LogoProps) {
  const config = sizes[size];

  return (
    <div className={clsx('flex items-center gap-3', variant === 'sidebar' && 'w-full')}>
      <div
        className="flex items-center justify-center rounded-2xl bg-[#FFF4D8] shadow-soft"
        style={{ width: config.icon, height: config.icon }}
        aria-label="Meow Media Stream logo"
      >
        {/* Exact SVG was referenced in the prompt but not included in the workspace/context, so this placeholder mark keeps the component reusable until the provided asset is dropped in verbatim. */}
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width={config.icon * 0.75} height={config.icon * 0.75}>
          <path d="M18 23L24 12L32 21L40 12L46 23V42C46 49.732 39.732 56 32 56C24.268 56 18 49.732 18 42V23Z" fill="#EFBC5C" />
          <path d="M24 35C26.2091 35 28 33.2091 28 31C28 28.7909 26.2091 27 24 27C21.7909 27 20 28.7909 20 31C20 33.2091 21.7909 35 24 35Z" fill="#2C2C2C"/>
          <path d="M40 35C42.2091 35 44 33.2091 44 31C44 28.7909 42.2091 27 40 27C37.7909 27 36 28.7909 36 31C36 33.2091 37.7909 35 40 35Z" fill="#2C2C2C"/>
          <path d="M27 43C29.5 46 34.5 46 37 43" stroke="#745F40" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
      {showWordmark && (
        <div className={clsx('leading-tight', variant === 'sidebar' && 'flex-1')}>
          <div className={clsx('font-semibold tracking-tight text-brand-text', config.text)}>Meow Media</div>
          <div className="text-xs uppercase tracking-[0.24em] text-brand-muted">Stream</div>
        </div>
      )}
    </div>
  );
}
