const { compared, signToken } = require("../helpers");
const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");
const google_oauth_client = new OAuth2Client();

class UserController {
    static async register(req, res, next) {
        try {
            const { userName, email, password } = req.body;

            const existingUser = await User.findOne({
                where: { email },
            });
            if (existingUser) {
                throw { name: "Email already registered", code: 400 };
            }

            const newUser = await User.create({ userName, email, password });

            const responseData = {
                id: newUser.id,
                userName: newUser.userName,
                email: newUser.email,
            };

            return res.status(201).json(responseData);
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw { name: "Invalid email or password", code: 401 };
            }

            const passwordMatch = compared(password, user.password);
            if (!passwordMatch) {
                throw { name: "Invalid email or password", code: 401 };
            }
            const accessToken = signToken({ id: user.id, email: user.email });

            return res.status(200).json({
                accessToken,
                id: user.id,
                email: user.email,
                userName: user.userName,
            });
        } catch (error) {
            next(error);
        }
    }

    static async googleLogin(req, res, next) {
        try {
            let google_token = req.headers.google_token;
            let { payload } = await google_oauth_client.verifyIdToken({
                idToken: google_token,
                audience: process.env.GOOGLE_CientId,
            });

            const [user, created] = await User.findOrCreate({
                where: {
                    email: payload.email,
                },
                defaults: {
                    email: payload.email,
                    userName: payload.name,
                    password: Math.random() * 5000,
                },
                hooks: false,
            });

            const accessToken = signToken({ id: user.id, email: user.email });
            console.log(accessToken, ">>>>>>>>>>>>>>>>>>>>>>");
            return res.status(200).json({
                accessToken,
                id: user.id || created.id,
                email: user.email || created.email,
                userName: user.userName || created.userName,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = UserController;
