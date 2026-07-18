export const metadata = {
  title: 'Oryx9 Trading Platform',
  description: 'AI Trading Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0, fontFamily: 'system-ui', background: '#0a0a0a', color: 'white'}}>
        {children}
      </body>
    </html>
  )
    }
