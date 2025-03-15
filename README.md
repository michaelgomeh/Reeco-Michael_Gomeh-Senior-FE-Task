# Dynamic Slider

A generic modern carousel solution for various use cases.

[![View Demo](https://img.shields.io/badge/LIVE_DEMO-FF6B6B?style=for-the-badge)](https://vercel.com/gomehmichaels-projects/Reeco-Michael_Gomeh-Senior-FE-Task)

## 🌟 Overview

<div align="center">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components"/>
</div>
## 🎮 Features Overview

- **🧭 Easy Navigation** - Context-aware arrows with auto-hide logic
- **🎚 Dual Scroll Modes** - Pixel-perfect scrolling & item snapping
- **🔄 Omni-Directional Layouts** - Horizontal/vertical orientation with `orientation` prop
- **🪝 Decoupled useSlider Hook** - Encapsulates slider logic for better modularity and separation of concerns.
- **🎨 Generic Renderer** - Plug-in custom arrows, dots, and item templates
- **♿ Keyboard navigation** - use keyboard arrows to switch slides
- **📱 Infinite component types** - ie. Cards, Chips

## 🛠 ️Tech Stack

- **Vite** (Ultra-fast tooling)
- **React** + **TypeScript 5**
- **Styled Components** (CSS-in-JS)
- **ESLint**/**Prettier** (Code quality)

## ⚡ Setup

1. **Clone & Install**

   ```bash
   git clone https://github.com/michaelgomeh/Reeco-Michael_Gomeh-Senior-FE-Task.git
   npm install
   ```

2. **Development Mode**

   ```bash
   npm run dev
   ```

## ⚡ Quick Start

```tsx
import Slider from './components/Slider/index';
import { ArrowIcon } from './custom-icons';

const ProductCarousel = ({ items }) => (
	<Slider
		items={items}
		renderItem={(product) => <ProductCard key={product.id} {...product} />}
		orientation="horizontal"
		ArrowIcon={ArrowIcon}
		pixelsToStep={300}
	/>
);
```

## 🔧 Component Props

| Prop                  | Type                       | Default      | Description                  |
| --------------------- | -------------------------- | ------------ | ---------------------------- |
| `items`               | `T[]`                      | Required     | Data array to render         |
| `RenderItem`          | `(item: T) => ReactNode`   | Required     | Item rendering function      |
| `orientation`         | `horizontal` \| `vertical` | `horizontal` | Layout direction             |
| `itemWidth`           | `number`                   | `auto`       | Fixed item dimension         |
| `height`              | `number`                   | `auto`       | Slider viewport height       |
| `ArrowIcon`           | `() => ReactNode`          | DefaultArrow | Custom arrow component       |
| `hideDots`            | `boolean`                  | `false`      | Hide navigation dots         |
| `pixelsToStep`        | `number`                   | item width   | Pixel-based scrolling amount |
| `RenderDots`          | `() => ReactNode`          | DefaultDot   | Pixel-based scrolling amount |
| `reverseDotsPosition` | `boolean`                  | `false`      | Pixel-based scrolling amount |

## 🧩 Project Structure

```
project-root/
├── public/
└── src/
    ├── assets/
    │   └── ...svgs
    ├── components/
    │   ├── Chip/
    │   │   ├── Chip.tsx
    │   │   └── index.ts
    │   ├── DefaultDots/
    │   │   ├── DefaultDot.tsx
    │   │   └── index.ts
    │   ├── ProductCard/
    │   │   ├── index.ts
    │   │   ├── ProductCard.style.ts
    │   │   └── ProductCard.tsx
    │   └── Slider/
    │       ├── index.ts
    │       ├── Slider.style.ts
    │       └── Slider.tsx
    ├── constants/
    │   └── data.ts
    ├── types/
    │   └── types.ts
    ├── pages/
    │   └── MainPage.tsx
    ├── App.style.ts
    ├── App.tsx
    ├── GlobalStyle.ts
    ├── main.tsx
    └── vite-env.d.ts
```

## 📜 License

MIT © Michael Gomeh 2023
