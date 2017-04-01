/**
 * Created by iZel on 3/22/17.
 */

module.exports =function parent(router,Model){

    router.get('/',function (req,res) {
        Model.find(function (err,resp) {
            if(err) handleError(res)(err);
            return res.json(resp);
        });
    });

    router.post('/',function (req,res) {
        let body= req.body;
        let model=new Model(body);
        model.save(function (err,model) {
            if(err) return handleError(res)(err);
            return res.json(model)
        })
    });

    router.put('/',function (req,res) {
        let query = {
            _id:req.body._id
        };
        Model.findOneAndUpdate(query,req.body, {new:true},function (err, doc) {
            if (err) handleError(res)(err);
            res.json(doc);
        })
    });

    function handleError(res) {
        return function(error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    return router;
};

