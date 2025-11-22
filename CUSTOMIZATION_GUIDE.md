# RYEO LABS Customization Guide

## 📍 File Locations

### Landing Page
**File:** `packages/blog-starter-kit/themes/enterprise/pages/index.tsx`

This is your main landing page where you can customize:
- Hero section (RYEO LABS intro)
- CTA buttons
- Explore section
- Scroll animations and parallax effects

### Global Styles
**File:** `packages/blog-starter-kit/themes/enterprise/styles/globals.css`

For global CSS, font imports, and reusable style classes.

### Tailwind Configuration
**File:** `packages/blog-starter-kit/themes/enterprise/tailwind.config.js`

Your design system configuration:
- Colors (add your #C20005 red and #FFFDF3 cream here)
- Fonts
- Spacing
- Border radius defaults
- Custom animations

## 🎨 Customization Techniques

### 1. **Text & Typography**

In `index.tsx`, find any text element and modify:

```tsx
<h1 
  className="text-6xl font-bold"  // Size and weight
  style={{ 
    fontFamily: "'Swis721 Ex BT', sans-serif",  // Font
    lineHeight: '0.885'  // Line height
  }}
>
  YOUR TEXT HERE
</h1>
```

**Quick Reference:**
- `text-xs` to `text-9xl` - Font sizes
- `font-light`, `font-normal`, `font-bold` - Font weights
- `tracking-tight`, `tracking-wide` - Letter spacing
- `leading-tight`, `leading-loose` - Line height

### 2. **Spacing & Layout**

```tsx
<div 
  className="px-6 py-20"  // Padding (horizontal/vertical)
  // px = padding left & right
  // py = padding top & bottom
  // p-6 = padding all sides
>
  <div className="mb-16">  // Margin bottom
    {/* Your content */}
  </div>
</div>
```

**Spacing Scale:**
- `p-1` = 0.25rem (4px)
- `p-2` = 0.5rem (8px)
- `p-4` = 1rem (16px)
- `p-6` = 1.5rem (24px)
- `p-8` = 2rem (32px)
- `p-10` = 2.5rem (40px)
- `p-16` = 4rem (64px)
- `p-20` = 5rem (80px)

### 3. **Colors**

Your palette:
- Red: `#C20005`
- Cream: `#FFFDF3`

```tsx
// Text color
<p className="text-[#C20005]">Red text</p>

// Background color
<div style={{ backgroundColor: '#FFFDF3' }}>
  Cream background
</div>

// Border color
<button className="border-2 border-[#C20005]">
  Red border
</button>
```

### 4. **Button Styling**

```tsx
<button className="
  rounded-full          // Fully rounded (pill shape)
  rounded-3xl          // Very rounded corners
  rounded-lg           // Standard rounded
  
  px-10 py-4           // Padding
  
  bg-[#C20005]         // Background
  text-[#FFFDF3]       // Text color
  border-2             // Border width
  border-[#FFFDF3]     // Border color
  
  hover:bg-transparent // Hover effects
  hover:text-[#C20005]
  
  transition-all       // Smooth transitions
  duration-300         // Animation speed
">
  Button Text
</button>
```

### 5. **Layering & Z-Index**

For your graphic design layering:

```tsx
<div className="relative">  {/* Parent must be relative */}
  <div className="absolute z-0">  {/* Bottom layer */}
    Background image
  </div>
  
  <div className="absolute z-10">  {/* Middle layer */}
    Text overlay
  </div>
  
  <div className="relative z-20">  {/* Top layer */}
    Main content
  </div>
</div>
```

**Z-Index Scale:**
- `z-0` = 0 (bottom)
- `z-10` = 10
- `z-20` = 20
- `z-30` = 30
- `z-40` = 40
- `z-50` = 50 (top)

### 6. **Image/Text Overlays**

```tsx
<div className="relative overflow-hidden">
  {/* Background image */}
  <img 
    src="/your-image.jpg" 
    className="w-full h-full object-cover"
  />
  
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black opacity-50" />
  
  {/* Text on top */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <h2 className="text-white text-4xl font-bold">
      Overlay Text
    </h2>
  </div>
</div>
```

### 7. **Animations & Effects**

Current animations in your landing page:

```tsx
// Parallax scroll effect
style={{ 
  transform: `translateY(${scrollY * 0.5}px)`,
  opacity: 1 - scrollY / 800
}}

// Fade in on load
className={`transition-all duration-1000 ${
  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
}`}

// Hover scale
className="transition-transform hover:scale-105"

// Bounce animation
className="animate-bounce"
```

**Custom Animations:**

Add to `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
}
```

## 🔗 Creating New Pages

### 1. Create a new file in `pages/`

**Example:** `pages/explore.tsx`

```tsx
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Container } from '../components/container';

export default function ExplorePage() {
  return (
    <>
      <Head>
        <title>Explore | RYEO LABS</title>
      </Head>
      
      <Layout>
        <Header />
        
        <Container className="py-20">
          <h1 
            className="text-5xl font-bold text-center mb-16"
            style={{ 
              color: '#C20005',
              fontFamily: "'Swis721 Ex BT', sans-serif" 
            }}
          >
            Explore
          </h1>
          
          {/* Grid of buttons/cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Projects */}
            <Link href="/projects">
              <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
                <img 
                  src="/projects-image.jpg" 
                  alt="Projects"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white z-10">
                  Projects
                </h2>
              </div>
            </Link>
            
            {/* Blogs */}
            <Link href="/blog">
              <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
                <img 
                  src="/blog-image.jpg" 
                  alt="Blogs"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white z-10">
                  Blogs
                </h2>
              </div>
            </Link>
            
            {/* Timeline */}
            <Link href="/timeline">
              <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
                <img 
                  src="/timeline-image.jpg" 
                  alt="Timeline"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white z-10">
                  Timeline
                </h2>
              </div>
            </Link>
            
            {/* Collaborate */}
            <Link href="/collaborate">
              <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
                <img 
                  src="/collaborate-image.jpg" 
                  alt="Want to invent with me?"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white z-10">
                  Want to Invent with Me?
                </h2>
              </div>
            </Link>
            
          </div>
        </Container>
        
        <Footer />
      </Layout>
    </>
  );
}
```

### 2. Link to it from landing page

Update the "Explore" button in `index.tsx`:

```tsx
<Link
  href="/explore"
  className="rounded-full border-2 border-[#FFFDF3] bg-transparent px-10 py-4..."
>
  <span className="relative z-10">Explore</span>
</Link>
```

## 📐 Grid Layouts

For your graphic design approach with multiple cards/buttons:

```tsx
{/* 2 columns on mobile, 3 on tablet, 4 on desktop */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {/* Cards go here */}
</div>

{/* 1 column mobile, 2 desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Cards */}
</div>

{/* Asymmetric grid */}
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-8">Large item</div>
  <div className="col-span-12 md:col-span-4">Smaller item</div>
</div>
```

## 🖼️ Image Best Practices

### Using Next.js Image Component

```tsx
import Image from 'next/image';

<Image
  src="/your-image.jpg"  // Put in public/ folder
  alt="Description"
  width={800}
  height={600}
  className="rounded-3xl object-cover"
  priority  // For above-fold images
/>
```

### Background Images

```tsx
<div 
  className="h-screen bg-cover bg-center"
  style={{ 
    backgroundImage: "url('/hero-bg.jpg')",
    backgroundAttachment: 'fixed'  // Parallax effect
  }}
>
  {/* Content */}
</div>
```

## 🎯 Your User Flow Implementation

Based on your plan:

1. **Intro (RYEO LABS)** - Already done in hero section
2. **About/What is RYEO LABS** - Add a new section in `index.tsx` after hero
3. **Explore** - Update the current "blog-preview" section or create `/explore` page
4. **Individual pages** - Create separate pages for Projects, Blogs, Timeline, Collaborate

### Add "About" Section

Insert this in `index.tsx` after the hero section:

```tsx
{/* About Section */}
<section className="min-h-screen py-20" style={{ backgroundColor: '#FFFDF3' }}>
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 
        className="mb-8 text-5xl font-bold"
        style={{ 
          color: '#C20005',
          fontFamily: "'Swis721 Ex BT', sans-serif" 
        }}
      >
        What is RYEO LABS?
      </h2>
      
      <p 
        className="text-xl text-gray-700 mb-12 leading-relaxed"
        style={{ fontFamily: "'Alexandria', sans-serif" }}
      >
        Your description here - what RYEO LABS represents, 
        your mission, your vision, etc.
      </p>
      
      {/* Optional: Add images, icons, or graphics here */}
    </div>
  </div>
</section>
```

## 💡 Pro Tips

1. **Use `className` for Tailwind** - Faster, optimized
2. **Use `style={}` for custom values** - Like your exact colors
3. **Test responsive** - Check mobile (sm:), tablet (md:), desktop (lg:)
4. **Layer with z-index** - Higher numbers = on top
5. **Group hover effects** - Use `group` class on parent, `group-hover:` on child
6. **Optimize images** - Use Next.js Image component
7. **Keep colors consistent** - Define in `tailwind.config.js`

## 🚀 Quick Start Workflow

1. **Open:** `pages/index.tsx`
2. **Find section:** Look for `{/* Hero Section */}` or `{/* Explore */}`
3. **Edit text:** Change text between `>` and `</`
4. **Style:** Modify `className` or `style`
5. **Save:** File auto-reloads at `localhost:3002`
6. **Check browser:** See changes instantly

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [React Hooks](https://react.dev/reference/react)

---

**Your main file for customization:** 
`packages/blog-starter-kit/themes/enterprise/pages/index.tsx`

Happy designing! 🎨
