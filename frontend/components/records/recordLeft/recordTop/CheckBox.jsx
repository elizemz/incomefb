import React from "react";

export default function Checkbox({ name }) {
	return (
		<div className="flex my-5 gap-2">
			<input type="checkbox" checked="checked" className="checkbox ml-3 " />
			<p>{name}</p>
		</div>
	);
}
