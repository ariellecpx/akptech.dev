export const imgPolicy = { maxWidth: 1600, formats: ['image/avif', 'image/webp'], quality: 75, lqip: true };

export const fixedAspect = (w: number, h: number) => ({ style: { aspectRatio: `${w}/${h}` } });