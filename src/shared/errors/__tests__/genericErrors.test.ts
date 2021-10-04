import { genericErrors } from '../genericErrors'

describe('Generic Errors', () => {
  it('should return status code 400 if missing required values', () => {
    const error = genericErrors('Missing required values')

    expect(error).toMatchObject({
      code: 400,
      message: 'Missing required values'
    })
  })

  it('should return status code 400 if value too long', () => {
    const error = genericErrors('Value too long')

    expect(error).toMatchObject({
      code: 400,
      message: 'Value too long'
    })
  })

  it('should return status code 400 if invalid data', () => {
    const error = genericErrors('Invalid data')

    expect(error).toMatchObject({
      code: 400,
      message: 'Invalid data'
    })
  })

  it('should return status code 500 if internal error', () => {
    const error = genericErrors('Internal error')

    expect(error).toMatchObject({
      code: 500,
      message: 'Internal error'
    })
  })
})
