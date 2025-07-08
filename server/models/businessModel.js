const HEADLINES = [
  "Why %NAME% is %LOCATION%'s Sweetest Spot in 2025",
  "%NAME% Sets the Gold Standard for Service in %LOCATION%",
  "Inside %LOCATION%'s Fast‑Rising Star: %NAME%",
  "%NAME% Reinvents Local Business in %LOCATION%—Here’s How",
];

const pickHeadline = (name, location) =>
  HEADLINES[Math.floor(Math.random() * HEADLINES.length)]
    .replace(/%NAME%/g, name)
    .replace(/%LOCATION%/g, location);

export const generateBusinessData = (name, location) => ({
  rating: +(Math.random() * 1.5 + 3.5).toFixed(1), // 3.5 – 5.0
  reviews: Math.floor(Math.random() * 300 + 20), // 20 – 319
  headline: pickHeadline(name, location),
});

export const regenerateHeadline = (name, location) => ({
  headline: pickHeadline(name, location),
});
