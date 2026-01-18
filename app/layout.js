
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html>
      <body className="p-4">
        {children}
      </body>
    </html>
  );
}
