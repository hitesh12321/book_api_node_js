
const fs = require('fs');
exports.middlewareFunction = function(req, res, next) {
const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
fs.appendFileSync('logs.txt', log, 'utf-8');
console.log(log);

    next();
}