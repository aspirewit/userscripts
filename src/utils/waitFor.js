const waitFor = (isReady, afterReady, options = {}) => {
  const { maxAttempts = 5, milliseconds = 1000 } = options
  let attempts = 0

  const timer = setInterval(() => {
    if (attempts >= maxAttempts) {
      return clearInterval(timer)
    }
    attempts += 1

    if (isReady()) {
      clearInterval(timer)
      afterReady()
    }
  }, milliseconds)
}

export default waitFor
