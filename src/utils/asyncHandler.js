const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// Using this middleware function helps handle async requests in a clean and simple way, reducing the need to write boilerplate error handling for each Express route.
