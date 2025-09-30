import React from 'react'

type FooterProps = React.HTMLProps<HTMLDivElement>

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  return (
    <footer
      ref={ref}
      className="mt-12 border-t border-gray-800 bg-slate-50 px-6 py-9 pt-16 pb-8 text-white"
    >
      <div className="flex justify-center gap-4">
        <p className="h-[48px] items-center justify-center text-center text-black">
          Made with ❤️ by Wout Klee
        </p>
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
})

// Add display name to fix the react/display-name error
Footer.displayName = 'Footer'

export default Footer
