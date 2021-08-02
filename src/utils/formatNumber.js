export const formatNumber = (numberToFormat) => {
  const formatter = new Intl.NumberFormat('es-ES')

  return formatter.format(numberToFormat)
}