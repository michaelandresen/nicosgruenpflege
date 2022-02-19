export function toPhoneLink(phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/^0/, '+49').replace(/ /g, '')}`
}
