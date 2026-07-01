// Software Engineering IDE Palette: Inspired by high-performance developer tools.
// Built with precise slate/carbon neutrals and a glowing compilation-green accent.

export const lightTheme = {
  background: '#F8FAFC', // Clean, crisp documentation slate white
  color: '#0F172A', // Deep terminal-ink slate
  textMuted: '#64748B', // Code comment gray
  accentColor: '#059669', // Compilation success emerald
  accentColor2: '#0EA5E9', // IDE structural tech-blue
  accentSoft: 'rgba(5, 150, 105, 0.08)',
  glow1: 'rgba(5, 150, 105, 0.10)',
  glow2: 'rgba(14, 165, 233, 0.08)',
  chronoTheme: {
    cardBgColor: '#FFFFFF',
    cardForeColor: '#0F172A',
    titleColor: '#FFFFFF',
  },
  timelineLineColor: '#E2E8F0', // Crisp, razor-thin grid line
  cardBackground: '#FFFFFF', // Clean dashboard card surface
  cardFooterBackground: '#F1F5F9', // Console panel footer
  cardBorderColor: '#E2E8F0', // Defined, structured borders
  navbarBackground: 'rgba(248, 250, 252, 0.75)',
  shadowSm: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
  shadowMd: '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)', // Tight, technical shadows
  navbarTheme: {
    linkColor: '#64748B',
    linkHoverColor: '#0F172A',
    linkActiveColor: '#0F172A',
  },
  bsPrimaryVariant: 'light',
  bsSecondaryVariant: 'dark',
  socialIconBgColor: '#0F172A',
};

export const darkTheme = {
  background: '#0B0F17', // Ultimate deep developer console background
  color: '#F8FAFC', // Crisp, readable variables white
  textMuted: '#94A3B8', // Subdued code token gray
  accentColor: '#10B981', // Laser-sharp cyber mint (compilation green)
  accentColor2: '#06B6D4', // Cyberpunk neon cyan for secondary highlights
  accentSoft: 'rgba(16, 185, 129, 0.12)',
  glow1: 'rgba(16, 185, 129, 0.18)', // Accent neon glows for hardware-like panels
  glow2: 'rgba(6, 182, 212, 0.12)',
  chronoTheme: {
    cardBgColor: '#131C2E', // Elevated panel surface (like a sidebar file tree)
    cardForeColor: '#F8FAFC',
    titleColor: '#0B0F17',
  },
  timelineLineColor: '#1E293B',
  cardBackground: '#131C2E', 
  cardFooterBackground: '#1E293B', // Differentiated terminal buffer bar
  cardBorderColor: 'rgba(16, 185, 129, 0.15)', // Subtle glowing green micro-border
  navbarBackground: 'rgba(11, 15, 23, 0.70)',
  shadowSm: '0 0 0 1px rgba(16, 185, 129, 0.05)', 
  shadowMd: '0 12px 32px -4px rgba(0, 0, 0, 0.60), 0 0 0 1px rgba(255, 255, 255, 0.05)', // High-depth layered dark mode shadow
  navbarTheme: {
    linkColor: '#94A3B8',
    linkHoverColor: '#FFFFFF',
    linkActiveColor: '#FFFFFF',
  },
  bsPrimaryVariant: 'dark',
  bsSecondaryVariant: 'light',
  socialIconBgColor: '#F8FAFC',
};