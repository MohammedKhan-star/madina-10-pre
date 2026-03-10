import "./globals.css";

export const metadata = {
  title: "SSC Result Portal",
  description: "10th Pre-Final Results Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}