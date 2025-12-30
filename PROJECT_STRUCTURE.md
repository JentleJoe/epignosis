# Aminu Momodu Portfolio - Project Structure

## 📁 Folder Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Button.jsx
│   │   └── Button.css
│   └── sections/
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── Projects.jsx
│       ├── Projects.css
│       ├── Services.jsx
│       ├── Services.css
│       ├── Experience.jsx
│       ├── Experience.css
│       ├── Portfolio.jsx
│       ├── Portfolio.css
│       ├── FAQ.jsx
│       ├── FAQ.css
│       ├── Contact.jsx
│       └── Contact.css
├── data/
│   └── portfolioData.js
├── styles/
│   └── globals.css
├── App.jsx
├── index.css
└── main.jsx
```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: #FFD700 (Gold)
- **Secondary Color**: #FFE44D (Light Gold)
- **Dark Background**: #0f0f0f
- **Dark Surface**: #1a1a1a
- **Borders**: #2a2a2a

### Components

#### Common Components
- **Header**: Sticky navigation with smooth hover effects
- **Footer**: Multi-column footer with social links
- **Button**: Two variants (primary & secondary) with hover effects

#### Section Components
1. **Hero**: Introduction section with profile placeholder and CTA
2. **Projects**: Featured project showcase with alternating layout
3. **Services**: 4-column service cards grid
4. **Experience**: Timeline-based experience display with numbered markers
5. **Portfolio**: Grid showcase with hover overlays
6. **FAQ**: Expandable accordion questions
7. **Contact**: Full-width CTA section

## ✨ Key Features

- ✅ **Fully Responsive**: Mobile-first design with breakpoints at 768px and 1024px
- ✅ **Smooth Animations**: Hover effects, transitions, and transitions
- ✅ **Component-Based**: Reusable components with proper separation of concerns
- ✅ **Data Driven**: All content managed in `portfolioData.js`
- ✅ **Accessibility**: Semantic HTML and proper ARIA attributes
- ✅ **Performance**: CSS optimized with minimal repaints
- ✅ **Modern Design**: Gradients, shadows, and modern aesthetic matching the reference

## 🚀 Usage

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📝 Data Structure

All content is managed in `src/data/portfolioData.js`:
- Portfolio projects
- Services offered
- Experience timeline
- Portfolio showcase items
- FAQ items
- Social media links

## 🎯 Best Practices Applied

1. **Component Composition**: Each section is a separate component for reusability
2. **CSS Organization**: Component-scoped CSS files for maintainability
3. **Data Separation**: Content separated from presentation
4. **Responsive Design**: Mobile-first approach with proper media queries
5. **Naming Conventions**: BEM-inspired class naming for clarity
6. **DRY Principle**: Reusable components and data structures
7. **Accessibility**: Semantic HTML and proper link navigation
8. **Performance**: Optimized CSS with minimal redundancy

## 🎨 Customization

To customize:
1. Update colors in `src/styles/globals.css` (CSS variables)
2. Modify content in `src/data/portfolioData.js`
3. Update component templates in respective `.jsx` files
4. Adjust styling in component-scoped `.css` files
