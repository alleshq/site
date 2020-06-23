import sessionAuth from "../../../util/sessionAuth";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SK);

export default async (req, res) => {
	const {user} = await sessionAuth(req.headers.authorization);
	if (!user) return res.status(401).json({err: "badAuthorization"});

	// No Customer ID
	if (!user.stripeCustomerId)
		return res.status(200).json({
			billingData: null
		});

	// Get Customer
	const customer = await stripe.customers.retrieve(user.stripeCustomerId);

	// Response
	res.json({
		billingData: {
			email: customer.email
		}
	});
};
