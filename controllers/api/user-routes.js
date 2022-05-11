const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Armor, Character, Consumables, Inventory, User, Weapons } = require('../../models');

// create user route
router.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
    
        res.json(userData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// log-in route
router.post('/login', (req, res) => {
    User.findOne({
        where: req.body.username
    })
    .then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }
        const validatePw = userData.checkPassword(req.body.password)

        if (!validatePw) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
        
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    })
})

// log-out route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    }
    else {
        res.status(404).end()
    }
})

router.get('/', (req, res) => {
    User.findAll({
        include: {
            model: User
        }
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User
        }
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
    });

module.exports = router;
