module.exports = function checkRole(role) {
    return (req, res, next) => {
        if (!req.user){
            res.json({ message: 'No user found in token' });
        }
        else{
            console.log(req.user);
            const { roles } = req.user;
  
            if (roles.includes(role)) {
                next();
            } else {
                res.status(403).json({ message: 'Unauthorized access' });
            }   
        }
    };
}


