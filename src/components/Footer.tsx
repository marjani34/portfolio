import { personalInfo } from '@/data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 dark:bg-black text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary-400 mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-secondary-300">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-secondary-400 max-w-2xl mx-auto">
              Thank you for visiting my portfolio. I'm passionate about creating amazing digital experiences 
              and always excited to work on new projects. Let's build something incredible together!
            </p>
          </div>
          
          <div className="border-t border-secondary-700 pt-8">
            <p className="text-secondary-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-secondary-500 text-xs mt-2">
              Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 