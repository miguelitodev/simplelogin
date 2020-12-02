import React from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

import {
	Header,
	LeftContent,
	TextTitle,
	RightContent,
	Text,
	ButtonLink,
	Body,
	FormContainer,
	InputContainer,
	Placeholder,
	InputEmail,
	InputPassword,
	Button,
} from "./styles";

import Title from "./../../components/Title";

const Login = () => {
	const [redirecting, setRedirecting] = React.useState(false);

	function handleLogin(email, password) {
		if (email === "" || password === "") {
			alert("Campos em branco, por favor preecha eles");
		} else {
			axios({
				method: "POST",
				url: "http://localhost:3333/login",
				data: {
					email: email,
					password: password,
				},
			}).then((response) => {
				if (response.data.success) {
					setRedirecting(true);
					alert(response.data.message);
				} else {
					alert(response.data.message);
				}
			});
		}
	}

	if (redirecting) {
		return <Redirect to="/Dashboard" />;
	}

	return (
		<>
			<Header>
				<LeftContent>
					<TextTitle>Login Screen</TextTitle>
				</LeftContent>
				<RightContent>
					<Text>
						Don't have an account?
						<Link to="/SignUp" style={{ textDecoration: "none" }}>
							<ButtonLink>Create an account</ButtonLink>
						</Link>
					</Text>
				</RightContent>
			</Header>

			<Body>
				<FormContainer>
					<Title text="Welcome Back" />
					<InputContainer>
						<Placeholder>Email Adress</Placeholder>
						<InputEmail />
					</InputContainer>
					<InputContainer>
						<Placeholder>Password</Placeholder>
						<InputPassword />
					</InputContainer>
					<Button
						onClick={() => {
							let email = document.getElementById("inputEmail").value;
							let password = document.getElementById("inputPassword").value;
							handleLogin(email, password);
						}}
					>
						Login 🡺
					</Button>
				</FormContainer>
			</Body>
		</>
	);
};

export default Login;
