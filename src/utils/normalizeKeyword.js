export const normalizeKeyword = (keyword) => {
  if(keyword !== null || keyword !== undefined) {
    return keyword
  }
  return keyword.replace('%20', ' ')
} 