const express = require('express');
const app = express();

const productRoute = express.Router();
const registerRoute = express.Router();

let product = require('../model/Product')
let register = require('../model/Register')

//Add product
productRoute.route('/add-product-admin').post((req, res, next) =>{
    product.create(req.body, (error, data) =>{
        if (error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})

//get all product
productRoute.route('/').get((req, res, ) =>{
    product.find((error, data) =>{
        if (error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})

//get product
productRoute.route('/read-product/:id').get((req, res, ) =>{
    product.findById(req.params.id, (error, data) =>{
        if (error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})

// Update product
productRoute.route('/update-product/:id').put((req, res, next ) =>{
    product.findByIdAndUpdate(req.params.id,{
        $set: req.body
    }, (error, data) => {
        if (error){
            return next(error);
            console.log(error)
        }else{
            res.json(data);
            console.log('Book update Successfully');
        }
    })
})

//delete product
productRoute.route('/delete-product/:id').delete((req, res, next) =>{
    product.findByIdAndRemove(req.params.id, (error, data) =>{
        if (error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            })
        }
    })
})

//register
registerRoute.route('/register').post((req, res, next) =>{
    register.create(req.body, (error, data) =>{
        if(error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})


module.exports = productRoute;