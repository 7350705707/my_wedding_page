# Wedding Invitation Website 💍🇮🇳

A beautiful, responsive wedding invitation website built with React and Tailwind CSS, featuring traditional Indian wedding elements with modern design and promoting India's Swadeshi digitalization movement.

## Features ✨

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Traditional Elements**: Beautiful Indian wedding aesthetics with Hindi text support
- **Swadeshi Digital Integration**: Promotes Indian digital platforms and Digital India movement
- **Interactive Components**: Smooth animations, image gallery, and RSVP form
- **Modern Tech Stack**: React, Vite, Tailwind CSS, Framer Motion
- **Cultural Integration**: Supports indigenous apps and payment systems

## Swadeshi Digital Features 🇮🇳

### Promoted Indian Platforms
- **Arattai**: Indian-made secure messaging app - "Speak Like Nobody's Listening"
- **ShareChat**: Regional language social networking
- **Chingari**: Indian short video platform
- **BHIM UPI**: India's unified payment interface
- **MyGov**: Government citizen engagement platform
- **Aarogya Setu**: Health and contact tracing

### Digital India Benefits Highlighted
- 🛡️ **Data Security**: Your data stays in India
- 👥 **Local Community**: Connect with Indian culture
- 🌐 **Regional Languages**: Support for Indian languages
- ⚡ **Innovation**: Supporting Indian startups

### Wedding-Specific Integration
- Swadeshi hashtags: #SwadeshiWedding #ArattaiWedding #DigitalIndia
- Indian platform sharing buttons
- BHIM UPI payment preferences
- Digital India commitment options in RSVP

## Quick Start 🚀

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization Guide 📝

### Update Wedding Details

Replace the placeholder content in the following components with your actual wedding information:

#### 1. Hero Section (`src/components/Hero.jsx`)
- Bride and Groom names (English and Hindi)
- Parents' names
- Wedding date and venue
- Invitation text

#### 2. Details Section (`src/components/Details.jsx`)
- Event dates, times, and venues
- Contact information
- Dress code preferences

#### 3. Timeline Section (`src/components/Timeline.jsx`)
- Ceremony schedule
- Event timings

#### 4. Footer Section (`src/components/Footer.jsx`)
- Wedding hashtag
- Social media links
- RSVP deadline

### Add Your Photos

Replace the placeholder images in `src/components/Gallery.jsx` with your actual engagement/pre-wedding photos.

### Color Customization

Update colors in `tailwind.config.js`:
```javascript
colors: {
  'gold': '#D4AF37',        // Golden accents
  'rose-gold': '#E8B4B8',   // Rose gold elements
  'deep-red': '#8B0000',    // Deep red for text
  'cream': '#FFFDD0'        // Cream background
}
```

### Font Customization

The site uses three font families:
- **Playfair Display**: Elegant serif for headings
- **Noto Sans Devanagari**: For Hindi text
- **Dancing Script**: For script-style text

## Components Overview 🏗️

- **Header**: Navigation with smooth scrolling
- **Hero**: Main invitation with couple details
- **Details**: Wedding event information
- **Timeline**: Ceremony schedule
- **Gallery**: Photo collection with lightbox
- **RSVP**: Interactive response form
- **Footer**: Final details and social links
- **FloatingElements**: Animated background elements

## RSVP Form Setup 📧

The RSVP form is currently set up for frontend only. To make it functional:

1. **Using Netlify Forms** (Recommended for static hosting):
   - Add `netlify` attribute to the form
   - Deploy to Netlify

2. **Using Formspree**:
   - Sign up at formspree.io
   - Update form action in RSVP component

3. **Custom Backend**:
   - Set up your own API endpoint
   - Update handleSubmit function in RSVP component

## Social Media Integration 📱

### Instagram Integration
- Update Instagram handle in Footer component
- Consider adding Instagram feed widget

### WhatsApp Sharing
- Add WhatsApp share button for easy invitation sharing

### Wedding Hashtag
- Create a unique hashtag for your wedding
- Update in Footer component
- Encourage guests to use it

## Performance Optimization ⚡

- Images are lazy-loaded
- Animations are optimized for mobile
- Uses modern web standards
- Minimal bundle size with Vite

## SEO Setup 🔍

Update meta tags in `index.html`:
```html
<title>Your Names - Wedding Invitation</title>
<meta name="description" content="Join us for our wedding celebration">
<meta property="og:title" content="Your Names - Wedding">
```

## Deployment Options 🌐

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run `npm run deploy`

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing 🤝

Feel free to customize and improve the design for your special day!

## License 📄

This project is created for personal wedding use. Feel free to use and modify for your own wedding celebration.

---

**Made with ❤️ for your special day**

For any questions or customization help, feel free to reach out!