// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	id: number;
	sentences: string;
	number_of_people: number;
};

type Response = {
	message: string;
	data?: Data;
	error?: string;
};

const dummy = {
	message: 'OK',
	data: {
		id: 2,
		sentences:
			'\u003cb\u003egerrad:\u003c/b\u003e I was put on this earth to do one thing. \u003cbr\u003e \u003cb\u003e%!s(MISSING):\u003c/b\u003e Luckily I forgot what it was so I can do whatever I want.',
		number_of_people: 1,
	},
};

export default async (
	request: NextApiRequest,
	response: NextApiResponse<Response>
) => {
	const {
		query: { name, number },
		method,
	} = request;
	console.log(name, number, method);

	return response.status(200).json(dummy);
};
