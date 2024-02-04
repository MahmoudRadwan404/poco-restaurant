export default function validation(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  password: string,
  confirmPassword: string
) {
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !password ||
    !confirmPassword
  ) {
    return false;
  } else if (password != confirmPassword) {
    return false;
  }
  return true;
}
