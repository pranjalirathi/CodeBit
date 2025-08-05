# 🚀 CodeBit - Live Code Editor

A modern, responsive web-based code editor built with React that allows you to write HTML, CSS, and JavaScript with real-time preview. Perfect for quick prototyping, learning, and experimenting with web technologies.


## ✨ Features

- **🎨 Syntax Highlighting** - Color-coded syntax for HTML, CSS, and JavaScript
- **📝 Line Numbers** - Easy code navigation with line numbering
- **👁️ Live Preview** - Real-time preview of your code as you type
- **🎯 Collapsible Editors** - Minimize/maximize individual editors for focused work
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🌙 Dark Theme** - Easy on the eyes with Material Design dark theme
- **⚡ Fast Performance** - Optimized with React hooks and context for smooth experience

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3.1
- **UI Library**: Material-UI (MUI) 6.0.2
- **Code Editor**: CodeMirror via react-codemirror2
- **Styling**: Material-UI styled components with Emotion
- **State Management**: React Context API
- **Build Tool**: Create React App
- **Icons**: Material-UI Icons

## 📁 Project Structure

```
codebit/
├── public/
│   ├── favicon.ico          # Website favicon
│   ├── index.html          # Main HTML template
│   ├── logo192.png         # PWA icon (192x192)
│   ├── logo512.png         # PWA icon (512x512)
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine crawling rules
├── src/
│   ├── components/         # React components
│   │   ├── Code.jsx        # Main code editors container
│   │   ├── Editor.jsx      # Individual code editor component
│   │   ├── Header.jsx      # Application header with logo
│   │   ├── Home.jsx        # Main page layout component
│   │   └── ViewCode.jsx    # Live preview component
│   ├── context/           # React Context providers
│   │   └── DataProvider.jsx # Global state management
│   ├── assets/            # Static assets
│   │   ├── code.png       # Application logo
│   │   └── dolphin.jpg    # Additional asset
│   ├── App.css            # Global styles
│   ├── App.js             # Main App component
│   ├── App.test.js        # App component tests
│   ├── index.css          # Root styles
│   ├── index.js           # Application entry point
│   ├── logo.svg           # React logo
│   ├── reportWebVitals.js # Performance monitoring
│   └── setupTests.js      # Test configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher) or **yarn**

You can check your versions by running:
```bash
node --version
npm --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd codebit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   
   Or with yarn:
   ```bash
   yarn start
   ```

4. **Open your browser**
   
   The application will automatically open at `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎯 How to Use

1. **HTML Editor**: Write your HTML structure in the left panel
2. **CSS Editor**: Add styling in the middle panel
3. **JavaScript Editor**: Add interactivity in the right panel
4. **Live Preview**: See your code come to life in the bottom preview panel
5. **Collapse/Expand**: Click the minimize icon on any editor to focus on others

### Example Usage

Try this sample code to get started:

**HTML:**
```html
<div class="container">
  <h1 id="title">Hello CodeBit!</h1>
  <p class="description">Welcome to the live code editor</p>
  <button onclick="changeColor()">Change Color</button>
</div>
```

**CSS:**
```css
.container {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

#title {
  color: #3f51b5;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.description {
  color: #666;
  font-size: 1.2em;
}

button {
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #e91e63;
}
```

**JavaScript:**
```javascript
function changeColor() {
  const title = document.getElementById('title');
  const colors = ['#3f51b5', '#4caf50', '#ff9800', '#f44336', '#9c27b0'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  title.style.color = randomColor;
}
```

## 🏗️ Architecture

### Component Hierarchy

```
App
└── DataProvider (Context)
    └── Home
        ├── Header
        ├── Code
        │   ├── Editor (HTML)
        │   ├── Editor (CSS)
        │   └── Editor (JavaScript)
        └── ViewCode (Live Preview)
```

### State Management

The application uses React Context API for state management:

- **DataProvider**: Manages HTML, CSS, and JavaScript code states
- **Global State**: Accessible by all components without prop drilling
- **Real-time Updates**: Changes in any editor instantly reflect in the preview

### Key Components

- **Editor.jsx**: Reusable code editor with syntax highlighting
- **Code.jsx**: Container for all three editors
- **ViewCode.jsx**: Live preview iframe that renders the combined code
- **Header.jsx**: Application header with branding
- **DataProvider.jsx**: Context provider for global state management

## 📦 Dependencies

### Core Dependencies
- `react` (18.3.1) - UI library
- `react-dom` (18.3.1) - React DOM renderer
- `@mui/material` (6.0.2) - Material-UI components
- `@mui/icons-material` (6.0.2) - Material-UI icons
- `react-codemirror2` (8.0.0) - Code editor with syntax highlighting
- `@emotion/react` (11.13.3) - CSS-in-JS library
- `@emotion/styled` (11.13.0) - Styled components

### Development Dependencies
- `react-scripts` (5.0.1) - Create React App scripts
- `@testing-library/*` - Testing utilities
- `web-vitals` (2.1.4) - Performance monitoring
- `@babel/plugin-proposal-private-property-in-object` (7.21.11) - Babel plugin

## 🎨 Customization

### Themes
To change the editor theme, modify the `theme` option in `Editor.jsx`:
```jsx
options={{
    theme: 'material', // Try: 'dracula', 'monokai', 'solarized'
    lineNumbers: true
}}
```

### Colors
Update editor colors in `Code.jsx`:
```jsx
<Editor heading="HTML" icon="/" color="#FF3C41" ... />
<Editor heading="CSS" icon="*" color="#0EBEFF" ... />
<Editor heading="Javascript" icon="()" color="#FCD000" ... />
```

### Layout
Modify the layout by updating the styled components in each file.

## 🐛 Troubleshooting

### Common Issues

1. **Editor not loading**
   - Ensure all CodeMirror dependencies are installed
   - Check browser console for errors

2. **Preview not updating**
   - Verify that DataContext is properly wrapped around components
   - Check the iframe sandbox permissions in ViewCode.jsx

3. **Styling issues**
   - Clear browser cache
   - Ensure Material-UI theme is properly configured

4. **Build warnings**
   - Update browserslist: `npx update-browserslist-db@latest`
   - Add missing Babel plugin (already included in devDependencies)

### Browser Compatibility

CodeBit works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🧪 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Removes Create React App abstraction

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CodeMirror](https://codemirror.net/) for the excellent code editor
- [Material-UI](https://mui.com/) for the beautiful UI components
- [React](https://reactjs.org/) team for the amazing framework
- [Create React App](https://create-react-app.dev/) for the development setup

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the existing documentation
- Review the troubleshooting section

---

*Happy Coding! 🚀*
