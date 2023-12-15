class BaseError extends Error {
  constructor(name, statusCode) {
    super()
    this.name = name
    this.statusCode = statusCode
  }
}

export default BaseError
