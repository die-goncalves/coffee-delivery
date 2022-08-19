type formatPriceType = {
  options: Intl.NumberFormatOptions
  number: number
}

export function formatPrice({ options, number }: formatPriceType) {
  return new Intl.NumberFormat('pt-br', {
    ...options
  }).format(number)
}
