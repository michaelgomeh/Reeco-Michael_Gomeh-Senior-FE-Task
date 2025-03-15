import Chip from '../components/Chip/index';
import ProductCard from '../components/ProductCard/index';
import Slider from '../components/Slider/index';
import { categories, products } from '../constants/data';
import ArrowIcon from '../assets/arrow.svg';
import styled from 'styled-components';

const AppContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 64px;
`;

const HorizontalContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

const MainPage = () => {
	return (
		<AppContainer>
			<Slider
				items={products}
				RenderItem={(product) => (
					<ProductCard key={product.name} {...product} />
				)}
				orientation="horizontal"
				itemWidth={200}
				ArrowIcon={() => <ArrowIcon />}
			/>

			<Slider
				items={categories}
				RenderItem={(category) => <Chip {...category} />}
				orientation="horizontal"
				ArrowIcon={() => <ArrowIcon />}
				reverseDotsPosition={true}
				RenderDots={({ index, currentIndex, step }) => (
					<div
						key={index}
						onClick={() => step(1)}
						style={{
							fontSize: '16px',
							cursor: 'pointer',
						}}
					>
						{index === currentIndex ? '🌟' : '🌍'}
					</div>
				)}
			/>
			<Slider
				items={categories}
				RenderItem={(category) => <Chip {...category} />}
				orientation="horizontal"
				ArrowIcon={() => <ArrowIcon />}
				pixelsToStep={50}
			/>
			<Slider
				items={categories}
				RenderItem={(category) => <Chip {...category} />}
				orientation="horizontal"
				ArrowIcon={() => <ArrowIcon />}
				RenderDots={({ index, currentIndex, step }) => (
					<div
						key={index}
						onClick={() => step(1)}
						style={{
							fontSize: '12px',
							cursor: 'pointer',
							fontWeight: index === currentIndex ? 700 : 400,
						}}
					>
						{index}
					</div>
				)}
			/>
			<HorizontalContainer>
				<Slider
					reverseDotsPosition={true}
					items={products}
					RenderItem={(product) => <ProductCard {...product} />}
					orientation="vertical"
					height={700}
					ArrowIcon={() => <ArrowIcon />}
					RenderDots={({ index, currentIndex, step }) => (
						<div
							key={index}
							onClick={() => step(1)}
							style={{ fontSize: '8px', cursor: 'pointer' }}
						>
							{index === currentIndex ? '🔴' : '⚫'}
						</div>
					)}
				/>
				<Slider
					items={categories}
					RenderItem={(category) => <Chip {...category} />}
					orientation="vertical"
					height={300}
					ArrowIcon={() => <ArrowIcon />}
					hideDots
				/>
				<Slider
					items={[]}
					RenderItem={(_) => <></>}
					orientation="vertical"
					height={300}
					ArrowIcon={() => <ArrowIcon />}
				/>
				<Slider
					items={null}
					RenderItem={(_) => <></>}
					orientation="vertical"
					height={300}
					ArrowIcon={() => <ArrowIcon />}
				/>
			</HorizontalContainer>
		</AppContainer>
	);
};

export default MainPage;
