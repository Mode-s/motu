// src/scripts/animations.ts
import { animate, inView, stagger } from 'motion';

export const initAnimations = (): void => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // ── Hero: ロゴ フェードイン ──
  animate(
    '.hero-content .logo-wrap',
    { opacity: [0, 1], y: [20, 0] },
    { duration: 1.0, ease: 'easeOut', delay: 0.3 }
  );

  // ── Hero: ナビリンク スタガー（左からスライドイン）──
  const navLinks = document.querySelectorAll<HTMLElement>('.hero-nav-link');
  navLinks.forEach((link, i) => {
    animate(
      link,
      { opacity: [0, 1], x: [-16, 0] },
      { duration: 0.6, ease: 'easeOut', delay: 0.6 + i * 0.1 }
    );
  });

  // ── 各セクション見出し フェードアップ ──
  inView(
    '.section-title',
    (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.7, ease: 'easeOut' }
      );
    },
    { margin: '-10% 0px -10% 0px' }
  );

  // ── About: テキスト スタガー ──
  inView(
    '.about .section-body',
    (element) => {
      const texts = element.querySelectorAll('.text');
      animate(
        texts,
        { opacity: [0, 1], y: [16, 0] },
        { duration: 0.6, ease: 'easeOut', delay: stagger(0.15) }
      );
    },
    { margin: '-10% 0px -10% 0px' }
  );

  // ── Commitment: 各カード フェードアップ（1枚ずつ個別発火）──
  inView(
    '.craftsmanship, .craftsmanship-bg',
    (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [32, 0] },
        { duration: 0.8, ease: 'easeOut' }
      );
    },
    { margin: '-5% 0px -5% 0px' }
  );

  // ── Menu: 画像 フェードアップ ──
  inView(
    '.menu-image',
    (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.7, ease: 'easeOut' }
      );
    },
    { margin: '-10% 0px -10% 0px' }
  );

  // ── Menu: テキスト フェードイン ──
  inView(
    '.menu .text',
    (element) => {
      animate(
        element,
        { opacity: [0, 1] },
        { duration: 0.6, ease: 'easeOut', delay: 0.2 }
      );
    },
    { margin: '-10% 0px -10% 0px' }
  );

  // ── Contact: ボタン スタガー ──
  inView(
    '.contact .actions',
    (element) => {
      const buttons = element.querySelectorAll('.button');
      animate(
        buttons,
        { opacity: [0, 1], y: [16, 0] },
        { duration: 0.5, ease: 'easeOut', delay: stagger(0.15) }
      );
    },
    { margin: '-10% 0px -10% 0px' }
  );

  // ── Info: グリッド フェードアップ ──
  inView(
    '.info-grid',
    (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.7, ease: 'easeOut' }
      );
    },
    { margin: '-10% 0px -10% 0px' }
  );
};