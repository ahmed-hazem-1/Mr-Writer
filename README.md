# AI Script Writer | كاتب الأسكربت المتخصص

A specialized AI-powered chatbot for creating engaging social media scripts in both Arabic and English. This application transforms complex topics into viral-ready content using Google's Gemini AI.

## Features

- 🎯 **Engaging Hooks**: Creates attention-grabbing openings that stop users from scrolling
- 💝 **Emotional Content**: Transforms technical topics into relatable stories
- 🔥 **Viral-Ready**: Designed to maximize engagement and shares
- 🌍 **Bilingual**: Supports both Arabic (RTL) and English (LTR)
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast**: Powered by Google Gemini AI for quick generation

## How It Works

The application follows a proven methodology for viral content creation:

1. **Hook**: Starts with curiosity-sparking questions or shocking facts
2. **Story**: Explains topics using everyday analogies
3. **Value**: Adds surprising statistics or interesting facts
4. **Conclusion**: Ends with a memorable punchline
5. **CTA**: Includes clear call-to-action for engagement

## Technologies Used

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **AI**: Google Gemini 1.5 Flash API
- **Hosting**: Vercel
- **Styling**: Modern CSS with RTL/LTR support
- **Icons**: Font Awesome
- **Fonts**: Cairo (Arabic), Inter (English)

## Deployment on Vercel

### Option 1: Deploy from GitHub

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Deploy automatically

### Option 2: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to project directory:
   ```bash
   cd "Mr Ezzat - Script Writer"
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Option 3: Drag and Drop

1. Create a ZIP file of all project files
2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the ZIP file
4. Wait for deployment

## Environment Setup

The application uses Google Gemini API. The API key is already included in the code, but for production use, consider:

1. Using environment variables
2. Implementing rate limiting
3. Adding API key rotation

## File Structure

```
Mr Ezzat - Script Writer/
├── index.html          # Main HTML file
├── styles.css          # Responsive CSS with RTL/LTR support
├── script.js           # JavaScript with Gemini API integration
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project configuration
└── README.md           # This file
```

## Features in Detail

### Arabic Language Support
- Right-to-left (RTL) layout
- Arabic typography with Cairo font
- Cultural context in content generation
- Arabic-specific social media best practices

### English Language Support
- Left-to-right (LTR) layout
- Modern English typography
- Western social media conventions
- International audience targeting

### Responsive Design
- Mobile-first approach
- Flexible grid system
- Touch-friendly interfaces
- Optimized for all screen sizes

### AI Integration
- Advanced prompt engineering
- Context-aware generation
- Error handling and retry logic
- Loading states and feedback

## Usage

1. Select your preferred language (Arabic/English)
2. Enter your topic or idea
3. Add optional additional information
4. Click "Generate Script" 
5. Copy or download the generated content

## Customization

### Adding New Languages
1. Add translations to `TRANSLATIONS` object in `script.js`
2. Add system message to `SYSTEM_MESSAGES` object
3. Update language toggle buttons in HTML
4. Add language-specific CSS if needed

### Modifying AI Behavior
Edit the system messages in `script.js` to change:
- Writing style
- Content structure
- Target audience
- Platform-specific optimizations

### Styling Changes
Modify `styles.css` to customize:
- Color scheme
- Typography
- Layout
- Animations

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Fast loading with minimal dependencies
- Optimized CSS and JavaScript
- Efficient API calls
- Progressive enhancement

## Security

- No sensitive data storage
- Secure API communication
- XSS protection headers
- Content Security Policy ready

## License

MIT License - Feel free to use and modify for your projects.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or issues, please create an issue in the repository or contact the developer.

---

**مدعوم بالذكاء الاصطناعي | Powered by Artificial Intelligence**"# Mr-Writer" 
