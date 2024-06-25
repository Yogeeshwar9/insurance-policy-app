const express = require('express')
const router = express.Router()
const controller = require('../controller/controller.js')
const auth = require('../authentication.js')


router.post('/adminLogin',controller.adminLogin)
router.get('/logout',controller.logout)
router.post('/userlogin',controller.userlogin)
router.post('/insertpolicy',controller.policy)
router.post('/userdata',controller.userdata)
router.get('/userPolicies',controller.userPolicies)
router.get('/policy',auth,controller.adminPolicy)
router.delete('/deletepolicy/:id',auth,controller.deletePolicy)
router.get('/policy/:id',controller.policyById)
router.put('/policy/:id',controller.putById)
router.get('/userdetails',controller.userDetails)
router.put('/updatePassword',controller.updatePassword)
router.post('/login',controller.login)

module.exports ={Router:router}
