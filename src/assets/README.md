# Assets Folder

This folder contains all static assets for your portfolio website.

## Folder Structure

```
src/assets/
├── images/          # General images (profile photos, backgrounds, etc.)
├── icons/           # Icon files (SVG, PNG, etc.)
├── logos/           # Logo files
├── projects/        # Project screenshots and images
├── certificates/    # Certificate images and badges
├── awards/          # Award images and certificates
├── books/           # Book cover images
└── CV/              # Your CV and resume files
```

## Usage Guidelines

### Images
- **Profile Photos**: Place your profile picture in `images/` folder
- **Project Screenshots**: Add project images to `projects/` folder
- **Certificate Images**: Store certificate badges in `certificates/` folder
- **Award Images**: Place award images in `awards/` folder
- **Book Covers**: Add book cover images to `books/` folder

### File Naming Convention
- Use lowercase letters and hyphens: `my-project-screenshot.jpg`
- Be descriptive: `ecommerce-platform-dashboard.png`
- Include dimensions if needed: `profile-photo-400x400.jpg`

### Supported Formats
- **Images**: JPG, PNG, WebP, SVG
- **Icons**: SVG (preferred), PNG
- **Documents**: PDF, DOC, DOCX

### How to Reference Assets in Code

```typescript
// In your components, reference assets like this:
import profileImage from '@/assets/images/profile-photo.jpg'
import projectScreenshot from '@/assets/projects/ecommerce-dashboard.png'
import certificateBadge from '@/assets/certificates/aws-badge.png'
```

### Next.js Image Optimization

For better performance, use Next.js Image component:

```tsx
import Image from 'next/image'
import projectImage from '@/assets/projects/my-project.png'

<Image
  src={projectImage}
  alt="Project description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## Adding Your Assets

1. **Profile Photo**: Add your professional photo to `images/` folder
2. **Project Screenshots**: Add screenshots of your projects to `projects/` folder
3. **Certificates**: Add certificate images to `certificates/` folder
4. **Awards**: Add award images to `awards/` folder
5. **Book Covers**: Add book cover images to `books/` folder

## Tips

- Keep file sizes reasonable (under 1MB for images)
- Use WebP format when possible for better compression
- Optimize images before adding them
- Use descriptive file names
- Organize files logically in appropriate subfolders 