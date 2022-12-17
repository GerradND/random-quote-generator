// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	id: number;
	sentences: string;
	number_of_people: number;
};

const dummy = {
	id: 1,
	sentences:
		"<b>Rafi:</b> I don't go looking for trouble. Trouble usually finds me first.",
	number_of_people: 1,
};

export default async (
	request: NextApiRequest,
	response: NextApiResponse<Data>
) => {
	const {
		query: { name, number },
		method,
	} = request;
	console.log(name, number, method);

	return response.status(200).json(dummy);
};
