import { describe, it, expect } from 'vitest';
import { calculateStraightLineDepreciation, calculateDecliningBalanceDepreciation } from '../src/engine/depreciation';
import { INITIAL_ASSETS } from '../src/data/seedData';

describe('Asset Depreciation Engine Unit Tests', () => {
  it('should calculate straight-line depreciation equal annual expenses', () => {
    const asset = INITIAL_ASSETS[0];
    const schedule = calculateStraightLineDepreciation(asset);

    expect(schedule.length).toBe(asset.usefulLifeYears);
    const expectedAnnual = (asset.purchaseCost - asset.salvageValue) / asset.usefulLifeYears;
    expect(schedule[0].depreciationExpense).toBeCloseTo(expectedAnnual, 2);
    expect(schedule[schedule.length - 1].endingValue).toBeCloseTo(asset.salvageValue, 2);
  });

  it('should calculate declining balance depreciation with accelerated early expenses', () => {
    const asset = INITIAL_ASSETS[0];
    const schedule = calculateDecliningBalanceDepreciation(asset);

    expect(schedule.length).toBe(asset.usefulLifeYears);
    expect(schedule[0].depreciationExpense).toBeGreaterThan(schedule[schedule.length - 1].depreciationExpense);
  });
});
