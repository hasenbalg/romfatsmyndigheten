# Norwegian Space Agency Hugo Project

A modern, mobile-first Hugo theme for the Norwegian Space Agency featuring dynamic design and responsive layout.

## Features

- **Mobile-First Design**: Fully responsive layout that works perfectly on all devices
- **Modern CSS**: Uses custom properties, flexbox, and modern CSS techniques
- **Dynamic Navigation**: Smooth mobile navigation with hamburger menu
- **Image Placeholders**: Shortcode for creating large square image placeholders
- **Space Theme**: Customized for Norwegian Space Agency branding
- **Hugo Integration**: Full Hugo templating system with layouts and partials

## Project Structure

```
norway-space-agency/
├── hugo.toml              # Hugo configuration
├── content/               # Content files
│   ├── _index.md         # Homepage
│   ├── about.md          # About page
│   ├── missions.md       # Missions page
│   ├── research.md       # Research page
│   ├── news.md           # News page
│   ├── contact.md        # Contact page
│   └── blog/             # Blog section
├── themes/
│   └── space-theme/      # Custom theme
│       ├── layouts/      # Hugo layouts
│       │   ├── _default/
│       │   │   ├── baseof.html
│       │   │   ├── single.html
│       │   │   └── list.html
│       │   ├── partials/
│       │   │   ├── header.html
│       │   │   └── footer.html
│       │   └── shortcodes/
│       │       └── image-placeholder.html
│       └── assets/
│           ├── css/
│           │   └── style.css
│           └── js/
│               └── main.js
├── static/               # Static assets
├── data/                 # Data files
└── archetypes/           # Content archetypes
```

## Getting Started

1. **Install Hugo**:
   ```bash
   # macOS
   brew install hugo
   
   # Or download from https://gohugo.io/installation/
   ```

2. **Navigate to project**:
   ```bash
   cd norway-space-agency
   ```

3. **Start development server**:
   ```bash
   hugo server
   ```

4. **Open browser**:
   Visit `http://localhost:1313`

## Content Management

### Creating New Pages

```bash
# Create a new page
hugo new content/new-page.md
```

### Using Image Placeholders

Use the shortcode in your content:

```markdown
{{< image-placeholder size="large-square" class="custom-class" >}}
```

Available sizes:
- `small`
- `medium` 
- `large`
- `large-square`

### Page Structure

Each page supports:
- `hero_image`: Background image for hero section
- `hero_title`: Main heading
- `hero_subtitle`: Subheading

Example:
```markdown
---
title: "Page Title"
hero_image: "/images/hero.jpg"
hero_title: "Hero Title"
hero_subtitle: "Hero subtitle"
---
```

## Customization

### Colors and Styles

Edit the CSS custom properties in `themes/space-theme/assets/css/style.css`:

```css
:root {
    --primary-color: #1e3a8a;      /* Norwegian flag blue */
    --secondary-color: #3b82f6;   /* Light blue */
    --accent-color: #60a5fa;       /* Lighter blue */
    --background-color: #f8fafc;   /* Light gray background */
}
```

### Navigation Menu

Edit the menu in `hugo.toml`:

```toml
[[menu.main]]
    name = 'Home'
    url = '/'
    weight = 10
```

### Adding New Shortcodes

Create new shortcodes in `themes/space-theme/layouts/shortcodes/`.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers with full feature support
- Progressive enhancement for older browsers

## Performance

- Mobile-first CSS reduces unnecessary styles
- Efficient JavaScript for interactions
- Optimized image placeholders
- Clean, semantic HTML structure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This Hugo theme is open source and available under the MIT License.