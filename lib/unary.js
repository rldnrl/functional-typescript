const unary = (fn) => fn.length === 1 ? fn : arg => fn(arg)
