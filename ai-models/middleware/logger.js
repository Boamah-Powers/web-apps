export function logger(req, _, next) {
    console.log(`Method: ${req.method}`);
    console.log(`Path: ${req.path}`);
    console.log(req.body);

    next();
}