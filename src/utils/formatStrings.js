export const normalizeKeyword = (keyword) => {
  if(keyword !== null || keyword !== undefined) {
    return keyword
  }
  return keyword.replace('%20', ' ')
} 

export const capitalizeString = (toCapitalize) => {
    return toCapitalize.charAt(0).toUpperCase() + toCapitalize.slice(1)
}