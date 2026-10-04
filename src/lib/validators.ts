export function isValidName(value: string): boolean {
  return /^[A-Za-z][A-Za-z .'-]{1,49}$/.test(value.trim());
}

export function isValidMobile(dialCode: string, value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return dialCode === "+91" ? digits.length === 10 : digits.length >= 6 && digits.length <= 14;
}

export function isValidEmail(value: string): boolean {
  const v = value.trim();
  return v.length <= 100 && /^[\w.+-]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/.test(v);
}
