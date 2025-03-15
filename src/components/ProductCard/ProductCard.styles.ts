import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
	text-align: center;
	padding: 16px;
	background: white;
	width: 100%;
	height: 100%;
	block-size: 100%;
	border-radius: 8px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	transition: all 0.1s ease-in;
	cursor: pointer;

	&:hover {
		border: 1px solid rgba(0, 0, 0, 0.5);
		background-color: #fafafa;
	}
`;

export const ProductImage = styled.img`
	width: 100%;
	height: 150px;
	object-fit: cover;
	border-radius: 8px;
`;

export const ProductName = styled.h2`
	margin: 12px 0 8px;
	font-size: 18px;
	font-weight: bold;
`;

export const ProductDescription = styled.p`
	font-size: 14px;
	color: #666;
`;
