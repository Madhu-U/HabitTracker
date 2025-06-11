export const computeStreak = (
  completedDates: string[],
  frequency: "daily" | "weekly"
): number => {
  if (completedDates.length === 0) return 0;

  const sorted = [...completedDates].sort();
  let streak = 1;

  for (let i = sorted.length - 1; i > 0; i--) {
    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);
    const diffInDays =
      (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);
    const expectedGap = frequency === "daily" ? 1 : 7;

    if (diffInDays === expectedGap) {
      streak++;
    } else if (diffInDays > expectedGap) {
      break;
    }
  }
  return streak;
};
