import { IDotsProps } from '../../types/types';
import styled from 'styled-components';

const Dot = styled.div<{ $isActive: boolean }>`
	width: 8px;
	height: 8px;
	background-color: ${({ $isActive }) => ($isActive ? '#333' : '#ccc')};
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.2s ease;
`;

const DefaultDot = ({ index, currentIndex, step }: IDotsProps) => {
	return (
		<Dot
			$isActive={index === currentIndex}
			key={index}
			onClick={() => step(index - currentIndex)}
		></Dot>
	);
};
export default DefaultDot;
