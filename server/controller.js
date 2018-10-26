module.exports = {
create:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {name, price, image_url} = req.body;
        dbInstance.create().then(()=>
        res.status(200).send({message: "It worked!!! Woohoo!!!"})
        ).catch(err=>{
            res.status(500).send({errorMessage: "Things went wrong"});
            console.log('err is ',err);
        });
    },
    getAll: (req,res,next)=>{
        const dbInstance = req.app.get('db');
        dbInstance.read_all().then(products=>
            res.status(200).send(products)
        ).catch(err=>{
            res.status(500).send({errorMessage: "Things went wrong"});
            console.log('err is ',err);
        })
    }
}