

var authenticate = require('../authenticate');




dishRouter.route('/')


.post(authenticate.verifyUser, (req, res, next) => {


})

.put(authenticate.verifyUser, (req, res, next) => {



})

.delete(authenticate.verifyUser, (req, res, next) => {



});


dishRouter.route('/:dishId')


.post(authenticate.verifyUser, (req, res, next) => {


})

.put(authenticate.verifyUser, (req, res, next) => {



})

.delete(authenticate.verifyUser, (req, res, next) => {


});


dishRouter.route('/:dishId/comments')


.post(authenticate.verifyUser, (req, res, next) => {



})

.put(authenticate.verifyUser, (req, res, next) => {



})

.delete(authenticate.verifyUser, (req, res, next) => {



});


dishRouter.route('/:dishId/comments/:commentId')


.post(authenticate.verifyUser, (req, res, next) => {



})

.put(authenticate.verifyUser, (req, res, next) => {



})

.delete(authenticate.verifyUser, (req, res, next) => {



});


. . .