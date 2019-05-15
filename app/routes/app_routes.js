let ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

    app.put('/documents/:id', (req, res) => {
        const id = req.params.id;
        const query = {"_id": new ObjectID(id)};
        const update = {$set: {text: req.body.body, title: req.body.title}};
        db.collection('documents').updateOne(query, update).then(result => {
            return(result);
        })
    });

    app.delete('/documents/:id', (req, res) => {
        const id = req.params.id;
        const filter = {"_id": new ObjectID(id)};
        db.collection('documents').deleteOne(filter, (err, result) => {
            if (err) {
                res.send('WTF with DELETE? An Error has occurred: ' + err)
            } else {
                res.send(result);
            }
        })
    });
    app.get('/documents/:id', (req, res) => {
        const id = req.params.id;
        const query = {"_id": new ObjectID(id)};
        db.collection('documents').findOne(query, (err, document) => {
            if (err) {
                res.send('WTF with GET? An Error has occurred!')
            } else {
                res.send(document);
            }
        })
    });
    app.post('/documents', (req, res) => {
        const document = {text: req.body.body, title: req.body.title};
        db.collection('documents').insert(document, (err, result) => {
            if (err) {
                res.send('WTF with POST? An Error has occurred!')
            } else {
                res.send(result.ops[0]);
            }
        })
    });
};