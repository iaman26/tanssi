export function calculateBlocksUntilSessionStart(
  targetSession: number,
  block: number,
  blocksPerSession: number,
  knownSession: number,
  knownBlock: number,
): number {
  validateIsPositiveInt('targetSession', targetSession);
  validateIsPositiveInt('block', block);
  validateIsPositiveInt('blocksPerSession', blocksPerSession);
  validateIsPositiveInt('knownSession', knownSession);
  validateIsPositiveInt('knownBlock', knownBlock);

  const sessionsCount = targetSession - knownSession;
  const sessionStartingBlock = knownBlock + sessionsCount * blocksPerSession;
  const remainingBlocksCount = sessionStartingBlock - block;

  return remainingBlocksCount < 0 ? 0 : remainingBlocksCount;
}

function validateIsPositiveInt(
  tag: string,
  value: number,
): asserts value is number {
  if (value < 0) {
    throw new RangeError(
      `${tag} must be a positive integer, received: ${value}`,
    );
  }
}
