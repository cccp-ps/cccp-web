# 🇵🇸 CCCP.PS - Palestinian Historical Timeline

<div align="center">

![Palestinian Flag](public/favicon.svg)

**A comprehensive, interactive timeline documenting Palestinian history and conflicts**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01.svg)](https://astro.build)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222.svg)](https://cccp.ps)

[🌐 Live Site](https://cccp.ps) • [📚 Documentation](#documentation) • [🤝 Contributing](#contributing)

</div>

## 📖 About

CCCP.PS is an interactive web application that presents a comprehensive timeline of Palestinian history and conflicts. The project aims to document significant events with reliable sources, providing an accessible and educational resource for understanding the complex history of Palestine.

### ✨ Key Features

- **📅 Interactive Timelines** - Navigate through different historical periods (1948, 1967, 1987, 2000, 2023+)
- **🔍 Advanced Search & Filtering** - Search events by title, description, sources, categories, and significance levels
- **🔗 Event Connections** - Explore relationships between events across different timelines
- **📊 Statistical Analysis** - View comprehensive statistics and humanitarian impact data
- **📱 Responsive Design** - Optimized for all devices with modern, accessible UI
- **🎯 Source Verification** - All events backed by credible sources with reliability ratings
- **♿ Accessibility First** - WCAG compliant with screen reader support and keyboard navigation
- **🎨 Dynamic Theming** - Each timeline period has its own visual identity

## 🛠️ Tech Stack

- **Frontend Framework**: [Astro](https://astro.build) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Language**: TypeScript - Type-safe development
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) - Optimized icon system
- **Deployment**: GitHub Pages with automated CI/CD

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cccp-web.git
   cd cccp-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:4321
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 📁 Project Structure

```
cccp-web/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── layout/          # Navigation, headers, footers
│   │   ├── shared/          # Common components
│   │   ├── support/         # Support widgets
│   │   └── timeline/        # Timeline-specific components
│   ├── data/
│   │   ├── timelines/       # Historical timeline data
│   │   └── types.ts         # TypeScript type definitions
│   ├── pages/               # Astro pages and routes
│   └── styles/              # Global styles and themes
├── public/                  # Static assets
└── .github/workflows/       # CI/CD automation
```

## 📊 Timeline Data Structure

Each timeline contains:

- **Events**: Chronologically ordered historical events
- **Sources**: Credible references with reliability ratings
- **Categories**: Conflict, political, humanitarian, displacement, etc.
- **Significance Levels**: Critical, major, moderate, minor
- **Connections**: Links between related events across timelines
- **Statistics**: Casualty data, humanitarian impact metrics

### Event Categories

- 🔥 **Conflict** - Military operations and armed confrontations
- 🕊️ **Ceasefire** - Peace negotiations and ceasefires
- 🏛️ **Political** - Political developments and diplomatic events
- 🏥 **Humanitarian** - Medical, aid, and civilian impact events
- 🏃 **Displacement** - Population movements and refugee situations
- 🌍 **International** - Global diplomatic and legal developments

## 🎨 Design Philosophy

- **Accessibility First**: WCAG 2.1 AA compliant
- **Performance Optimized**: Fast loading with minimal JavaScript
- **Mobile Responsive**: Seamless experience across all devices
- **Data-Driven**: Every claim backed by verifiable sources
- **User-Centered**: Intuitive navigation and search capabilities

## 🤝 Contributing

We welcome contributions from historians, developers, and anyone passionate about documenting Palestinian history accurately.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Add or update timeline data** with proper sources
4. **Ensure all sources are credible** and properly attributed
5. **Test your changes** (`npm run build`)
6. **Submit a pull request**

### Content Guidelines

- **Factual Accuracy**: All events must be verifiable through credible sources
- **Neutral Tone**: Use objective, documentary language
- **Source Quality**: Prefer academic, journalistic, and official sources
- **Comprehensive Coverage**: Include diverse perspectives where applicable

### Development Guidelines

- Follow TypeScript best practices
- Maintain accessibility standards
- Test responsive design across devices
- Document complex components

## 📝 License

This project is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0).

This ensures that:
- The code remains free and open source
- Any modifications must also be open sourced
- Network use requires source code availability
- Commercial use is permitted with proper attribution

See [LICENSE](LICENSE) for full details.

## 🔗 Links

- **Live Website**: [cccp.ps](https://cccp.ps)
- **Issue Tracker**: [GitHub Issues](https://github.com/your-username/cccp-web/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/cccp-web/discussions)

## 📞 Support

If you have questions, suggestions, or need help:

- 📧 **Email**: [contact@cccp.ps](mailto:contact@cccp.ps)
- 💬 **GitHub Issues**: For bug reports and feature requests
- 🗣️ **GitHub Discussions**: For questions and community discussion

---

<div align="center">

**Built with ❤️ for historical education and awareness**

*Dedicated to documenting history with accuracy, respect, and accessibility*

</div> 