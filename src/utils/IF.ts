type TConditionValue = boolean | string | number | undefined | null | Array<any>;

type TCondition = TConditionValue | (() => TConditionValue);

/**
 * Conditional result.
 *
 * @param condition Condition to evaluate.
 * @returns True on TRUEFY condition.
 */
export function evaluateIf(condition: TCondition): boolean {
  if (!condition) {
    return false;
  }

  if (Array.isArray(condition)) {
    return Boolean(condition.length);
  }

  if (condition instanceof Function) {
    return evaluateIf(condition());
  }

  return Boolean(condition);
}

/**
 * Conditional result.
 *
 * @param condition Condition to evaluate.
 * @param trueResult True result.
 * @param falseResult False result.
 * @returns The result.
 */
export function IF<TR = any, TF = any>(
  condition: TCondition,
  trueResult: TR,
  falseResult: TF,
): TR | TF {
  return evaluateIf(condition) ? trueResult : falseResult;
}

/**
 * Conditional result.
 *
 * @param condition Condition to evaluate.
 * @param trueResult True result.
 * @returns Then function.
 */
export function IIF<TR = any, TF = any>(
  condition: TCondition,
): {
  /**
   * @param trueResult True result.
   * @returns Else function.
   */
  THEN: (trueResult: TR) => {
    /**
     * @param falseResult False result.
     * @returns The result.
     */
    ELSE: (falseResult: TF) => TR | TF;
  };
} {
  return {
    THEN(trueResult) {
      return {
        ELSE(falseResult) {
          return IF(condition, trueResult, falseResult);
        },
      };
    },
  };
}
