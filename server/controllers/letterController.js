const { Letter, Transaction } = require("../models");

class LetterController {
    static async myGame(req, res, next) {
        try {

            console.log(req.user.id);
            const data = await Transaction.findAll({
                where: { userId: +req.user.id },
                include: [
                    {
                        model: Game,
                    },
                ],
            });

            console.log(data);
            res.json(data);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async game(req, res, next) {
        try {
            let { sortBy, filterBy } = req.query;

            sortBy = sortBy || "id";
            filterBy = filterBy || "";

            const whereClause = filterBy
                ? {
                    title: {
                        [Op.iLike]: `%${filterBy}%`,
                    },
                }
                : {};

            const orderClause =
                sortBy === "title" || sortBy === "price"
                    ? [[sortBy, "asc"]]
                    : [["id", "asc"]];

            const games = await Letter.findAndCountAll({
                where: whereClause,
                order: orderClause,
            });

            res.status(200).json(games.rows);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async gameId(req, res, next) {
        try {
            const games = await Letter.findByPk(req.params.id);

            if (!games) {
                throw { name: "Game not found", code: 404 };
            }

            res.status(200).json(games);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    static async getFav(req, res, next) {
        try {
            const { id } = req.user;
            const favorite = await Favorite.findAll({
                where: {
                    UserId: id,
                },
                include: {
                    model: Letter
                },
            });

            res.status(200).json(favorite);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    static async addFav(req, res, next) {
        try {
            const { id } = req.user;
            const { gameId } = req.params;

            const findData = await Letter.findByPk(gameId);
            if (!findData) {
                throw { name: "NotFound" };
            }

            const dataFav = await Favorite.findOne({
                where: {
                    UserId: id,
                    gameId: gameId,
                },
            });

            if (dataFav) {
                throw { name: "GameAdded" };
            }

            const newFav = await Favorite.create({
                UserId: id,
                gameId: GameId,
            });

            //   console.log(newFav, ">>>>>>>>");
            res.status(201).json(`${findData.name} Added to Favorites`);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async editFav(req, res, next) {
        try {

            const { gameId } = req.params;

            const game = await Letter.findByPk(gameId);


            if (!game) {
                throw { name: "NotFound" };
            }


            const updated = await game.update({
                price
            });

            res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }



    static async deleteFav(req, res, next) {
        try {
            const { id } = req.params;
            console.log(id, "<<<<<<");

            const findGame = await Letter.findByPk(id);
            if (!findGame) {
                throw {
                    name: "NotFoundId",
                    id,
                };
            }

            await findGame.destroy();

            res
                .status(200)
                .json({ message: `Successfully Removed From My Favorite` });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = LetterController;
