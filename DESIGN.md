# DESIGN.md

## Principles
- Unbranded: no logo, no brand colors, placeholder copy only
- Clarity over decoration; use shadcn defaults wherever possible

## Foundations
- Color: shadcn "stone" palette; semantic tokens only
  (background, foreground, primary, muted, destructive)
- Typography: system font stack; 3 sizes (text-sm, text-base, text-2xl)
- Spacing: Tailwind scale, 4px base (gap-2, gap-4, gap-6)
- Radius: `--radius` token in src/app/globals.css
- Dark mode: supported via the `.dark` class

## Components
- Use shadcn/ui components from `src/components/ui`
- Do not hardcode hex values; use tokens (`bg-primary`, `text-muted-foreground`)
- New patterns get documented here before reuse

## Layout
- Max content width: `max-w-5xl`, centered
- Mobile-first; breakpoints: sm / md / lg