import React from "react";
import { Link } from "react-router-dom";

import { Body } from "./styles";

import Button from "../../components/Button";
import Title from "../../components/Title";

const Dashboard = () => {
	return (
		<>
			<Body>
				<Title text={`Wellcome to Dashboard 🙌`} />
				<Link to="/" style={{ textDecoration: "none" }}>
					<Button text="Logout 🡺" />
				</Link>
			</Body>
		</>
	);
};

export default Dashboard;
