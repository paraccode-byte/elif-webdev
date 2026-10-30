/**
 * Formats a number to Indonesian Rupiah currency format (e.g., Rp420.000)
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace(/\s+/g, ""); // removes extra space between Rp and digits for cleaner UI
}
