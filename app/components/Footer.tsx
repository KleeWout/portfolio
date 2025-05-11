import React from 'react'
interface FooterProps {}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  return (
    <footer
      ref={ref}
      className="mt-12 border-t border-gray-800 bg-slate-50 px-6 py-9 pt-16 pb-8 text-white dark:border-gray-200 dark:bg-neutral-900"
    >
      <div className="flex justify-center gap-4">
        <p className="h-[48px] items-center justify-center text-center text-black dark:text-white">
          Made with ❤️ by Wout Klee
        </p>
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
})

export default Footer
