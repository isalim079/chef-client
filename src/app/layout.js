import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "Chef",
  description: "Recipe Sharing Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <AuthProvider>
          <div className="font-poppins">{children}</div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
