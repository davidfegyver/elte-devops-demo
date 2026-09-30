const SEGMENTS = 10;

export function formatBattery(percent) {
  if (!Number.isInteger(percent) || percent < 0 || percent > 100) {
    return "Unavailable";
  }
  const filled = Math.round((percent / 100) * SEGMENTS);
  return `[${"#".repeat(filled)}${"-".repeat(SEGMENTS - filled)}] ${percent}%`;
}
