
export async function comparePassword (password: string, hashedPassword: string): Promise<void> {
  let unhashed = ''
  let salt = 150

  for (const character of hashedPassword) {
    unhashed += String.fromCharCode(character.charCodeAt(0) - salt)
    salt++
  }

  if (password !== unhashed) throw new Error('Incorrect password')
}
