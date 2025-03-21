import './global.css'

export default async function BaseLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className='bg-white'>{children}</body>
    </html>
  )
}