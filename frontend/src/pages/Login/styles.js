import styled from "styled-components";

export const Header = styled.div`
	width: 1180px;
	margin: 0 auto;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const LeftContent = styled.div``;

export const TextTitle = styled.h3`
	font-family: "Roboto", sans-serif;
`;

export const RightContent = styled.div``;

export const Text = styled.p`
	display: flex;
	flex-direction: row;
	align-items: center;

	font-family: "Roboto", sans-serif;
	font-weight: bold;
	text-decoration: none;
`;

export const ButtonLink = styled.p`
	color: #8c8c8c;
	text-decoration: none;
	margin-left: 10px;
`;

export const Body = styled.div`
	height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormContainer = styled.div`
	text-align: center;
	width: 350px;
	padding: 15px;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const InputContainer = styled.div``;

export const Placeholder = styled.div`
	text-align: left;
	font-family: "Roboto", sans-serif;
`;

export const InputEmail = styled.input.attrs({
	id: "inputEmail",
	name: "inputEmail",
	placeholder: "E-mail",
	type: "email",
	required: true,
})`
	width: 100%;
	padding: 15px;
	border: 1px #eee solid;
	border-radius: 5px;
	margin-bottom: 10px;
`;

export const InputPassword = styled.input.attrs({
	id: "inputPassword",
	name: "inputPassword",
	placeholder: "Password",
	type: "password",
	required: true,
})`
	width: 100%;
	padding: 15px;
	border: 1px #eee solid;
	border-radius: 5px;
	margin-bottom: 10px;
`;

export const Button = styled.button.attrs({
	type: "button",
})`
	margin: 0 auto;
	padding: 10px;
	color: #4f4fed;
	font-family: "Roboto", sans-serif;
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	border: none;
	outline: none;
`;
