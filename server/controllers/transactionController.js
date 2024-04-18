const midtransClient = require("midtrans-client");
const { Transaction, Letter } = require("../models");

class TransactionController {
    static async InitiateMidTrans(req, res, next) {
        try {
            const { id } = req.params;

            const data = await Letter.findByPk(id);

            const userId = req.user;

            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: process.env.API_KEY_serverKey,
                clientKey: process.env.API_KEY_clientKey,
            });

            const orderId = Math.random().toString();

            const trxAmount = data.price;

            const parameter = {
                transaction_details: {
                    order_id: orderId,
                    gross_amount: trxAmount,
                },
                credit_card: {
                    secure: true,
                },
                customer_details: {
                    email: req.user.email,
                    first_name: req.user.userName,
                },
            };

            const transaction = await snap.createTransaction(parameter);
            console.log(transaction);
            let transactionToken = transaction.token;
            console.log(transactionToken);

            await Transaction.create({
                userId: userId.id,
                gameId: data.id,
                totalAmount: trxAmount,
                orderId: orderId,
                transactionToken: transactionToken,
                transactionDate: new Date(),
            });

            res.json({ message: "Transaction created", transactionToken, orderId });
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
}

module.exports = TransactionController;
