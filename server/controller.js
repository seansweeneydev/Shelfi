module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
            .then(inventory => {
                res.status(200).send(inventory)
            })
    },
    
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const { name, price, image_url } = req.body
        db.create_student([name, price, image_url])
        .then(product => {
            console.log('Product added')
            res.status(200).send(product)
        })
    },
    
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const { name, price, image_url } = req.body
        const { id } = req.params
        db.update_product([name, price, image_url, id])
        .then(product => {
            console.log('Product updated')
            res.status(200).send(product)
        })       
    },
    
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product([id])
        .then(product => {
            console.log('Product deleted')
            res.status(200).send(student)
        })
    }
}