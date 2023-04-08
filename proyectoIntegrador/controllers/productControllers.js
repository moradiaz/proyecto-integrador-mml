const data= require("../data/data")

const productControllers =  {
    agregar: function (req,res) {
        return res.render("product-add")
        
    },
    producto: function (req, res) {
        return res.render('product', {data:data})
    }
}

module.exports = productControllers;