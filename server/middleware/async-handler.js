/** Async Handler is simple middleware for handling exceptions inside async
 *  routes and passing them to your express error handlers.
 *
 *  A combinator is a higher-order function that uses only function application
 *  and earlier defined combinators to define a result from its arguments.
*/
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
