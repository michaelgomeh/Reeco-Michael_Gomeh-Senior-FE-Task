import React, { useMemo } from 'react';
import { IDotsProps } from '../../types/types';
import {
	DotsContainer,
	PrevButton,
	NextButton,
	SliderContainer,
	SliderEmpty,
	SliderItem,
	SliderWrapper,
} from './Slider.styles';
import DefaultArrowIcon from '../../assets/arrow.svg';
import Loader from '../Loader/index';
import DefaultDot from '../DefaultDots';
import useSlider from '../../hooks/useSlider';

interface SliderProps<T> {
	items: T[] | null;
	RenderItem: (item: T) => React.ReactNode;
	orientation?: 'horizontal' | 'vertical';
	itemWidth?: number;
	height?: number;
	ArrowIcon?: () => React.ReactNode;
	RenderDots?: (props: IDotsProps) => React.ReactNode;
	hideDots?: boolean;
	reverseDotsPosition?: boolean;
	pixelsToStep?: number;
}

const defaultRenderDots = React.memo(
	({ index, currentIndex, step }: IDotsProps) => (
		<DefaultDot
			key={index}
			index={index}
			currentIndex={currentIndex}
			step={() => step(index - currentIndex)}
		/>
	)
);

const defaultArrowIcon = () => <DefaultArrowIcon />;

const Slider = <T,>({
	items,
	RenderItem,
	orientation = 'horizontal',
	itemWidth,
	height,
	ArrowIcon = defaultArrowIcon,
	RenderDots = defaultRenderDots,
	hideDots = false,
	reverseDotsPosition = false,
	pixelsToStep,
}: SliderProps<T>) => {
	const {
		currentIndex,
		computedItemWidth,
		visibleItems,
		sliderRef,
		step,
		handleKeydown,
		handleTouchEnd,
		handleTouchMove,
		handleTouchStart,
	} = useSlider({
		items,
		itemWidth,
		orientation,
		pixelsToStep,
	});

	const isHorizontal = useMemo(
		() => orientation === 'horizontal',
		[orientation]
	);

	if (items === null) return <Loader />;
	if (items.length === 0)
		return <SliderEmpty>No items to display!</SliderEmpty>;

	return (
		<SliderWrapper
			onKeyDown={handleKeydown}
			$isHorizontal={isHorizontal}
			$height={height}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{currentIndex > 0 && (
				<PrevButton
					$position={isHorizontal ? 'left' : 'top'}
					onClick={() => step(-1)}
				>
					<ArrowIcon />
				</PrevButton>
			)}
			<SliderContainer $isHorizontal={isHorizontal} ref={sliderRef}>
				{items.map((item, index) => (
					<SliderItem
						key={index}
						style={{
							[isHorizontal ? 'width' : 'height']: computedItemWidth
								? `${computedItemWidth}px`
								: 'auto',
						}}
					>
						{RenderItem(item)}
					</SliderItem>
				))}
			</SliderContainer>
			{currentIndex < items.length - visibleItems && (
				<NextButton
					$position={isHorizontal ? 'right' : 'bottom'}
					onClick={() => step(1)}
				>
					<ArrowIcon />
				</NextButton>
			)}
			{!hideDots && pixelsToStep === undefined && (
				<DotsContainer
					$isHorizontal={isHorizontal}
					$reverseDotsPosition={reverseDotsPosition}
				>
					{Array.from(
						{ length: items.length - visibleItems + 1 },
						(_, index) => (
							<RenderDots
								key={index}
								index={index}
								currentIndex={currentIndex}
								step={() => step(index - currentIndex)}
							/>
						)
					)}
				</DotsContainer>
			)}
		</SliderWrapper>
	);
};

export default Slider;
