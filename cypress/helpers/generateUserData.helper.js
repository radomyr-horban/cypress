// TODO: transform into a class

export function generateUserData() {
  const randomString = (length) => {
    let result = ''

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?'

    const charactersLength = characters.length
    const symbolsLength = symbols.length

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const randomEmail = `${randomString(8)}@gmail.com`

  //todo: updated the `quick fix`
  const randomPassword = `${randomString(12)}A!1`
  //!
  // Password must contain at least one number.
  // Password must contain at least one symbol.
  const randomFirstName = randomString(6)
  const randomLastName = randomString(6)

  return {
    email: randomEmail,
    password: randomPassword,
    firstName: randomFirstName,
    lastName: randomLastName,
  }
}
