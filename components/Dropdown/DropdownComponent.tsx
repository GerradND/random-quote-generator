import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface DropdownProps {
	num: number;
	setNum: Dispatch<SetStateAction<number>>;
}

export default function DropdownComponent({ num, setNum }: DropdownProps) {
	const choices = Array.from(Array(6).keys()).map((x) => x + 1);

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setNum(parseInt(event.target.value));
	};

	return (
		<div>
			<select
				className="inline-flex w-full justify-center rounded-md border-2 border-black bg-white px-2 py-2 my-2 text-gray-700 shadow-sm hover:bg-gray-50"
				value={num}
				onChange={handleChange}
			>
				{choices.map((value) => (
					<option key={value}>{value}</option>
				))}
			</select>
		</div>
	);
}
