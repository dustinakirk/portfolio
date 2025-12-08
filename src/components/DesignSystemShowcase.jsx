import { useEffect, useMemo, useState } from 'react'

const FONT_STACKS = [
  {
    label: 'Inter',
    value: '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  {
    label: 'Space Grotesk',
    value: '"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  {
    label: 'IBM Plex Sans',
    value: '"IBM Plex Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  {
    label: 'Playfair Display',
    value: '"Playfair Display", "Inter", Georgia, serif'
  },
  {
    label: 'Spline Sans',
    value: '"Spline Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  }
]

const DEFAULT_SEEDS = {
  brandColor: '#5B67FF',
  surfaceColor: '#F5F7FB',
  fontFamily: FONT_STACKS[0].value,
  baseFontSize: 16,
  scaleRatio: 1.22,
  radius: 18,
  spacing: 12
}

const PREVIEW_COMPANIES = [
  {
    name: 'Payverge',
    segment: 'Payments Dig · Fintech: Merchant',
    badge: 'Home Services',
    score: 12,
    tone: 'brand'
  },
  {
    name: 'Paylocity',
    segment: 'Payments Dig · Fintech: Merchant',
    badge: 'Finance',
    score: 43,
    tone: 'focus',
    active: true
  },
  {
    name: 'Flowtap',
    segment: 'Payments Dig · Fintech: Merchant',
    badge: 'Food & Bev',
    score: 23,
    tone: 'warning'
  },
  {
    name: 'Adyen',
    segment: 'Payments Dig · Fintech: Merchant',
    badge: 'Finance',
    score: 61,
    tone: 'brand'
  },
  {
    name: 'Granitek',
    segment: 'Payments Dig · Fintech: Merchant',
    badge: 'Construction',
    score: -28,
    tone: 'danger'
  },
  {
    name: 'Vitavera',
    segment: 'Payments Dig · Fintech: Merchant',
    badge: 'Healthcare',
    score: 32,
    tone: 'brand'
  },
  {
    name: 'Veloura',
    segment: 'Streetwear fashion · Merchant',
    badge: 'Fashion',
    score: 78,
    tone: 'success'
  },
  {
    name: 'ForgeBuilt',
    segment: 'Payments Dig · Fintech: Merchant',
    badge: 'Construction',
    score: 8,
    tone: 'neutral'
  }
]

const PREVIEW_NAV_ITEMS = [
  { label: 'Companies', abbreviation: 'Co', active: true },
  { label: 'Insights', abbreviation: 'In' },
  { label: 'Segments', abbreviation: 'Se' },
  { label: 'Reports', abbreviation: 'Rp' },
  { label: 'Settings', abbreviation: 'St' }
]

const PREVIEW_METRICS = [
  { label: 'Overall Score', value: '43', trend: '+2%', fill: 43 },
  { label: 'Revenue Goal Attainment', value: '87%', trend: '+5%', fill: 87 },
  { label: 'Forecast this month', value: '1.4M', trend: '-1%', fill: 64 }
]

const PREVIEW_TABS = ['Overview', 'Analyze', 'Topics', 'Impressions', 'Customers', 'Competitors']

const PREVIEW_FILTERS = ['Total Revenue', 'Customer Concentration', 'Watchlist', 'Share']

const PREVIEW_TABLE_YEARS = ['2019', '2020', '2021', '2022', '2023']

const PREVIEW_TIMEFRAMES = ['1M', '6M', 'YTD', '5Y', 'All']

const PREVIEW_TABLE_ROWS = [
  {
    name: 'Goldman Sachs Group',
    values: [
      { value: '22%', delta: '-0.21%' },
      { value: '11%', delta: '-0.50%' },
      { value: '7%', delta: '-0.28%' },
      { value: '15%', delta: '+0.55%' },
      { value: '16%', delta: '+0.06%' }
    ]
  },
  {
    name: 'Kimberly-Clark',
    values: [
      { value: '14%', delta: '+0.21%' },
      { value: '5%', delta: '+3.11%' },
      { value: '7%', delta: '-0.28%' },
      { value: '9%', delta: '+0.21%' },
      { value: '13%', delta: '+0.41%' }
    ]
  },
  {
    name: 'J.B. Hunt Transport Services',
    values: [
      { value: '18%', delta: '+0.16%' },
      { value: '25%', delta: '-0.13%' },
      { value: '15%', delta: '-0.18%' },
      { value: '11%', delta: '-0.18%' },
      { value: '20%', delta: '+4.20%' }
    ]
  },
  {
    name: 'Constellation Brands',
    values: [
      { value: '29%', delta: '+0.23%' },
      { value: '7%', delta: '-0.28%' },
      { value: '58%', delta: '+0.64%' },
      { value: '30%', delta: '-0.18%' },
      { value: '36%', delta: '+0.19%' }
    ]
  },
  {
    name: 'Regions Financial Corporation',
    values: [
      { value: '11%', delta: '-0.50%' },
      { value: '12%', delta: '+0.18%' },
      { value: '15%', delta: '+0.55%' },
      { value: '16%', delta: '+0.06%' },
      { value: '16%', delta: '+0.06%' }
    ]
  }
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

function hexToRgb(hex) {
  if (!hex) return null
  let normalized = hex.replace('#', '')
  if (![3, 6].includes(normalized.length)) return null
  if (normalized.length === 3) {
    normalized = normalized
      .split('')
      .map((char) => `${char}${char}`)
      .join('')
  }
  const intVal = parseInt(normalized, 16)
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255
  }
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b]
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('')}`
}

function rgbToHsl(r, g, b) {
  const rNorm = r / 255
  const gNorm = g / 255
  const bNorm = b / 255
  const max = Math.max(rNorm, gNorm, bNorm)
  const min = Math.min(rNorm, gNorm, bNorm)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0)
        break
      case gNorm:
        h = (bNorm - rNorm) / d + 2
        break
      default:
        h = (rNorm - gNorm) / d + 4
    }
    h /= 6
  }

  return { h: h * 360, s, l }
}

function hslToRgb(h, s, l) {
  const hue = h / 360
  if (s === 0) {
    const gray = Math.round(l * 255)
    return { r: gray, g: gray, b: gray }
  }

  const hueToRgb = (p, q, t) => {
    let temp = t
    if (temp < 0) temp += 1
    if (temp > 1) temp -= 1
    if (temp < 1 / 6) return p + (q - p) * 6 * temp
    if (temp < 1 / 2) return q
    if (temp < 2 / 3) return p + (q - p) * (2 / 3 - temp) * 6
    return p
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q

  const r = Math.round(hueToRgb(p, q, hue + 1 / 3) * 255)
  const g = Math.round(hueToRgb(p, q, hue) * 255)
  const b = Math.round(hueToRgb(p, q, hue - 1 / 3) * 255)

  return { r, g, b }
}

function adjustLightness(hex, amount) {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b)
  const next = hslToRgb(h, s, clamp(l + amount, 0, 1))
  return rgbToHex(next.r, next.g, next.b)
}

function shiftHue(hex, degrees) {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b)
  const next = hslToRgb((h + degrees + 360) % 360, s, l)
  return rgbToHex(next.r, next.g, next.b)
}

function mixColors(a, b, weight) {
  const colorA = hexToRgb(a)
  const colorB = hexToRgb(b)
  if (!colorA || !colorB) return a
  const w = clamp(weight, 0, 1)
  const r = Math.round(colorA.r * (1 - w) + colorB.r * w)
  const g = Math.round(colorA.g * (1 - w) + colorB.g * w)
  const bChannel = Math.round(colorA.b * (1 - w) + colorB.b * w)
  return rgbToHex(r, g, bChannel)
}

function surfaceColorWithFallback(color) {
  return hexToRgb(color) ? color : '#ffffff'
}

function luminance(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return 0
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((channel) => {
    const normalized = channel / 255
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function getReadableTextColor(hex) {
  return luminance(hex) > 0.53 ? '#0B1220' : '#F9FAFC'
}

function createShadow(hex) {
  const shadowBase = hexToRgb(hex) ?? { r: 91, g: 103, b: 255 }
  return `0 24px 55px rgba(${shadowBase.r}, ${shadowBase.g}, ${shadowBase.b}, 0.16)`
}

function px(value) {
  return `${Math.round(value)}px`
}

function generateTokens(seeds) {
  const primary = seeds.brandColor
  const accent = shiftHue(primary, 28)
  const primaryStrong = adjustLightness(primary, -0.18)
  const primarySoft = adjustLightness(primary, 0.18)
  const primarySubtle = mixColors(primary, '#ffffff', 0.75)

  const success = shiftHue(primary, 115)
  const successStrong = adjustLightness(success, -0.18)
  const successSoft = mixColors(success, surfaceColorWithFallback(seeds.surfaceColor), 0.65)

  const warning = shiftHue(primary, 55)
  const warningStrong = adjustLightness(warning, -0.1)
  const warningSoft = mixColors(warning, '#ffffff', 0.72)

  const danger = shiftHue(primary, -115)
  const dangerStrong = adjustLightness(danger, -0.15)
  const dangerSoft = mixColors(danger, '#ffffff', 0.7)

  const surface = seeds.surfaceColor
  const surfaceRaised = mixColors(surface, primary, 0.08)
  const surfaceMuted = mixColors(surface, '#ffffff', 0.12)
  const previewBackground = mixColors(surface, '#ffffff', 0.45)

  const textPrimary = getReadableTextColor(surface)
  const textMuted = mixColors(textPrimary, surface, 0.6)
  const onPrimary = getReadableTextColor(primaryStrong)
  const borderColor = mixColors(surface, primaryStrong, 0.18)
  const focus = mixColors(primaryStrong, '#000000', 0.2)
  const borderWidth = Math.max(1, Math.round(seeds.spacing / 8))

  const spacing = {
    xs: Math.max(4, seeds.spacing * 0.5),
    sm: seeds.spacing,
    md: seeds.spacing * 1.5,
    lg: seeds.spacing * 2,
    xl: seeds.spacing * 3
  }

  const base = seeds.baseFontSize
  const ratio = seeds.scaleRatio
  const typeScale = {
    h1: base * Math.pow(ratio, 4),
    h2: base * Math.pow(ratio, 3),
    h3: base * Math.pow(ratio, 2.25),
    h4: base * Math.pow(ratio, 1.6),
    h5: base * Math.pow(ratio, 1.2),
    h6: base * Math.pow(ratio, 0.8),
    body: base,
    label: base * 0.85,
    mono: base * 0.9
  }

  return {
    primary,
    primaryStrong,
    primarySoft,
    primarySubtle,
    accent,
    surface,
    surfaceRaised,
    surfaceMuted,
    previewBackground,
    textPrimary,
    textMuted,
    onPrimary,
    borderColor,
    focus,
    borderWidth,
    spacing,
    typeScale,
    success,
    successStrong,
    successSoft,
    warning,
    warningStrong,
    warningSoft,
    danger,
    dangerStrong,
    dangerSoft,
    shadow: createShadow(primary)
  }
}

function formatCssVariables(tokens, seeds) {
  return `:root {
  --ds-primary: ${tokens.primary};
  --ds-primary-strong: ${tokens.primaryStrong};
  --ds-primary-soft: ${tokens.primarySoft};
  --ds-accent: ${tokens.accent};
  --ds-surface: ${tokens.surface};
  --ds-surface-elevated: ${tokens.surfaceRaised};
  --ds-surface-muted: ${tokens.surfaceMuted};
  --ds-text: ${tokens.textPrimary};
  --ds-text-muted: ${tokens.textMuted};
  --ds-success: ${tokens.success};
  --ds-success-strong: ${tokens.successStrong};
  --ds-success-soft: ${tokens.successSoft};
  --ds-warning: ${tokens.warning};
  --ds-warning-strong: ${tokens.warningStrong};
  --ds-warning-soft: ${tokens.warningSoft};
  --ds-danger: ${tokens.danger};
  --ds-danger-strong: ${tokens.dangerStrong};
  --ds-danger-soft: ${tokens.dangerSoft};
  --ds-radius: ${px(seeds.radius)};
  --ds-space-sm: ${px(tokens.spacing.sm)};
  --ds-space-md: ${px(tokens.spacing.md)};
  --ds-font-body: ${seeds.fontFamily};
}`
}

function DesignSystemShowcase() {
  const [seeds, setSeeds] = useState(DEFAULT_SEEDS)
  const [activeTab, setActiveTab] = useState('preview')

  // Set page title and meta tags for SEO
  useEffect(() => {
    const pageTitle = 'Design System Showcase | Dustin Kirk';
    const pageDescription = 'Comprehensive design system documentation and component library showcasing systematic design approaches for enterprise applications.';
    const pageUrl = 'https://dustinkirk.com/design_system';
    const pageImage = 'https://dustinkirk.com/images/dustin_kirk_avatar.png';

    // Set document title
    document.title = pageTitle;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescription);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = pageDescription;
      document.head.appendChild(metaDesc);
    }

    // Helper to set or create meta tags
    const setMetaTag = (attribute, value, content) => {
      let tag = document.querySelector(`meta[${attribute}="${value}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    // Open Graph tags
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDescription);
    setMetaTag('property', 'og:url', pageUrl);
    setMetaTag('property', 'og:image', pageImage);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Dustin Kirk - Principal Product Designer');

    // Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDescription);
    setMetaTag('name', 'twitter:image', pageImage);

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', pageUrl);
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = pageUrl;
      document.head.appendChild(canonical);
    }
  }, []);

  const tokens = useMemo(() => generateTokens(seeds), [seeds])
  const cssDefinition = useMemo(() => formatCssVariables(tokens, seeds), [tokens, seeds])

  const tonePalette = useMemo(
    () => ({
      brand: {
        background: tokens.primarySubtle,
        color: tokens.primaryStrong
      },
      focus: {
        background: mixColors(tokens.primary, '#ffffff', 0.55),
        color: tokens.primaryStrong
      },
      warning: {
        background: tokens.warningSoft,
        color: tokens.warningStrong
      },
      danger: {
        background: tokens.dangerSoft,
        color: tokens.dangerStrong
      },
      success: {
        background: tokens.successSoft,
        color: tokens.successStrong
      },
      neutral: {
        background: tokens.surfaceMuted,
        color: tokens.textMuted
      }
    }),
    [tokens]
  )

  const getDeltaColor = (delta) => (delta.trim().startsWith('-') ? tokens.dangerStrong : tokens.successStrong)
  const getDeltaBackground = (delta) => (delta.trim().startsWith('-') ? tokens.dangerSoft : tokens.successSoft)

  const colorSystem = useMemo(
    () => [
      { name: 'Primary', value: tokens.primary, usage: 'CTAs, emphasis' },
      { name: 'Primary Strong', value: tokens.primaryStrong, usage: 'Pressed & borders' },
      { name: 'Primary Soft', value: tokens.primarySoft, usage: 'Hover states' },
      { name: 'Primary Subtle', value: tokens.primarySubtle, usage: 'Background tints' },
      { name: 'Accent', value: tokens.accent, usage: 'Supportive highlights' },
      { name: 'Surface', value: tokens.surface, usage: 'Canvas base' },
      { name: 'Surface Elevated', value: tokens.surfaceRaised, usage: 'Cards & shells' },
      { name: 'Surface Muted', value: tokens.surfaceMuted, usage: 'Sub-panels' },
      { name: 'Focus', value: tokens.focus, usage: 'Focus rings' },
      { name: 'Border', value: tokens.borderColor, usage: 'Lines & inputs' },
      { name: 'Text', value: tokens.textPrimary, usage: 'Primary text' },
      { name: 'Text Muted', value: tokens.textMuted, usage: 'Secondary text' }
    ],
    [tokens]
  )

  const typographyScale = useMemo(
    () => [
      { token: '--ds-type-h1', label: 'Display / H1', sample: 'We craft futures', size: tokens.typeScale.h1 },
      { token: '--ds-type-h2', label: 'Hero / H2', sample: 'Design systems at velocity', size: tokens.typeScale.h2 },
      { token: '--ds-type-h3', label: 'Section / H3', sample: 'Structural rhythm', size: tokens.typeScale.h3 },
      { token: '--ds-type-h4', label: 'Eyebrow / H4', sample: 'Interface grammar', size: tokens.typeScale.h4 },
      { token: '--ds-type-h5', label: 'Title / H5', sample: 'Component anatomy', size: tokens.typeScale.h5 },
      { token: '--ds-type-h6', label: 'Label / H6', sample: 'Micro narratives', size: tokens.typeScale.h6 },
      { token: '--ds-type-body', label: 'Body', sample: 'Readable, balanced copy that scales across surfaces.', size: tokens.typeScale.body },
      { token: '--ds-type-label', label: 'UI Label', sample: 'Support text & captions', size: tokens.typeScale.label },
      { token: '--ds-type-mono', label: 'Monospace', sample: 'code-block-value', size: tokens.typeScale.mono }
    ],
    [tokens]
  )

  const spacingPairs = useMemo(
    () => Object.entries(tokens.spacing).map(([key, value]) => ({ key, value })),
    [tokens.spacing]
  )

  const tabs = [
    { key: 'preview', label: 'Website Preview' },
    { key: 'system', label: 'Design System' }
  ]

  const previewStyles = useMemo(
    () => ({
      '--ds-primary': tokens.primary,
      '--ds-primary-strong': tokens.primaryStrong,
      '--ds-primary-soft': tokens.primarySoft,
      '--ds-primary-subtle': tokens.primarySubtle,
      '--ds-accent': tokens.accent,
      '--ds-surface': tokens.surface,
      '--ds-surface-elevated': tokens.surfaceRaised,
      '--ds-surface-muted': tokens.surfaceMuted,
      '--ds-text': tokens.textPrimary,
      '--ds-text-muted': tokens.textMuted,
      '--ds-on-primary': tokens.onPrimary,
      '--ds-focus': tokens.focus,
      '--ds-border': tokens.borderColor,
      '--ds-border-width': `${tokens.borderWidth}px`,
      '--ds-radius': `${seeds.radius}px`,
      '--ds-radius-lg': `${Math.round(seeds.radius * 1.6)}px`,
      '--ds-radius-xl': `${Math.round(seeds.radius * 2.2)}px`,
      '--ds-spacing-xs': `${tokens.spacing.xs}px`,
      '--ds-spacing-sm': `${tokens.spacing.sm}px`,
      '--ds-spacing-md': `${tokens.spacing.md}px`,
      '--ds-spacing-lg': `${tokens.spacing.lg}px`,
      '--ds-spacing-xl': `${tokens.spacing.xl}px`,
      '--ds-type-h1': `${tokens.typeScale.h1}px`,
      '--ds-type-h2': `${tokens.typeScale.h2}px`,
      '--ds-type-h3': `${tokens.typeScale.h3}px`,
      '--ds-type-h4': `${tokens.typeScale.h4}px`,
      '--ds-type-h5': `${tokens.typeScale.h5}px`,
      '--ds-type-h6': `${tokens.typeScale.h6}px`,
      '--ds-type-body': `${tokens.typeScale.body}px`,
      '--ds-type-label': `${tokens.typeScale.label}px`,
      '--ds-type-mono': `${tokens.typeScale.mono}px`,
      '--ds-shadow': tokens.shadow,
      '--ds-success': tokens.success,
      '--ds-success-strong': tokens.successStrong,
      '--ds-success-soft': tokens.successSoft,
      '--ds-warning': tokens.warning,
      '--ds-warning-strong': tokens.warningStrong,
      '--ds-warning-soft': tokens.warningSoft,
      '--ds-danger': tokens.danger,
      '--ds-danger-strong': tokens.dangerStrong,
      '--ds-danger-soft': tokens.dangerSoft,
      fontFamily: seeds.fontFamily,
      fontSize: `${seeds.baseFontSize}px`,
      background: tokens.previewBackground,
      color: 'var(--ds-text)',
      borderColor: 'var(--ds-border)',
      borderRadius: 'var(--ds-radius-xl)',
      boxShadow: 'var(--ds-shadow)'
    }),
    [tokens, seeds]
  )

  const handleSeedChange = (key) => (event) => {
    const { value } = event.target
    setSeeds((prev) => {
      if (key === 'baseFontSize' || key === 'radius' || key === 'spacing') {
        return { ...prev, [key]: Number(value) }
      }
      if (key === 'scaleRatio') {
        return { ...prev, [key]: Number(value) }
      }
      return { ...prev, [key]: value }
    })
  }

  return (
    <main id="ds-main-container" className="min-h-screen bg-slate-950 text-slate-100 ds-main">
      <section id="ds-content-wrapper" className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-20 ds-wrapper">
        <header id="ds-page-header" className="max-w-3xl space-y-4 ds-header">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Design System Forge</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Define a handful of control components &amp; let the rest fall in line
          </h1>
          <p className="text-base text-slate-400">
            Like drawing the letters “n” and “o” first for a typeface, these seeds lock in your brand DNA.
            Adjust a few sliders to describe the button, text, and surface primitives—everything in the preview pane then
            inherits those decisions.
          </p>
        </header>

        <aside id="ds-seed-controls-panel" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur mb-8 ds-controls-panel">
          <div id="ds-seed-header" className="mb-6">
            <h2 id="ds-seed-title" className="text-lg font-semibold text-white">Seed Controls</h2>
            <p className="mt-1 text-sm text-slate-300">
              Minimal inputs that describe the "control characters" of your system. Everything else is inferred.
            </p>
          </div>
          <div id="ds-seed-layout" className="grid gap-6 lg:grid-cols-2">
            {/* Left column - Seed Controls */}
            <div id="ds-seed-inputs-grid" className="grid grid-cols-2 gap-4">
              <label id="ds-seed-primary-color-label" className="flex flex-col gap-2 text-sm ds-seed-control">
                <span className="font-medium text-white">Primary hue</span>
                <input
                  id="ds-seed-primary-color-input"
                  type="color"
                  value={seeds.brandColor}
                  onChange={handleSeedChange('brandColor')}
                  className="h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 ds-color-input"
                />
                <span className="text-xs uppercase tracking-wide text-slate-400">{seeds.brandColor.toUpperCase()}</span>
              </label>

              <label id="ds-seed-surface-color-label" className="flex flex-col gap-2 text-sm ds-seed-control">
                <span className="font-medium text-white">Base surface</span>
                <input
                  id="ds-seed-surface-color-input"
                  type="color"
                  value={seeds.surfaceColor}
                  onChange={handleSeedChange('surfaceColor')}
                  className="h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 ds-color-input"
                />
                <span className="text-xs uppercase tracking-wide text-slate-400">{seeds.surfaceColor.toUpperCase()}</span>
              </label>

              <label id="ds-seed-typeface-label" className="flex flex-col gap-2 text-sm col-span-2 ds-seed-control">
                <span className="font-medium text-white">Typeface</span>
                <select
                  id="ds-seed-typeface-select"
                  value={seeds.fontFamily}
                  onChange={handleSeedChange('fontFamily')}
                  className="h-10 w-full rounded-xl border border-white/10 bg-slate-900 px-3 text-sm text-slate-200 ds-select-input"
                >
                  {FONT_STACKS.map((font) => (
                    <option key={font.label} value={font.value} className="bg-slate-900 text-slate-200">
                      {font.label}
                    </option>
                  ))}
                </select>
              </label>

              <label id="ds-seed-radius-label" className="flex flex-col gap-2 text-sm ds-seed-control">
                <span className="font-medium text-white">Corners</span>
                <input
                  id="ds-seed-radius-slider"
                  type="range"
                  min="0"
                  max="36"
                  step="2"
                  value={seeds.radius}
                  onChange={handleSeedChange('radius')}
                  className="w-full accent-slate-100 ds-range-input"
                />
                <span className="text-xs text-slate-400">{Math.round(seeds.radius)}px</span>
              </label>

              <label id="ds-seed-spacing-label" className="flex flex-col gap-2 text-sm ds-seed-control">
                <span className="font-medium text-white">Spacing</span>
                <input
                  id="ds-seed-spacing-slider"
                  type="range"
                  min="6"
                  max="24"
                  step="1"
                  value={seeds.spacing}
                  onChange={handleSeedChange('spacing')}
                  className="w-full accent-slate-100 ds-range-input"
                />
                <span className="text-xs text-slate-400">{Math.round(seeds.spacing)}px</span>
              </label>

              <label id="ds-seed-scale-label" className="flex flex-col gap-2 text-sm ds-seed-control">
                <span className="font-medium text-white">Type scale</span>
                <input
                  id="ds-seed-scale-slider"
                  type="range"
                  min="1.1"
                  max="1.35"
                  step="0.01"
                  value={seeds.scaleRatio}
                  onChange={handleSeedChange('scaleRatio')}
                  className="w-full accent-slate-100 ds-range-input"
                />
                <span className="text-xs text-slate-400">{seeds.scaleRatio.toFixed(2)}×</span>
              </label>

              <label id="ds-seed-fontsize-label" className="flex flex-col gap-2 text-sm ds-seed-control">
                <span className="font-medium text-white">Base size</span>
                <input
                  id="ds-seed-fontsize-slider"
                  type="range"
                  min="14"
                  max="20"
                  step="1"
                  value={seeds.baseFontSize}
                  onChange={handleSeedChange('baseFontSize')}
                  className="w-full accent-slate-100 ds-range-input"
                />
                <span className="text-xs text-slate-400">{Math.round(seeds.baseFontSize)}px</span>
              </label>
            </div>

            {/* Right column - Control Components */}
            <div
              id="ds-control-components-preview"
              className="border p-6 h-fit ds-control-preview"
              style={{
                '--ds-control-radius': `${seeds.radius}px`,
                borderColor: tokens.borderColor,
                color: tokens.textPrimary,
                background: tokens.surfaceMuted,
                fontFamily: seeds.fontFamily,
                borderRadius: `${seeds.radius * 1.4}px`
              }}
            >
              <p
                className="text-xs font-medium uppercase tracking-[0.3em]"
                style={{ color: tokens.textMuted }}
              >
                Control Components
              </p>
              <div id="ds-control-components-list" className="mt-4 flex flex-col gap-4">
                <button
                  id="ds-control-primary-button"
                  type="button"
                  className="w-full border text-sm font-semibold shadow-sm transition ds-sample-button"
                  style={{
                    borderRadius: 'var(--ds-control-radius)',
                    background: tokens.primary,
                    color: tokens.onPrimary,
                    borderColor: tokens.primaryStrong,
                    padding: `${tokens.spacing.xs}px ${tokens.spacing.sm}px`,
                    boxShadow: tokens.shadow
                  }}
                >
                  Primary Button
                </button>
                <div
                  id="ds-control-text-sample"
                  className="rounded-xl border p-3 text-sm ds-sample-text"
                  style={{
                    borderColor: tokens.borderColor,
                    background: tokens.surface,
                    borderRadius: `calc(var(--ds-control-radius) * 0.75)`
                  }}
                >
                  <p className="font-semibold" style={{ fontSize: `${tokens.typeScale.h6}px` }}>
                    Body text sample
                  </p>
                  <p className="mt-1 text-xs" style={{ color: tokens.textMuted }}>
                    This is the typographic voice the rest of the system borrows from.
                  </p>
                </div>
                <div
                  id="ds-control-color-block"
                  className="h-12 rounded-xl border ds-sample-block"
                  style={{
                    background: tokens.primarySubtle,
                    borderColor: tokens.primarySoft,
                    borderRadius: `calc(var(--ds-control-radius) * 1.3)`
                  }}
                />
              </div>
            </div>
          </div>
        </aside>

        <div id="ds-output-section" className="flex flex-col gap-6">
            <div id="ds-tab-header" className="flex flex-wrap items-center justify-between gap-4 rounded-[32px] border border-white/10 bg-white/5 px-6 py-4 shadow-lg shadow-black/10 backdrop-blur">
              <div id="ds-tab-title-section" className="space-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Seed Output</p>
                <h2 id="ds-tab-title" className="text-2xl font-semibold tracking-tight text-white">Live Design Atlas</h2>
              </div>
              <div id="ds-tab-switcher" className="flex items-center gap-2 rounded-full bg-white/10 p-1">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.key
                  return (
                    <button
                      id={`ds-tab-${tab.key}`}
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`${
                        isActive
                          ? 'bg-white text-slate-900 shadow-lg shadow-black/20'
                          : 'text-slate-200 hover:bg-white/20'
                      } rounded-full px-4 py-2 text-sm font-semibold transition`}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div id="ds-tab-content" className="border p-8 backdrop-blur ds-tab-panel" style={previewStyles}>
              <div className="flex flex-col gap-8">
                {activeTab === 'preview' ? (
                <div className="flex flex-col gap-8">
                  <div
                    id="preview-workspace"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '88px 280px 1fr',
                      gap: 'var(--ds-spacing-lg)'
                    }}
                  >
                    <nav
                      id="preview-rail"
                      className="border"
                      style={{
                        background: 'var(--ds-surface)',
                        borderColor: 'var(--ds-border)',
                        borderRadius: 'var(--ds-radius-lg)',
                        padding: 'var(--ds-spacing-sm)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--ds-spacing-sm)'
                      }}
                    >
                      <span
                        className="font-semibold"
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--ds-radius)',
                          background: 'var(--ds-primary)',
                          color: 'var(--ds-on-primary)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 'var(--ds-type-h5)'
                        }}
                      >
                        K
                      </span>
                      <div
                        className="flex flex-col items-center gap-2"
                        style={{ width: '100%', flex: 1 }}
                      >
                        {PREVIEW_NAV_ITEMS.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            className="text-xs font-semibold"
                            style={{
                              width: '100%',
                              padding: 'var(--ds-spacing-xs)',
                              borderRadius: 'var(--ds-radius)',
                              background: item.active ? 'var(--ds-primary)' : 'transparent',
                              color: item.active ? 'var(--ds-on-primary)' : 'var(--ds-text-muted)',
                              border: item.active
                                ? `var(--ds-border-width) solid ${tokens.primaryStrong}`
                                : `var(--ds-border-width) solid transparent`
                            }}
                          >
                            {item.abbreviation}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="text-xs font-semibold"
                        style={{
                          width: '100%',
                          padding: 'var(--ds-spacing-xs)',
                          borderRadius: 'var(--ds-radius)',
                          border: 'var(--ds-border-width) dashed var(--ds-border)',
                          color: 'var(--ds-text-muted)'
                        }}
                      >
                        +
                      </button>
                    </nav>

                    <aside
                      id="preview-company-panel"
                      className="border"
                      style={{
                        background: 'var(--ds-surface)',
                        borderColor: 'var(--ds-border)',
                        borderRadius: 'var(--ds-radius-lg)',
                        padding: 'var(--ds-spacing-md)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--ds-spacing-md)'
                      }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                            style={{
                              background: tokens.primarySubtle,
                              color: tokens.primaryStrong
                            }}
                          >
                            Listed
                            <span
                              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs"
                              style={{
                                background: 'var(--ds-surface)',
                                color: tokens.primaryStrong,
                                border: `var(--ds-border-width) solid ${tokens.primaryStrong}`
                              }}
                            >
                              26
                            </span>
                          </span>
                          <span
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                            style={{
                              background: 'var(--ds-surface-muted)',
                              color: 'var(--ds-text-muted)'
                            }}
                          >
                            Sectors
                            <span
                              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs"
                              style={{
                                background: 'var(--ds-surface)',
                                border: 'var(--ds-border-width) solid var(--ds-border)',
                                color: 'var(--ds-text)'
                              }}
                            >
                              43
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="rounded-full px-3 py-1 text-xs font-semibold"
                            style={{
                              background: 'var(--ds-surface)',
                              border: 'var(--ds-border-width) solid var(--ds-border)',
                              color: 'var(--ds-text)'
                            }}
                          >
                            Listing v
                          </button>
                          <button
                            type="button"
                            className="rounded-full px-3 py-1 text-xs font-semibold"
                            style={{
                              background: 'var(--ds-surface)',
                              border: 'var(--ds-border-width) solid var(--ds-border)',
                              color: 'var(--ds-text)'
                            }}
                          >
                            Filters
                          </button>
                        </div>
                      </div>

                      <div id="preview-company-feed" className="flex flex-col gap-3">
                        {PREVIEW_COMPANIES.map((company) => {
                          const tone = tonePalette[company.tone] ?? tonePalette.brand
                          const isActive = Boolean(company.active)
                          const scoreColor = company.score < 0 ? tokens.danger : tokens.primary
                          return (
                            <div
                              key={company.name}
                              className="border"
                              style={{
                                display: 'flex',
                                gap: 'var(--ds-spacing-sm)',
                                alignItems: 'center',
                                padding: 'var(--ds-spacing-sm)',
                                borderRadius: 'var(--ds-radius-lg)',
                                border: `var(--ds-border-width) solid ${
                                  isActive ? tokens.primary : tokens.borderColor
                                }`,
                                background: isActive
                                  ? mixColors(tokens.primary, '#ffffff', 0.82)
                                  : 'var(--ds-surface-muted)',
                                boxShadow: isActive ? 'var(--ds-shadow)' : 'none'
                              }}
                            >
                              <span
                                className="h-full w-1 rounded-full"
                                style={{ background: tone.color, opacity: 0.65 }}
                              />
                              <div className="flex flex-col gap-1" style={{ flex: 1 }}>
                                <span className="text-[11px]" style={{ color: 'var(--ds-text-muted)' }}>
                                  {company.segment}
                                </span>
                                <p className="font-semibold" style={{ color: 'var(--ds-text)' }}>
                                  {company.name}
                                </p>
                                <span
                                  className="inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide"
                                  style={{
                                    background: tone.background,
                                    color: tone.color
                                  }}
                                >
                                  {company.badge}
                                </span>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <span className="text-[11px] uppercase" style={{ color: 'var(--ds-text-muted)' }}>
                                  Score
                                </span>
                                <span
                                  className="inline-flex items-center justify-center text-sm font-semibold"
                                  style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '9999px',
                                    background: 'var(--ds-surface)',
                                    border: `calc(var(--ds-border-width) * 1.6) solid ${scoreColor}`,
                                    color: scoreColor
                                  }}
                                >
                                  {Math.abs(company.score)}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </aside>

                    <section id="preview-main" className="flex flex-col gap-6">
                      <header className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                          <p className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                            Companies / Notification Center / Notification Preferences
                          </p>
                          <h2 className="font-semibold" style={{ fontSize: 'var(--ds-type-h3)' }}>
                            Companies
                          </h2>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            className="rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                              background: 'var(--ds-surface)',
                              border: 'var(--ds-border-width) solid var(--ds-border)',
                              color: 'var(--ds-text)'
                            }}
                          >
                            Watchlist
                          </button>
                          <button
                            type="button"
                            className="rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                              background: 'var(--ds-surface)',
                              border: 'var(--ds-border-width) solid var(--ds-border)',
                              color: 'var(--ds-text)'
                            }}
                          >
                            Share
                          </button>
                          <button
                            type="button"
                            className="rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                              background: 'var(--ds-primary)',
                              color: 'var(--ds-on-primary)',
                              border: `var(--ds-border-width) solid ${tokens.primaryStrong}`
                            }}
                          >
                            Import Companies
                          </button>
                        </div>
                      </header>

                      <div
                        id="preview-content-panel"
                        className="border"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface-elevated)',
                          borderRadius: 'var(--ds-radius-xl)',
                          padding: 'var(--ds-spacing-lg)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'var(--ds-spacing-lg)'
                        }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <span
                              className="inline-flex h-14 w-14 items-center justify-center rounded-full"
                              style={{
                                background: 'var(--ds-primary-subtle)',
                                color: 'var(--ds-primary-strong)',
                                border: `var(--ds-border-width) solid ${tokens.primaryStrong}`,
                                boxShadow: 'var(--ds-shadow)'
                              }}
                            >
                              PL
                            </span>
                            <div className="space-y-1">
                              <span className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                                Payments Dig · Fintech · Payment solutions
                              </span>
                              <h3 className="font-semibold" style={{ fontSize: 'var(--ds-type-h3)' }}>
                                Paylocity
                              </h3>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              className="rounded-full px-4 py-2 text-sm font-semibold"
                              style={{
                                background: 'var(--ds-surface)',
                                border: 'var(--ds-border-width) solid var(--ds-border)',
                                color: 'var(--ds-text)'
                              }}
                            >
                              Watchlist
                            </button>
                            <button
                              type="button"
                              className="rounded-full px-4 py-2 text-sm font-semibold"
                              style={{
                                background: 'var(--ds-surface)',
                                border: 'var(--ds-border-width) solid var(--ds-border)',
                                color: 'var(--ds-text)'
                              }}
                            >
                              Share
                            </button>
                            <button
                              type="button"
                              className="rounded-full px-4 py-2 text-sm font-semibold"
                              style={{
                                background: 'transparent',
                                border: 'var(--ds-border-width) dashed var(--ds-border)',
                                color: 'var(--ds-text)'
                              }}
                            >
                              + Add Segment
                            </button>
                          </div>
                        </div>

                        <div
                          id="preview-metric-cards"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: 'var(--ds-spacing-md)'
                          }}
                        >
                          {PREVIEW_METRICS.map((metric) => {
                            const trendNegative = metric.trend.trim().startsWith('-')
                            const trendColor = trendNegative ? tokens.dangerStrong : tokens.successStrong
                            const trendBackground = trendNegative ? tokens.dangerSoft : tokens.successSoft
                            return (
                              <div
                                key={metric.label}
                                className="border"
                                style={{
                                  borderColor: 'var(--ds-border)',
                                  background: 'var(--ds-surface)',
                                  borderRadius: 'var(--ds-radius-lg)',
                                  padding: 'var(--ds-spacing-md)',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'var(--ds-spacing-sm)'
                                }}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                                    {metric.label}
                                  </span>
                                  <span
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                                    style={{
                                      background: 'var(--ds-primary-subtle)',
                                      color: 'var(--ds-primary-strong)'
                                    }}
                                  >
                                    •
                                  </span>
                                </div>
                                <div className="flex items-end justify-between gap-2">
                                  <span className="text-2xl font-semibold" style={{ color: 'var(--ds-text)' }}>
                                    {metric.value}
                                  </span>
                                  <span
                                    className="inline-flex rounded-full px-2 py-1 text-[11px] font-semibold"
                                    style={{ background: trendBackground, color: trendColor }}
                                  >
                                    {metric.trend}
                                  </span>
                                </div>
                                <div className="h-2 w-full rounded-full" style={{ background: 'var(--ds-surface-muted)' }}>
                                  <div
                                    style={{
                                      width: `${metric.fill}%`,
                                      height: '100%',
                                      background: 'var(--ds-primary)',
                                      borderRadius: 'inherit'
                                    }}
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        <div
                          id="preview-banner"
                          className="flex flex-wrap items-center gap-3 text-sm"
                          style={{
                            background: tokens.warningSoft,
                            color: tokens.warningStrong,
                            borderRadius: 'var(--ds-radius)',
                            padding: 'var(--ds-spacing-sm)',
                            border: `var(--ds-border-width) solid ${mixColors(tokens.warningStrong, '#ffffff', 0.7)}`
                          }}
                        >
                          <span
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                            style={{
                              background: tokens.warningStrong,
                              color: 'var(--ds-on-primary)'
                            }}
                          >
                            !
                          </span>
                          Want to stay updated? Add to watchlist and we'll notify you when data is available.
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          {PREVIEW_TABS.map((tab) => {
                            const isActive = tab === 'Overview'
                            return (
                              <button
                                key={tab}
                                type="button"
                                className="rounded-full px-4 py-2 text-sm font-semibold"
                                style={{
                                  background: isActive ? 'var(--ds-primary)' : 'transparent',
                                  color: isActive ? 'var(--ds-on-primary)' : 'var(--ds-text-muted)',
                                  border: isActive
                                    ? `var(--ds-border-width) solid ${tokens.primaryStrong}`
                                    : 'none'
                                }}
                              >
                                {tab}
                              </button>
                            )
                          })}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-2">
                            {PREVIEW_FILTERS.slice(0, 2).map((filter) => (
                              <button
                                key={filter}
                                type="button"
                                className="rounded-full px-3 py-1 text-xs font-semibold"
                                style={{
                                  background: 'var(--ds-surface)',
                                  border: 'var(--ds-border-width) solid var(--ds-border)',
                                  color: 'var(--ds-text)'
                                }}
                              >
                                {filter} v
                              </button>
                            ))}
                            <span className="inline-flex h-6 w-px" style={{ background: 'var(--ds-border)' }} />
                            {PREVIEW_FILTERS.slice(2).map((filter) => (
                              <button
                                key={filter}
                                type="button"
                                className="rounded-full px-3 py-1 text-xs font-semibold"
                                style={{
                                  background: 'transparent',
                                  color: 'var(--ds-text-muted)'
                                }}
                              >
                                {filter}
                              </button>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            {PREVIEW_TIMEFRAMES.map((range) => {
                              const isActive = range === 'YTD'
                              return (
                                <button
                                  key={range}
                                  type="button"
                                  className="rounded-full px-3 py-1 text-xs font-semibold"
                                  style={{
                                    background: isActive ? 'var(--ds-primary-subtle)' : 'var(--ds-surface)',
                                    color: isActive ? 'var(--ds-primary-strong)' : 'var(--ds-text-muted)',
                                    border: `var(--ds-border-width) solid ${
                                      isActive ? tokens.primaryStrong : 'transparent'
                                    }`
                                  }}
                                >
                                  {range}
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        <div
                          id="preview-data-table"
                          className="overflow-hidden border"
                          style={{
                            borderColor: 'var(--ds-border)',
                            borderRadius: 'var(--ds-radius-lg)',
                            background: 'var(--ds-surface)'
                          }}
                        >
                          <table
                            style={{
                              width: '100%',
                              borderCollapse: 'collapse',
                              fontSize: 'var(--ds-type-label)'
                            }}
                          >
                            <thead>
                              <tr>
                                <th
                                  style={{
                                    textAlign: 'left',
                                    padding: '16px',
                                    color: 'var(--ds-text-muted)',
                                    fontWeight: 600
                                  }}
                                >
                                  Customer Concentration (% revenue)
                                </th>
                                {PREVIEW_TABLE_YEARS.map((year) => (
                                  <th
                                    key={year}
                                    style={{
                                      textAlign: 'right',
                                      padding: '16px',
                                      color: 'var(--ds-text-muted)',
                                      fontWeight: 600
                                    }}
                                  >
                                    {year}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {PREVIEW_TABLE_ROWS.map((row) => (
                                <tr key={row.name} style={{ borderTop: 'var(--ds-border-width) solid var(--ds-border)' }}>
                                  <td
                                    style={{
                                      padding: '14px 16px',
                                      color: 'var(--ds-text)',
                                      fontWeight: 600
                                    }}
                                  >
                                    {row.name}
                                  </td>
                                  {row.values.map((entry, index) => (
                                    <td
                                      key={`${row.name}-${index}`}
                                      style={{
                                        padding: '14px 16px',
                                        textAlign: 'right',
                                        color: 'var(--ds-text)'
                                      }}
                                    >
                                      <div className="flex flex-col items-end gap-1">
                                        <span>{entry.value}</span>
                                        <span
                                          className="inline-flex rounded-full px-2 py-[2px] text-[11px] font-semibold"
                                          style={{
                                            background: getDeltaBackground(entry.delta),
                                            color: getDeltaColor(entry.delta)
                                          }}
                                        >
                                          {entry.delta}
                                        </span>
                                      </div>
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                ) : (
                <div id="ds-system-tab-content" className="flex gap-8 ds-system-content">
                  <nav id="ds-system-nav" className="hidden lg:block w-64 sticky top-8 h-fit ds-system-navigation">
                    <div id="ds-system-nav-panel" className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur">
                      <h3 className="text-sm font-semibold text-white mb-3">Sections</h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#color-system"
                            className="block text-sm text-slate-300 hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-white/10"
                          >
                            Color System
                          </a>
                        </li>
                        <li>
                          <a
                            href="#typography"
                            className="block text-sm text-slate-300 hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-white/10"
                          >
                            Typography Hierarchy
                          </a>
                        </li>
                        <li>
                          <a
                            href="#layout"
                            className="block text-sm text-slate-300 hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-white/10"
                          >
                            Layout & Rhythm
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components"
                            className="block text-sm text-slate-300 hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-white/10"
                          >
                            Component Library
                          </a>
                        </li>
                        <li>
                          <a
                            href="#css-variables"
                            className="block text-sm text-slate-300 hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-white/10"
                          >
                            CSS Variables
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div id="ds-system-main-content" className="flex-1 flex flex-col gap-8">
                  <section
                    id="color-system"
                    className="border p-6 ds-system-section"
                    style={{
                      borderColor: 'var(--ds-border)',
                      background: 'var(--ds-surface-elevated)',
                      borderRadius: 'var(--ds-radius-xl)',
                      color: 'var(--ds-text)'
                    }}
                  >
                    <h3 className="font-semibold" style={{ fontSize: 'var(--ds-type-h4)' }}>
                      Color System
                    </h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {colorSystem.map((swatch) => {
                        const readable = getReadableTextColor(swatch.value)
                        return (
                          <div
                            id={`ds-color-${swatch.name.toLowerCase().replace(/\s+/g, '-')}`}
                            key={swatch.name}
                            className="border p-4 ds-color-swatch"
                            style={{
                              borderColor: 'var(--ds-border)',
                              background: 'var(--ds-surface)',
                              borderRadius: 'var(--ds-radius-lg)'
                            }}
                          >
                            <div
                              className="h-16 w-full"
                              style={{
                                background: swatch.value,
                                borderRadius: 'var(--ds-radius)',
                                boxShadow: 'inset 0 0 0 1px rgba(12, 18, 32, 0.12)'
                              }}
                            />
                            <div className="mt-3 space-y-2 text-sm">
                              <div className="flex items-center justify-between">
                                <p className="font-semibold" style={{ color: 'var(--ds-text)' }}>
                                  {swatch.name}
                                </p>
                                <span className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                                  {swatch.usage}
                                </span>
                              </div>
                              <span
                                className="inline-flex rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
                                style={{ background: swatch.value, color: readable }}
                              >
                                {swatch.value.toUpperCase()}
                              </span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </section>

                  <section
                    id="typography"
                    className="border p-6 ds-system-section"
                    style={{
                      borderColor: 'var(--ds-border)',
                      background: 'var(--ds-surface-elevated)',
                      borderRadius: 'var(--ds-radius-xl)',
                      color: 'var(--ds-text)'
                    }}
                  >
                    <h3 className="font-semibold" style={{ fontSize: 'var(--ds-type-h4)' }}>
                      Typography Hierarchy
                    </h3>
                    <div className="mt-4 flex flex-col gap-4">
                      {typographyScale.map((item) => {
                        const isMono = item.token === '--ds-type-mono'
                        const isLabel = item.token === '--ds-type-label'
                        const weight = isLabel ? 600 : item.token === '--ds-type-body' ? 400 : 600
                        return (
                          <div
                            id={`ds-type-${item.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            key={item.token}
                            className="rounded-2xl border p-4 ds-type-sample"
                            style={{
                              borderColor: tokens.borderColor,
                              background: tokens.surface,
                              borderRadius: `${seeds.radius * 1.2}px`
                            }}
                          >
                            <div className="flex items-baseline justify-between gap-4">
                              <span
                                className="text-xs font-semibold uppercase tracking-[0.25em]"
                                style={{ color: 'var(--ds-text-muted)' }}
                              >
                                {item.label}
                              </span>
                              <span className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                                {Math.round(item.size)}px
                              </span>
                            </div>
                            <p
                              className="mt-2"
                              style={{
                                fontSize: `${item.size}px`,
                                color: tokens.textPrimary,
                                fontWeight: weight,
                                fontFamily: isMono ? 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' : seeds.fontFamily,
                                letterSpacing: isLabel ? '0.12em' : 'normal',
                                textTransform: isLabel ? 'uppercase' : 'none'
                              }}
                            >
                              {item.sample}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </section>

                  <section
                    id="layout"
                    className="border p-6 ds-system-section"
                    style={{
                      borderColor: 'var(--ds-border)',
                      background: 'var(--ds-surface-elevated)',
                      borderRadius: 'var(--ds-radius-xl)',
                      color: 'var(--ds-text)'
                    }}
                  >
                    <h3 className="font-semibold" style={{ fontSize: 'var(--ds-type-h4)' }}>
                      Layout &amp; Rhythm
                    </h3>
                    <div className="mt-4 grid gap-4 lg:grid-cols-2">
                      <div
                        id="ds-spacing-panel"
                        className="border p-4 ds-spacing-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4 className="font-semibold" style={{ fontSize: 'var(--ds-type-h5)' }}>
                          Spacing scale
                        </h4>
                        <div id="ds-spacing-list" className="mt-4 flex flex-col gap-3">
                          {spacingPairs.map(({ key, value }) => (
                            <div id={`ds-spacing-${key}`} key={key} className="flex items-center gap-4 ds-spacing-item">
                              <span
                                className="w-24 text-xs font-medium uppercase tracking-wide"
                                style={{ color: 'var(--ds-text-muted)' }}
                              >
                                {key}
                              </span>
                              <div className="flex items-center gap-3">
                                <div
                                  style={{
                                    width: `${Math.round(value)}px`,
                                    height: '12px',
                                    borderRadius: '9999px',
                                    background: 'var(--ds-primary-subtle)',
                                    border: '1px solid var(--ds-primary-strong)'
                                  }}
                                />
                                <span className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                                  {Math.round(value)}px
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        id="ds-grid-panel"
                        className="border p-4 ds-grid-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4 className="font-semibold" style={{ fontSize: 'var(--ds-type-h5)' }}>
                          Grid system
                        </h4>
                        <p className="mt-2 text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                          Twelve-column flexible grid with base spacing multiples.
                        </p>
                        <div
                          id="ds-grid-demo"
                          className="mt-4 ds-grid-demo"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
                            gap: 'var(--ds-spacing-xs)',
                            background: 'var(--ds-surface)',
                            padding: 'var(--ds-spacing-sm)',
                            borderRadius: 'var(--ds-radius)'
                          }}
                        >
                          {Array.from({ length: 12 }).map((_, index) => (
                            <div
                              id={`ds-grid-col-${index + 1}`}
                              key={index}
                              style={{
                                background: 'var(--ds-primary-subtle)',
                                borderRadius: 'var(--ds-radius)',
                                height: '48px',
                                border: '1px solid var(--ds-primary-strong)',
                                opacity: index % 2 === 0 ? 1 : 0.65
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="components"
                    className="border p-6 ds-system-section"
                    style={{
                      borderColor: 'var(--ds-border)',
                      background: 'var(--ds-surface-elevated)',
                      borderRadius: 'var(--ds-radius-xl)',
                      color: 'var(--ds-text)'
                    }}
                  >
                    <h3 className="font-semibold" style={{ fontSize: 'var(--ds-type-h4)' }}>
                      Component Library
                    </h3>
                    <div id="ds-components-grid" className="mt-4 grid gap-6 xl:grid-cols-2" style={{ gap: 'var(--ds-spacing-lg)' }}>
                      <div
                        id="ds-comp-buttons"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Buttons &amp; controls
                        </h4>
                        <div id="ds-buttons-demo" className="flex flex-wrap gap-3">
                          <button
                            id="ds-btn-primary"
                            type="button"
                            className="rounded-full px-4 py-2 text-sm font-semibold"
                            style={{ background: 'var(--ds-primary)', color: 'var(--ds-on-primary)', border: 'var(--ds-border-width) solid var(--ds-primary-strong)' }}
                          >
                            Primary
                          </button>
                          <button
                            id="ds-btn-accent"
                            type="button"
                            className="rounded-full px-4 py-2 text-sm font-semibold"
                            style={{ background: 'var(--ds-accent)', color: getReadableTextColor(tokens.accent), border: 'var(--ds-border-width) solid var(--ds-primary-strong)' }}
                          >
                            Accent
                          </button>
                          <button
                            id="ds-btn-ghost"
                            type="button"
                            className="rounded-full px-4 py-2 text-sm font-semibold"
                            style={{ background: 'transparent', color: 'var(--ds-text)', border: 'var(--ds-border-width) dashed var(--ds-border)' }}
                          >
                            Ghost
                          </button>
                          <button
                            id="ds-btn-outline"
                            type="button"
                            className="rounded-full px-4 py-2 text-sm font-semibold"
                            style={{ background: 'var(--ds-surface)', color: 'var(--ds-text)', border: 'var(--ds-border-width) solid var(--ds-border)' }}
                          >
                            Outline
                          </button>
                        </div>
                        <div id="ds-segments-demo" className="flex flex-wrap gap-2" style={{ gap: 'var(--ds-spacing-sm)' }}>
                          {['Design', 'Build', 'Ship'].map((segment, index) => (
                            <button
                              id={`ds-segment-${segment.toLowerCase()}`}
                              key={segment}
                              type="button"
                              className="rounded-full px-3 py-1 text-xs font-semibold"
                              style={{
                                background: index === 1 ? 'var(--ds-primary)' : 'transparent',
                                color: index === 1 ? 'var(--ds-on-primary)' : 'var(--ds-text-muted)',
                                border: index === 1 ? 'var(--ds-border-width) solid var(--ds-primary-strong)' : 'var(--ds-border-width) solid transparent'
                              }}
                            >
                              {segment}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div
                        id="ds-comp-navigation"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Navigation &amp; lists
                        </h4>
                        <div
                          className="grid gap-4 md:grid-cols-[90px,1fr]"
                          style={{ gap: 'var(--ds-spacing-md)' }}
                        >
                          <div
                            className="border"
                            style={{
                              background: 'var(--ds-surface)',
                              borderColor: 'var(--ds-border)',
                              borderRadius: 'var(--ds-radius)',
                              padding: 'var(--ds-spacing-sm)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: 'var(--ds-spacing-sm)'
                            }}
                          >
                            <span
                              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
                              style={{ background: 'var(--ds-primary)', color: 'var(--ds-on-primary)' }}
                            >
                              Co
                            </span>
                            {PREVIEW_NAV_ITEMS.slice(0, 4).map((item, index) => (
                              <span
                                key={item.label}
                                className="inline-flex w-full items-center justify-center rounded-full px-3 py-1 text-[11px] font-semibold"
                                style={{
                                  background: index === 0 ? 'var(--ds-primary)' : 'transparent',
                                  color: index === 0 ? 'var(--ds-on-primary)' : 'var(--ds-text-muted)',
                                  border: index === 0 ? `var(--ds-border-width) solid ${tokens.primaryStrong}` : 'none'
                                }}
                              >
                                {item.abbreviation}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-col gap-3">
                            {PREVIEW_COMPANIES.slice(0, 3).map((company, index) => {
                              const tone = tonePalette[company.tone] ?? tonePalette.brand
                              const isHighlighted = index === 1
                              return (
                                <div
                                  key={company.name}
                                  className="border"
                                  style={{
                                    borderRadius: 'var(--ds-radius)',
                                    border: `var(--ds-border-width) solid ${
                                      isHighlighted ? tokens.primary : tokens.borderColor
                                    }`,
                                    background: isHighlighted
                                      ? mixColors(tokens.primary, '#ffffff', 0.85)
                                      : 'var(--ds-surface-muted)',
                                    padding: 'var(--ds-spacing-sm)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--ds-spacing-sm)'
                                  }}
                                >
                                  <span
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
                                    style={{
                                      background: tone.background,
                                      color: tone.color
                                    }}
                                  >
                                    {company.name.slice(0, 2)}
                                  </span>
                                  <div className="flex-1">
                                    <p className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                                      {company.segment}
                                    </p>
                                    <p className="text-sm font-semibold" style={{ color: 'var(--ds-text)' }}>
                                      {company.name}
                                    </p>
                                  </div>
                                  <span
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
                                    style={{
                                      background: 'var(--ds-surface)',
                                      border: `calc(var(--ds-border-width) * 1.2) solid ${
                                        company.score < 0 ? tokens.danger : tokens.primary
                                      }`,
                                      color: company.score < 0 ? tokens.danger : tokens.primary
                                    }}
                                  >
                                    {Math.abs(company.score)}
                                  </span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      <div
                        id="ds-comp-metrics"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Metrics &amp; banners
                        </h4>
                        <div
                          className="grid gap-3 md:grid-cols-2"
                          style={{ gap: 'var(--ds-spacing-md)' }}
                        >
                          {PREVIEW_METRICS.map((metric) => {
                            const trendNegative = metric.trend.trim().startsWith('-')
                            const trendColor = trendNegative ? tokens.dangerStrong : tokens.successStrong
                            const trendBg = trendNegative ? tokens.dangerSoft : tokens.successSoft
                            return (
                              <div
                                key={`ds-metric-${metric.label}`}
                                className="border"
                                style={{
                                  borderColor: 'var(--ds-border)',
                                  background: 'var(--ds-surface-muted)',
                                  borderRadius: 'var(--ds-radius)',
                                  padding: 'var(--ds-spacing-sm)',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'var(--ds-spacing-xs)'
                                }}
                              >
                                <span className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                                  {metric.label}
                                </span>
                                <div className="flex items-center justify-between">
                                  <span className="text-lg font-semibold" style={{ color: 'var(--ds-text)' }}>
                                    {metric.value}
                                  </span>
                                  <span
                                    className="inline-flex rounded-full px-2 py-[2px] text-[11px] font-semibold"
                                    style={{ background: trendBg, color: trendColor }}
                                  >
                                    {metric.trend}
                                  </span>
                                </div>
                                <div className="h-2 w-full rounded-full" style={{ background: 'var(--ds-surface)' }}>
                                  <div
                                    style={{
                                      width: `${metric.fill}%`,
                                      height: '100%',
                                      background: 'var(--ds-primary)',
                                      borderRadius: 'inherit'
                                    }}
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div
                          className="flex flex-wrap items-center gap-3 rounded-2xl border px-4 py-3 text-sm"
                          style={{
                            borderColor: mixColors(tokens.warningStrong, '#ffffff', 0.7),
                            background: tokens.warningSoft,
                            color: tokens.warningStrong
                          }}
                        >
                          <span
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                            style={{ background: tokens.warningStrong, color: 'var(--ds-on-primary)' }}
                          >
                            !
                          </span>
                          Data availability notices surface with the same banner styling used in preview.
                        </div>
                      </div>

                      <div
                        id="ds-comp-forms"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Forms &amp; inputs
                        </h4>
                        <div id="ds-forms-demo" className="space-y-3 text-sm">
                          <label id="ds-form-text-label" className="flex flex-col gap-2">
                            <span style={{ color: 'var(--ds-text-muted)', fontSize: 'var(--ds-type-label)' }}>Text input</span>
                            <input
                              id="ds-form-text-input"
                              type="text"
                              defaultValue="Button radius seeds"
                              className="rounded-xl border bg-transparent px-4 py-3 outline-none"
                              style={{ borderColor: 'var(--ds-border)', borderWidth: 'var(--ds-border-width)', color: 'var(--ds-text)' }}
                            />
                          </label>
                          <label id="ds-form-select-label" className="flex flex-col gap-2">
                            <span style={{ color: 'var(--ds-text-muted)', fontSize: 'var(--ds-type-label)' }}>Select</span>
                            <select
                              id="ds-form-select"
                              className="rounded-xl border bg-transparent px-4 py-3 text-sm"
                              style={{ borderColor: 'var(--ds-border)', borderWidth: 'var(--ds-border-width)', color: 'var(--ds-text)' }}
                            >
                              <option style={{ background: 'var(--ds-surface)', color: 'var(--ds-text)' }}>
                                Seeded theme
                              </option>
                              <option style={{ background: 'var(--ds-surface)', color: 'var(--ds-text)' }}>
                                Alt theme
                              </option>
                            </select>
                          </label>
                          <label id="ds-form-textarea-label" className="flex flex-col gap-2">
                            <span style={{ color: 'var(--ds-text-muted)', fontSize: 'var(--ds-type-label)' }}>Textarea</span>
                            <textarea
                              id="ds-form-textarea"
                              rows="3"
                              className="rounded-xl border bg-transparent px-4 py-3 text-sm outline-none"
                              style={{ borderColor: 'var(--ds-border)', borderWidth: 'var(--ds-border-width)', color: 'var(--ds-text)' }}
                              defaultValue="Tokens roll downhill from these control components."
                            />
                          </label>
                          <div id="ds-form-controls" className="flex flex-wrap items-center gap-4">
                            <label id="ds-form-checkbox-label" className="flex items-center gap-2 text-sm" style={{ color: 'var(--ds-text)' }}>
                              <input id="ds-form-checkbox" type="checkbox" defaultChecked className="h-4 w-4" style={{ accentColor: tokens.primary }} />
                              Accept handoff
                            </label>
                            <label id="ds-form-radio-label" className="flex items-center gap-2 text-sm" style={{ color: 'var(--ds-text)' }}>
                              <input id="ds-form-radio" type="radio" name="seed-radio" defaultChecked className="h-4 w-4" style={{ accentColor: tokens.primary }} />
                              Primary path
                            </label>
                            <label id="ds-form-toggle-label" className="flex items-center gap-2 text-sm" style={{ color: 'var(--ds-text)' }}>
                              <span
                                id="ds-form-toggle"
                                className="inline-flex h-5 w-10 items-center rounded-full"
                                style={{
                                  background: 'var(--ds-primary-subtle)',
                                  border: 'var(--ds-border-width) solid var(--ds-primary-strong)',
                                  padding: '2px'
                                }}
                              >
                                <span
                                  className="block h-4 w-4 rounded-full"
                                  style={{ background: 'var(--ds-primary)', boxShadow: 'var(--ds-shadow)' }}
                                />
                              </span>
                              Toggle
                            </label>
                          </div>
                        </div>
                      </div>

                      <div
                        id="ds-comp-banners"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Banners &amp; alerts
                        </h4>
                        <div id="ds-banners-demo" className="space-y-2">
                          {[
                            { title: 'Product launch', body: 'New system tokens shipped.', background: 'var(--ds-primary-subtle)', color: 'var(--ds-primary-strong)' },
                            { title: 'Maintenance', body: 'Deploy window opens Friday.', background: mixColors(tokens.primary, '#F97316', 0.65), color: '#2F1504' },
                            { title: 'Heads up', body: 'Update your documentation.', background: mixColors(tokens.primary, '#38BDF8', 0.5), color: '#06253A' }
                          ].map((banner) => (
                            <div
                              id={`ds-banner-${banner.title.toLowerCase().replace(/\s+/g, '-')}`}
                              key={banner.title}
                              className="rounded-2xl px-4 py-3 ds-banner"
                              style={{ background: banner.background, color: banner.color, borderRadius: 'var(--ds-radius-lg)' }}
                            >
                              <p className="text-sm font-semibold">{banner.title}</p>
                              <p className="text-xs opacity-80">{banner.body}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        id="ds-comp-tables"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Tables &amp; data
                        </h4>
                        <table id="ds-table-demo" className="w-full border-collapse text-sm ds-table">
                          <thead>
                            <tr style={{ background: 'var(--ds-primary-subtle)', color: 'var(--ds-primary-strong)' }}>
                              <th className="px-3 py-2 text-left font-semibold">Name</th>
                              <th className="px-3 py-2 text-left font-semibold">Status</th>
                              <th className="px-3 py-2 text-right font-semibold">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { name: 'Datasource', status: 'Healthy' },
                              { name: 'Component kit', status: 'Updating' },
                              { name: 'Documentation', status: 'Review' }
                            ].map((row) => (
                              <tr id={`ds-table-row-${row.name.toLowerCase().replace(/\s+/g, '-')}`} key={row.name} style={{ background: 'var(--ds-surface)', color: 'var(--ds-text)' }}>
                                <td className="border-t px-3 py-2" style={{ borderColor: 'var(--ds-border)' }}>
                                  {row.name}
                                </td>
                                <td className="border-t px-3 py-2" style={{ borderColor: 'var(--ds-border)', color: 'var(--ds-text-muted)' }}>
                                  {row.status}
                                </td>
                                <td className="border-t px-3 py-2 text-right" style={{ borderColor: 'var(--ds-border)' }}>
                                  <button type="button" className="text-sm font-semibold" style={{ color: 'var(--ds-primary)' }}>
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div id="ds-table-pagination" className="flex items-center justify-between text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                          <span>Rows per page: 10</span>
                          <div className="flex items-center gap-2">
                            <button id="ds-table-prev" type="button" style={{ color: 'var(--ds-text-muted)' }}>
                              Prev
                            </button>
                            <span>1 / 4</span>
                            <button id="ds-table-next" type="button" style={{ color: 'var(--ds-primary)' }}>
                              Next
                            </button>
                          </div>
                        </div>
                      </div>

                      <div
                        id="ds-comp-tooltips"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Tooltips &amp; helpers
                        </h4>
                        <div id="ds-tooltips-demo" className="flex flex-wrap gap-4">
                          <div id="ds-tooltip-container" className="relative inline-flex flex-col items-start gap-2">
                            <button
                              id="ds-tooltip-trigger"
                              type="button"
                              className="rounded-full px-3 py-1 text-xs font-semibold"
                              style={{ background: 'var(--ds-surface)', border: 'var(--ds-border-width) solid var(--ds-border)', color: 'var(--ds-text)' }}
                            >
                              Hover me
                            </button>
                            <div
                              id="ds-tooltip-content"
                              className="rounded-lg px-3 py-2 text-xs shadow-lg"
                              style={{
                                position: 'absolute',
                                top: '140%',
                                left: 0,
                                background: 'var(--ds-primary-strong)',
                                color: 'var(--ds-on-primary)',
                                boxShadow: 'var(--ds-shadow)'
                              }}
                            >
                              Tokens align motion &amp; spacing.
                            </div>
                          </div>
                          <div id="ds-helper-text" className="flex items-center gap-2 rounded-xl border px-3 py-2 text-xs" style={{ borderColor: 'var(--ds-border)', color: 'var(--ds-text)' }}>
                            <span id="ds-helper-icon" className="inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: 'var(--ds-primary-subtle)', color: 'var(--ds-primary-strong)' }}>
                              ?
                            </span>
                            Inline helper text respects the same type scale.
                          </div>
                        </div>
                      </div>

                      <div
                        id="ds-comp-modal"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Modal &amp; overlay
                        </h4>
                        <div
                          id="ds-modal-demo"
                          className="rounded-2xl p-4"
                          style={{
                            position: 'relative',
                            background: mixColors(tokens.surface, '#000000', 0.15),
                            border: 'var(--ds-border-width) solid var(--ds-border)',
                            overflow: 'hidden'
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              inset: '8px',
                              borderRadius: 'var(--ds-radius-lg)',
                              background: 'rgba(12, 18, 32, 0.25)',
                              backdropFilter: 'blur(8px)'
                            }}
                          />
                          <div
                            id="ds-modal-content"
                            className="relative rounded-2xl border p-6"
                            style={{ borderColor: 'var(--ds-border)', background: 'var(--ds-surface)' }}
                          >
                            <h5 id="ds-modal-title" className="text-sm font-semibold" style={{ color: 'var(--ds-text)' }}>
                              Modal title
                            </h5>
                            <p className="mt-2 text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                              Overlays inherit elevation tokens and use the same spacing scale.
                            </p>
                            <div id="ds-modal-actions" className="mt-4 flex justify-end gap-2">
                              <button id="ds-modal-cancel" type="button" className="rounded-full px-3 py-1 text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                                Cancel
                              </button>
                              <button id="ds-modal-continue" type="button" className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: 'var(--ds-primary)', color: 'var(--ds-on-primary)' }}>
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="ds-comp-menus"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Menus &amp; navigation
                        </h4>
                        <div id="ds-menus-demo" className="grid gap-4 sm:grid-cols-2">
                          <ul id="ds-nav-menu" className="rounded-2xl border p-3 text-sm" style={{ borderColor: 'var(--ds-border)', background: 'var(--ds-surface)' }}>
                            {['Dashboard', 'Projects', 'Assets', 'Tokens'].map((item, index) => (
                              <li
                                id={`ds-nav-item-${item.toLowerCase()}`}
                                key={item}
                                className="rounded-xl px-3 py-2"
                                style={{
                                  background: index === 1 ? 'var(--ds-primary-subtle)' : 'transparent',
                                  color: index === 1 ? 'var(--ds-primary-strong)' : 'var(--ds-text)',
                                  marginBottom: '4px'
                                }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                          <div id="ds-context-menu" className="rounded-2xl border p-3 text-sm" style={{ borderColor: 'var(--ds-border)', background: 'var(--ds-surface)' }}>
                            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--ds-text-muted)' }}>
                              Context menu
                            </p>
                            <div id="ds-context-menu-items" className="mt-3 space-y-2">
                              {['Duplicate', 'Rename', 'Archive', 'Delete'].map((action, index) => (
                              <button
                                  id={`ds-context-action-${action.toLowerCase()}`}
                                  key={action}
                                  type="button"
                                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs"
                                  style={{
                                    background: index === 0 ? 'var(--ds-surface-muted)' : 'transparent',
                                    color: index === 3 ? mixColors(tokens.primary, '#DC2626', 0.6) : 'var(--ds-text)'
                                  }}
                                >
                                  {action}
                                  <span style={{ color: 'var(--ds-text-muted)' }}>⌘{index + 1}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="ds-comp-feedback"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Feedback &amp; status
                        </h4>
                        <div id="ds-feedback-demo" className="space-y-3 text-sm">
                          <div id="ds-progress-bar" className="rounded-2xl border p-3" style={{ borderColor: 'var(--ds-border)', background: 'var(--ds-surface)' }}>
                            <p className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                              Progress 72%
                            </p>
                            <div id="ds-progress-track" className="mt-2 h-2 w-full overflow-hidden rounded-full" style={{ background: 'var(--ds-surface-muted)' }}>
                              <div id="ds-progress-fill" style={{ width: '72%', height: '100%', background: 'var(--ds-primary)', borderRadius: '9999px' }} />
                            </div>
                          </div>
                          <div id="ds-status-badges" className="flex flex-wrap gap-2">
                            {['New', 'Review', 'Approved'].map((item, index) => (
                              <span
                                id={`ds-status-${item.toLowerCase()}`}
                                key={item}
                                className="rounded-full px-3 py-1 text-xs font-semibold"
                                style={{
                                  background: index === 2 ? 'var(--ds-primary)' : 'var(--ds-primary-subtle)',
                                  color: index === 2 ? 'var(--ds-on-primary)' : 'var(--ds-primary-strong)'
                                }}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                          <div
                            id="ds-toast-notification"
                            className="rounded-2xl border px-4 py-3 text-sm"
                            style={{ borderColor: 'var(--ds-border)', background: 'var(--ds-surface)' }}
                          >
                            <p id="ds-toast-title" className="font-semibold" style={{ color: 'var(--ds-text)' }}>
                              Toast notification
                            </p>
                            <p className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                              Tokens synced across product surfaces.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        id="ds-comp-cards"
                        className="border p-5 space-y-4 ds-comp-section"
                        style={{
                          borderColor: 'var(--ds-border)',
                          background: 'var(--ds-surface)',
                          borderRadius: 'var(--ds-radius-lg)'
                        }}
                      >
                        <h4
                          className="text-sm font-semibold uppercase tracking-[0.3em]"
                          style={{ color: 'var(--ds-text-muted)' }}
                        >
                          Cards &amp; widgets
                        </h4>
                        <div id="ds-cards-demo" className="grid gap-3 sm:grid-cols-2">
                          <div
                            id="ds-stat-card"
                            className="rounded-2xl border p-4"
                            style={{ borderColor: 'var(--ds-border)', background: 'var(--ds-surface)' }}
                          >
                            <p className="text-xs uppercase tracking-[0.35em]" style={{ color: 'var(--ds-text-muted)' }}>
                              Stat
                            </p>
                            <p id="ds-stat-value" className="mt-2 text-2xl font-semibold" style={{ color: 'var(--ds-text)' }}>
                              128
                            </p>
                            <p className="text-xs" style={{ color: 'var(--ds-text-muted)' }}>
                              Published assets this sprint
                            </p>
                          </div>
                          <div
                            id="ds-timeline-card"
                            className="rounded-2xl border p-4"
                            style={{ borderColor: 'var(--ds-border)', background: 'var(--ds-surface)' }}
                          >
                            <p className="text-xs uppercase tracking-[0.35em]" style={{ color: 'var(--ds-text-muted)' }}>
                              Timeline
                            </p>
                            <ul id="ds-timeline-list" className="mt-3 space-y-2 text-xs" style={{ color: 'var(--ds-text)' }}>
                              <li>10:00 — Tokens defined</li>
                              <li>12:45 — Components synced</li>
                              <li>15:30 — QA review</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="css-variables"
                    className="border p-6 ds-system-section"
                    style={{
                      borderColor: 'var(--ds-border)',
                      background: 'var(--ds-surface-elevated)',
                      borderRadius: 'var(--ds-radius-xl)',
                      color: 'var(--ds-text)'
                    }}
                  >
                    <h3
                      className="text-sm font-semibold uppercase tracking-[0.3em]"
                      style={{ color: 'var(--ds-text-muted)' }}
                    >
                      CSS variables snapshot
                    </h3>
                    <pre
                      id="ds-css-code"
                      className="mt-4 overflow-auto border p-4 text-xs ds-code-block"
                      style={{
                        borderColor: 'var(--ds-border)',
                        background: 'var(--ds-surface)',
                        borderRadius: 'var(--ds-radius-lg)',
                        color: 'var(--ds-text)',
                        fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        lineHeight: 1.6
                      }}
                    >
{cssDefinition}
                    </pre>
                  </section>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DesignSystemShowcase
