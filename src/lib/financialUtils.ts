export interface TaxCalculationResult {
  subtotal: number;
  taxAmount: number;
  total: number;
}

export function calculateSalesTax(subtotal: number, taxRatePercentage: number): TaxCalculationResult {
  if (subtotal < 0 || taxRatePercentage < 0) {
    throw new Error("Subtotal and tax rate percentage must be non-negative.");
  }
  const taxAmount = Number(((subtotal * taxRatePercentage) / 100).toFixed(2));
  const total = Number((subtotal + taxAmount).toFixed(2));
  return { subtotal, taxAmount, total };
}

export function formatCurrency(amount: number, currencyCode: string = 'USD', locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}
