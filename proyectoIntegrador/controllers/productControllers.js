const productControllers =  {
    agregar: function (req,res) {
        return res.render("product-add")
        
    },
    producto: function (req, res) {
        return res.render('product')
    }
}

module.exports = productControllers;