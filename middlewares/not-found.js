const notFound = (req, res) => res.status(404).send('Route inexistant')
module.exports = notFound