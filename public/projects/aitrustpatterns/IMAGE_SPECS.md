# Image Specifications for Confirmed Assumptions Pattern

This document contains detailed specifications for images needed for the Confirmed Assumptions Pattern page SEO optimization.

---

## Image 1: Open Graph Social Card

**File:** `og_confirmed-assumptions.png`
**Location:** `/public/projects/aitrustpatterns/`

| Specification | Value |
|---------------|-------|
| **Dimensions** | 1200 × 630px (standard OG ratio) |
| **Format** | PNG |
| **Background** | Gradient from #F9FAFB to #EEF2FF |

### Content Layout
- **Left side (60%):** Simplified mockup of the assumptions panel showing 3 chips:
  - Region: US-West
  - Q4: Oct-Dec
  - Currency: USD
  - Include edit indicators on each chip
- **Right side (40%):**
  - Title: "Confirmed Assumptions Panel" (bold, #111827)
  - Subtitle: "Agentic AI UX Pattern" (lighter, #6B7280)
  - Author: "by Dustin Kirk" with small avatar
- **Top-left corner:** Small "dustinkirk.com" watermark

### Visual Style
- Clean, minimal design
- Uses purple accent (#4F46E5) sparingly
- Rounded corners on panel mockup (12px)
- Subtle shadow on panel (0 8px 20px rgba(15,23,42,0.15))

### ASCII Mockup
```
┌─────────────────────────────────────────────────────────┐
│ dustinkirk.com                                          │
│                                                         │
│  ┌──────────────────┐    Confirmed Assumptions          │
│  │ Region  US-West  │    Panel                          │
│  │ Q4      Oct-Dec  │    ─────────────────              │
│  │ Currency  USD    │    Agentic AI UX Pattern          │
│  └──────────────────┘                                   │
│                           by Dustin Kirk                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Image 2: Hero/Main Image

**File:** `confirmed_assumptions_hero.png`
**Location:** `/public/projects/aitrustpatterns/patterns/`

| Specification | Value |
|---------------|-------|
| **Dimensions** | 1440 × 900px (16:10 ratio) |
| **Format** | PNG |
| **Background** | #F9FAFB (light gray) |

### Content
Full-width screenshot of the interactive example showing:
- **Left:** Chat area with user message and agent response
- **Right:** Assumptions panel sidebar with editable controls

### Annotation Callouts (3 total)
1. **"Inline assumption preview"** → pointing to the pill in agent message
2. **"Edit button"** → pointing to the EDIT control
3. **"Detailed assumptions panel"** → pointing to the sidebar

### Visual Treatment
- No browser chrome (cleaner look)
- Subtle drop shadow: `0 18px 40px rgba(15,23,42,0.12)`
- Rounded corners: 16px
- Callout style: Small pill with arrow, light background, dark text

---

## Image 3: Pattern Anatomy Diagram

**File:** `confirmed_assumptions_anatomy.svg`
**Location:** `/public/projects/aitrustpatterns/patterns/`

| Specification | Value |
|---------------|-------|
| **Dimensions** | 800 × 500px |
| **Format** | SVG (scalable) |
| **Style** | Technical diagram with numbered callouts |

### Annotated Elements (numbered 1-6)
1. **Entry point** - The inline assumption pill in agent response
2. **Assumption label** - "Region", "Q4", "Currency" labels
3. **Current value** - The inferred value displayed
4. **Edit control** - Input/select for modification
5. **Hint text** - "Affects: tax calculations, runway estimates..."
6. **Continue CTA** - Button to proceed with assumptions

### Color Coding
- Callout numbers: #4F46E5 (purple) with white text
- Connecting lines: #CBD5E1 (gray), 1.5px stroke
- Text labels: #111827 (dark)
- Background: #FFFFFF

### Style Notes
- Numbers in circles (24px diameter)
- Dashed or dotted lines connecting to elements
- Clean, technical documentation style

---

## Image 4: Before/After Comparison

**File:** `confirmed_assumptions_comparison.png`
**Location:** `/public/projects/aitrustpatterns/patterns/`

| Specification | Value |
|---------------|-------|
| **Dimensions** | 1200 × 600px |
| **Format** | PNG |
| **Layout** | Side-by-side with vertical divider |

### Left Side - "WITHOUT" (Anti-pattern)
- Header: "WITHOUT" in red (#EF4444)
- Red X icon (24px)
- Agent message: "I've scheduled your Q4 campaign for next week."
- No visible assumptions
- Caption below: "Hidden assumptions lead to unexpected results"
- **Visual treatment:** Slightly desaturated/muted colors

### Right Side - "WITH" (Correct Pattern)
- Header: "WITH" in green (#22C55E)
- Green checkmark icon (24px)
- Agent message with visible assumption pill
- Sidebar panel showing editable controls
- Caption below: "Visible assumptions enable early correction"
- **Visual treatment:** Full color, slightly brighter

### Divider
- Vertical line at center: #E5E7EB, 2px width
- Small gap between columns: 24px each side

---

## Image 5: Workflow/Flow Diagram

**File:** `confirmed_assumptions_flow.svg`
**Location:** `/public/projects/aitrustpatterns/patterns/`

| Specification | Value |
|---------------|-------|
| **Dimensions** | 1000 × 300px |
| **Format** | SVG |
| **Style** | Horizontal flow with 3 steps |

### Steps (left to right)

**Step 1: AI infers & logs**
- Icon: Lightbulb (24px, #4F46E5)
- Box content: "Fiscal Year: Apr 1, Currency: USD"
- Step number: "1" in purple circle

**Step 2: User reviews & corrects**
- Icon: Edit/pencil (24px, #4F46E5)
- Box content: Modified value "July 1"
- Step number: "2" in purple circle

**Step 3: System re-runs**
- Icon: Refresh/sync (24px, #4F46E5)
- Box content: "Forecast updated"
- Step number: "3" in purple circle

### Arrow Style
- Curved connectors between steps
- Gradient: #4F46E5 → #6366F1
- Arrow head: Filled triangle
- Line width: 2px

### Box Style
- Background: #F9FAFB
- Border: 1px solid #E5E7EB
- Border radius: 12px
- Padding: 16px
- Min width: 200px

---

## Color Palette Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Purple | #4F46E5 | Accents, icons, callout numbers |
| Purple Light | #6366F1 | Gradient endpoints |
| Purple Glow | #818CF8 | Hover states, glows |
| Dark Text | #111827 | Primary text |
| Medium Text | #4B5563 | Secondary text |
| Light Text | #6B7280 | Hints, captions |
| Muted Text | #9CA3AF | Timestamps |
| Background Light | #F9FAFB | Card backgrounds |
| Background Gradient | #EEF2FF | Page gradient |
| Border | #E5E7EB | Dividers, borders |
| Success Green | #22C55E | Checkmarks, success |
| Error Red | #EF4444 | X marks, errors |

---

## Typography

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Title | System UI | 24px | 700 | #111827 |
| Subtitle | System UI | 16px | 400 | #6B7280 |
| Body | System UI | 14px | 400 | #111827 |
| Caption | System UI | 12px | 400 | #6B7280 |
| Label | System UI | 11px | 600 | #4B5563 |
| Watermark | System UI | 12px | 500 | #9CA3AF |

---

## Export Settings

- **PNG files:** Export at 2x resolution for retina displays (actual pixel dimensions doubled)
- **SVG files:** Ensure text is converted to paths or embedded fonts included
- **Compression:** Use TinyPNG or similar for PNG optimization
- **File naming:** All lowercase with underscores
