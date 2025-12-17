import "./globals.css";
import "./page.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

// ⭐ Import Follow Cursor Component
import FollowCursor from "../components/FollowCursor";

export const metadata = {
  title: "Bath Solution",
  description: "Modern bathroom designs, fittings, and accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ⭐ Global Follow Cursor */}
        <FollowCursor />

        <Navbar />
        <main>{children}</main>

        {/* Floating WhatsApp & Phone Buttons */}
        <FloatingButtons />

        <Footer />
      </body>
    </html>
  );
}
