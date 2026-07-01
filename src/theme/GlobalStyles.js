import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colour (theme-driven) */
    --bg: ${({ theme }) => theme.background};
    --text: ${({ theme }) => theme.color};
    --text-muted: ${({ theme }) => theme.textMuted};
    --accent: ${({ theme }) => theme.accentColor};
    --accent-2: ${({ theme }) => theme.accentColor2};
    --accent-soft: ${({ theme }) => theme.accentSoft};
    --surface: ${({ theme }) => theme.cardBackground};
    --surface-2: ${({ theme }) => theme.cardFooterBackground};
    --border: ${({ theme }) => theme.cardBorderColor};
    --navbar-bg: ${({ theme }) => theme.navbarBackground};
    --timeline-line: ${({ theme }) => theme.timelineLineColor};
    --gradient: linear-gradient(135deg, var(--accent), var(--accent-2));

    /* Elevation */
    --shadow-sm: ${({ theme }) => theme.shadowSm};
    --shadow-md: ${({ theme }) => theme.shadowMd};

    /* Spacing scale */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.5rem;
    --space-6: 2rem;
    --space-7: 3rem;
    --space-8: 4rem;

    /* Radius */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;

    /* Motion */
    --ease: cubic-bezier(0.16, 1, 0.3, 1);
    --dur: 0.2s;

    /* Type - The Ultimate Developer Tooling Font Stack */
    --font-sans: 'Geist', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-display: 'Geist', 'Inter', -apple-system, sans-serif;
    --font-mono: 'Geist Mono', 'JetBrains Mono', Menlo, Monaco, Consolas, monospace;
  }

  html {
    scrollbar-color: var(--border) transparent;
    background-color: var(--bg);
  }

  body {
    --bs-body-bg: ${({ theme }) => theme.background};
    --bs-body-color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
    background-image:
      radial-gradient(48rem 48rem at 100% -8%, ${({ theme }) => theme.glow1}, transparent 65%),
      radial-gradient(42rem 42rem at -10% 8%, ${({ theme }) => theme.glow2}, transparent 60%),
      radial-gradient(var(--border) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 24px 24px;
    background-attachment: fixed;
    background-repeat: no-repeat, no-repeat, repeat;
    
    color: ${({ theme }) => theme.color};
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Letter spacing for crisp, modern software UI readability */
    letter-spacing: -0.01em; 
    line-height: 1.6;
    
    transition: background-color var(--dur) var(--ease), color var(--dur) var(--ease);
  }

  /* Typography Polish Rules for Bento Layouts */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--text);
    /* Tighter tracking on display text gives it an intentional, designed look */
    letter-spacing: -0.03em; 
    line-height: 1.2;
    margin-bottom: var(--space-2);
  }

  code, pre, kbd, samp {
    font-family: var(--font-mono);
    /* Monospace elements need tracking opened up slightly to read well inside code chips */
    letter-spacing: 0.02em; 
    font-size: 0.9em;
  }

  a {
    color: var(--accent);
    text-decoration: none;
    transition: color var(--dur) var(--ease);
  }

  a:hover {
    color: var(--accent-2);
  }

  ::selection {
    background: var(--accent);
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: var(--radius-sm);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;