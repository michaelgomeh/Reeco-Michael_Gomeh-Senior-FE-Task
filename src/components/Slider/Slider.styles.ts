import styled from 'styled-components';

export const SliderWrapper = styled.div<{
	$isHorizontal: boolean;
	$height?: number;
}>`
	height: ${({ $height }) => `${$height}px`};
	position: relative;
	display: flex;
	align-items: center;
	padding: 8px;
	${(props) =>
		props.$isHorizontal
			? `padding-inline: 24px; `
			: `padding-block: 24px; width: 300px; margin-inline: auto;`}
`;

export const SliderContainer = styled.div<{ $isHorizontal: boolean }>`
	display: flex;
	overflow: hidden;
	inline-size: 100%;
	block-size: 100%;
	flex-direction: ${({ $isHorizontal }) => ($isHorizontal ? 'row' : 'column')};
`;

export const SliderItem = styled.div`
	padding: 8px;
	align-self: stretch;
	flex-shrink: 0;
	width: 100%;
`;

const BaseButton = styled.button`
	background-color: rgba(256, 256, 256, 0.4);
	position: absolute;
	z-index: 1;
	border-radius: 50%;
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	cursor: pointer;
	color: rgba(0, 0, 0, 0.7);
	border: none;
	transform: scale(0.8);
	transition: all 0.3s ease, transform 0.3s ease;

	&:hover {
		background-color: rgba(256, 256, 256, 0.6);
		border: 1px solid rgba(0, 0, 0, 0.4);
	}
`;

export const PrevButton = styled(BaseButton)<{ $position: 'left' | 'top' }>`
	${({ $position }) =>
		$position === 'left'
			? 'left: 0; transform: rotate(180deg);'
			: 'top: 0; left: 50%; transform: translateX(-50%) rotate(-90deg);'}
`;

export const NextButton = styled(BaseButton)<{ $position: 'right' | 'bottom' }>`
	${({ $position }) =>
		$position === 'right'
			? 'right: 0;'
			: 'bottom: 0; left: 50%; transform: translateX(-50%) rotate(90deg);'}
`;

export const SliderEmpty = styled.div`
	padding: 32px;
	margin: auto;
`;

export const DotsContainer = styled.div<{
	$isHorizontal: boolean;
	$reverseDotsPosition: boolean;
}>`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;

	${(props) =>
		props.$isHorizontal
			? `
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    ${props.$reverseDotsPosition ? 'bottom: 100%;' : ''}
  `
			: `
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    flex-direction: column;
    ${props.$reverseDotsPosition ? 'left: 100%;' : ''}
  `}
`;
