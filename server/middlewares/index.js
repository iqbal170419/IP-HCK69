const { verifyToken } = require("../helpers");
const { User } = require("../models");

const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case "SequelizeUniqueConstraintError":
        case "SequelizeValidationError":
        case "JsonWebTokenError":
            res.status(400).json({ message: err.errors[0].message });
            break;

        case "Unauthorized":
        case "Game not found":
        case "Email already registered":
        case "Invalid email or password":
            res.status(err.code).json({ message: err.name });
            break;

        default:
            console.log(err);
            res.status(500).json({ message: "Internal server Error" });
            break;
    }
};

const authentication = async (req, res, next) => {
    try {
        if (!req.headers.authorization) throw { name: "Unauthorized", code: 401 };

        const [type, token] = req.headers.authorization.split(" ");
        if (type !== "Bearer") throw { name: "Unauthorized", code: 401 };

        const payload = verifyToken(token);
        const user = await User.findByPk(payload.id);
        if (!user) throw { name: "Unauthorized", code: 401 };

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { authentication, errorHandler };
