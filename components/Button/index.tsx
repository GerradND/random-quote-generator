import React from 'react';
import { toast } from 'react-toastify';

interface ButtonProps {
	text: string;
	value: string;
	getData: () => {};
}

const Button: React.FC<ButtonProps> = ({ text, value, getData }) => {
	return (
		<button
			onClick={() => {
				value.includes(',')
					? toast.error("Don't use comma on your name!")
					: getData();
			}}
			className="bg-gray-300 border-2 border-black rounded px-3 py-1 mx-2 my-2 hover:brightness-95 duration-75"
		>
			{text}
		</button>
	);
};

export default Button;
