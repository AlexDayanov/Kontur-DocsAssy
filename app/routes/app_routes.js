module.exports = function (app, db) {
    app.post('/docs', (req, res) => {
        const document = {text: req.body.body ,title: req.body.title};
        db.collection('documents').insert(document, (err, result)=>{
            if(err){
                res.send('WTF.. Error has occurred!')
            }else{
                res.send(result.ops[0]);
            }
        })
    });
};