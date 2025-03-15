import { useState, useRef, useLayoutEffect, useCallback, useMemo } from 'react';

interface UseSliderProps<T> {
	items: T[] | null;
	itemWidth?: number;
	orientation: 'horizontal' | 'vertical';
	pixelsToStep?: number;
}

const useSlider = <T>({
	items,
	itemWidth,
	orientation,
	pixelsToStep,
}: UseSliderProps<T>) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [computedItemWidth, setComputedItemWidth] = useState<
		number | undefined
	>(undefined);
	const [visibleItems, setVisibleItems] = useState(0);
	const sliderRef = useRef<HTMLDivElement | null>(null);

	const isHorizontal = useMemo(
		() => orientation === 'horizontal',
		[orientation]
	);

	const offsetDirection = useMemo(
		() => (orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight'),
		[orientation]
	);

	useLayoutEffect(() => {
		if (!items || items.length == 0 || !sliderRef.current) return;
		let localItemWidth = itemWidth || 1;
		if (!itemWidth) {
			const children: HTMLElement[] = Array.from(
				sliderRef.current!.children
			) as HTMLElement[];
			localItemWidth =
				Math.max(...children.map((child) => child[offsetDirection])) || 1;
		}

		const viewWidth = sliderRef.current[offsetDirection];
		const rest = viewWidth % (localItemWidth ?? 1);
		const finalWidth = viewWidth - (viewWidth % (localItemWidth ?? 1));
		const maximumItems = finalWidth / localItemWidth;
		setVisibleItems(maximumItems);
		setComputedItemWidth(localItemWidth + rest / maximumItems);
	}, [isHorizontal, itemWidth, items, offsetDirection]);

	const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		e.preventDefault();

		if (['ArrowRight', 'ArrowDown'].includes(e.code)) step(1);
		if (['ArrowLeft', 'ArrowUp'].includes(e.code)) step(-1);
	};

	const slide = useCallback(
		(px = pixelsToStep) => {
			if (!sliderRef.current) return;
			const slider = sliderRef.current;
			slider.scrollBy({
				[isHorizontal ? 'left' : 'top']: px,
				behavior: 'smooth',
			});
		},
		[isHorizontal, pixelsToStep]
	);

	const step = useCallback(
		(amount: number) => {
			const slider = sliderRef.current;
			if (!slider) return;

			if (pixelsToStep) return slide();

			const currentItem = slider.children[currentIndex] as HTMLElement;
			const itemSize = computedItemWidth || currentItem[offsetDirection];
			const scrollAmount = itemSize * amount;

			slider.scrollBy({
				[isHorizontal ? 'left' : 'top']: scrollAmount,
				behavior: 'smooth',
			});

			setCurrentIndex((prev: number) => {
				const newIndex = prev + amount;
				return Math.max(0, Math.min(newIndex, items!.length - 1));
			});
		},
		[
			pixelsToStep,
			slide,
			currentIndex,
			computedItemWidth,
			offsetDirection,
			isHorizontal,
			items,
		]
	);

	return {
		currentIndex,
		computedItemWidth,
		visibleItems,
		sliderRef,
		step,
		handleKeydown,
	};
};

export default useSlider;
