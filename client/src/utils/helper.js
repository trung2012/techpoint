export const limitString = (string) => {
  const maxLength = 30

  let trimmedString = string.substring(0, maxLength)

  return trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
}

