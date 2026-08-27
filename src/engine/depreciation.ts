// ERPCore Asset Depreciation Engine

import { Asset } from '../types';

export interface DepreciationSchedulePeriod {
  year: number;
  beginningValue: number;
  depreciationExpense: number;
  accumulatedDepreciation: number;
  endingValue: number;
}

export function calculateStraightLineDepreciation(asset: Asset): DepreciationSchedulePeriod[] {
  const schedule: DepreciationSchedulePeriod[] = [];
  const depreciableAmount = asset.purchaseCost - asset.salvageValue;
  const annualDepreciation = depreciableAmount / Math.max(1, asset.usefulLifeYears);

  let currentBookValue = asset.purchaseCost;
  let accumulated = 0;
  const startYear = new Date(asset.purchaseDate).getFullYear();

  for (let i = 1; i <= asset.usefulLifeYears; i++) {
    const expense = Math.min(annualDepreciation, currentBookValue - asset.salvageValue);
    accumulated += expense;
    const endingVal = currentBookValue - expense;

    schedule.push({
      year: startYear + i - 1,
      beginningValue: currentBookValue,
      depreciationExpense: expense,
      accumulatedDepreciation: accumulated,
      endingValue: Math.max(asset.salvageValue, endingVal)
    });

    currentBookValue = endingVal;
  }

  return schedule;
}

export function calculateDecliningBalanceDepreciation(asset: Asset, factor: number = 2.0): DepreciationSchedulePeriod[] {
  const schedule: DepreciationSchedulePeriod[] = [];
  const rate = (1 / Math.max(1, asset.usefulLifeYears)) * factor;

  let currentBookValue = asset.purchaseCost;
  let accumulated = 0;
  const startYear = new Date(asset.purchaseDate).getFullYear();

  for (let i = 1; i <= asset.usefulLifeYears; i++) {
    let expense = currentBookValue * rate;
    if (currentBookValue - expense < asset.salvageValue) {
      expense = Math.max(0, currentBookValue - asset.salvageValue);
    }
    accumulated += expense;
    const endingVal = currentBookValue - expense;

    schedule.push({
      year: startYear + i - 1,
      beginningValue: currentBookValue,
      depreciationExpense: expense,
      accumulatedDepreciation: accumulated,
      endingValue: endingVal
    });

    currentBookValue = endingVal;
  }

  return schedule;
}
