import React from 'react';
import {
	ProductCardWrapper,
	ProductDescription,
	ProductImage,
	ProductName,
} from './ProductCard.styles';

interface ProductCardProps {
	name: string;
	description: string;
	image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	name,
	description,
	image,
}) => {
	return (
		<ProductCardWrapper>
			<ProductImage src={image} alt={name} className="product-image" />
			<ProductName className="product-name">{name}</ProductName>
			<ProductDescription className="product-description">
				{description}
			</ProductDescription>
		</ProductCardWrapper>
	);
};

export default ProductCard;
