const   express =   require('express'),
        dotenv  =   require('dotenv').config(),
        app     =   express(),
        DbRouter    =   require('./routes/programmingLenguages');
app.use(express.json());     
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.json('ok');
});
app.use('/db', DbRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    return;
});
app.listen(3000, () => {
    console.log('app running');
})