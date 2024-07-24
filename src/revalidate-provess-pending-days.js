
export function getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth, revalidateProcessLastExecutionDayOfMonth) {
  const WARMUP_DAYS = 2; 
  let lastNotRevalidatedDayOfMonth = today - WARMUP_DAYS;
  let startPendingForRevalidateDayOfMonth = revalidateProcessLastExecutionDayOfMonth + 1;
  let lastPendingForRevalidateDayOfMonth = Math.min(mainProcessLastExecutionDayOfMonth, lastNotRevalidatedDayOfMonth);

  if (startPendingForRevalidateDayOfMonth > 30 || startPendingForRevalidateDayOfMonth < 1 || lastPendingForRevalidateDayOfMonth < 1) {
      return [];
  }

  let pendingDays = [];
  if (revalidateProcessLastExecutionDayOfMonth === mainProcessLastExecutionDayOfMonth && today - WARMUP_DAYS > mainProcessLastExecutionDayOfMonth) {
      for (let i = startPendingForRevalidateDayOfMonth; i <= today; i++) {
          pendingDays.push(i);
      }
  } else {
      for (let i = startPendingForRevalidateDayOfMonth; i <= lastPendingForRevalidateDayOfMonth; i++) {
          pendingDays.push(i);
      }
  }

  return pendingDays;
}
