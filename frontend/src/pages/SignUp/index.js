import React from "react";

import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import {
	Header,
	LeftContent,
	TextTitle,
	Body,
	FormContainer,
	TitleForm,
	InputContainer,
	Placeholder,
	InputEmail,
	InputPassword,
	InputConfirmPassword,
	InputUsername,
	Button,
} from "./styles";

const SignUp = () => {
	const [redirecting, setRedirecting] = React.useState(false);

	function handleSignUp(username, email, password, confirmPassword) {
		let confirmedPassword = "";
		if (password === confirmPassword) {
			confirmedPassword = password;
			if (username === "" || email === "") {
				alert("Ops.. há campos em branco");
			} else {
				axios({
					method: "POST",
					url: "http://localhost:3333/signup",
					data: {
						username: username,
						email: email,
						password: confirmedPassword,
					},
				}).then((response) => {
					if (response.data.success) {
						alert(response.data.message);
						setRedirecting(true);
					} else {
						alert(response.data.message);
					}
				});
			}
		} else {
			alert("Ops.. verifique as senhas");
		}
	}

	if (redirecting) {
		return <Redirect to="/" />;
	}

	return (
		<>
			<Header>
				<LeftContent>
					<Link to="/" style={{ textDecoration: "none" }}>
						<TextTitle>🡸 Go Back</TextTitle>
					</Link>
				</LeftContent>
			</Header>
			<Body>
				<FormContainer>
					<TitleForm>Sign Up</TitleForm>
					<InputContainer>
						<Placeholder>Username</Placeholder>
						<InputUsername />
					</InputContainer>
					<InputContainer>
						<Placeholder>Email Adress</Placeholder>
						<InputEmail />
					</InputContainer>
					<InputContainer>
						<Placeholder>Password</Placeholder>
						<InputPassword />
					</InputContainer>
					<InputContainer>
						<Placeholder>Confirm Password</Placeholder>
						<InputConfirmPassword />
					</InputContainer>
					<Button
						onClick={() => {
							handleSignUp(
								document.getElementById("inputUsername").value,
								document.getElementById("inputEmail").value,
								document.getElementById("inputPassword").value,
								document.getElementById("inputConfirmPassword").value
							);
						}}
					>
						Sign Up 🡺
					</Button>
				</FormContainer>
			</Body>
		</>
	);
};

export default SignUp;
