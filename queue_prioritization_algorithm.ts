function calculatePriority(item: QueueItem): number {

  let score = 0;

  if(item.priority === "critical")
    score += 100;

  if(item.priority === "high")
    score += 50;

  if(item.dueDate)
    score += dueDateWeight(item.dueDate);

  if(item.type === "call")
    score += 20;

  if(item.type === "customer_escalation")
    score += 75;

  return score;
}
