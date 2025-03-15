import React from 'react';
import styled from 'styled-components';

interface ChipProps {
	label: string;
}

const StyledChip = styled.div`
	padding: 8px 16px;
	background: white;
	border-radius: 8px;
	font-size: 12px;
	font-weight: 600;
	color: #333;
	cursor: pointer;
	transition: all 0.3s ease;
	border: 1px solid rgba(0, 0, 0, 0.2);
	white-space: nowrap;
	text-transform: uppercase;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	&:hover {
		background-color: #fafafa;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
`;

const Chip: React.FC<ChipProps> = ({ label }) => {
	return <StyledChip>{label}</StyledChip>;
};

export default Chip;
