// Regenerate public/og-image.png (1200x630).
// One-shot script; requires `satori` and `sharp` (install ad-hoc):
//   npm install --no-save satori sharp
//   node scripts/gen-og.mjs
//
// Downloads Inter (700/800) and JetBrains Mono (500) from Google Fonts on the fly.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUT = path.join(PROJECT_ROOT, 'public', 'og-image.png');

const FONT_URLS = {
  interBold: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf',
  interExtra: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyYMZg.ttf',
  jbm: 'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-Lf1OQk6OThxPA.ttf',
};

async function fetchFont(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

const [{ default: satori }, sharpMod] = await Promise.all([
  import('satori'),
  import('sharp'),
]);
const sharp = sharpMod.default;

const [interBold, interExtra, jbm] = await Promise.all([
  fetchFont(FONT_URLS.interBold),
  fetchFont(FONT_URLS.interExtra),
  fetchFont(FONT_URLS.jbm),
]);

const node = {
  type: 'div',
  props: {
    style: {
      width: '1200px',
      height: '630px',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #07090f 0%, #0e131c 100%)',
      padding: '80px',
      color: '#f8fafc',
      fontFamily: 'Inter',
    },
    children: [
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '90px' },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  width: '72px',
                  height: '72px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #2dd4bf 0%, #06b6d4 50%, #8b5cf6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#07090f',
                  fontSize: '44px',
                  fontWeight: 800,
                },
                children: 'K',
              },
            },
            { type: 'div', props: { style: { fontSize: '36px', fontWeight: 700, letterSpacing: '-0.5px' }, children: 'Kaestria' } },
          ],
        },
      },
      { type: 'div', props: { style: { fontSize: '74px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.05 }, children: 'Senior IT consulting' } },
      {
        type: 'div',
        props: {
          style: {
            fontSize: '74px',
            fontWeight: 800,
            letterSpacing: '-2px',
            lineHeight: 1.05,
            background: 'linear-gradient(135deg, #2dd4bf 0%, #06b6d4 50%, #8b5cf6 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '32px',
          },
          children: '& AI-native apps.',
        },
      },
      {
        type: 'div',
        props: {
          style: { fontFamily: 'JBMono', fontSize: '22px', color: 'rgba(45,212,191,0.85)', marginBottom: 'auto' },
          children: 'Seasoned IT meets AI velocity. Shipping from the Indian Ocean.',
        },
      },
      { type: 'div', props: { style: { fontSize: '20px', fontWeight: 700, color: '#94a3b8' }, children: 'By Arthur Mrowiec  ·  kaestria.fr' } },
    ],
  },
};

const svg = await satori(node, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
    { name: 'Inter', data: interExtra, weight: 800, style: 'normal' },
    { name: 'JBMono', data: jbm, weight: 500, style: 'normal' },
  ],
});

const png = await sharp(Buffer.from(svg)).png().toBuffer();
fs.writeFileSync(OUT, png);
console.log(`OG image written to ${path.relative(PROJECT_ROOT, OUT)} (${(png.length / 1024).toFixed(0)} KB)`);
