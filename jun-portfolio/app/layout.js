import ParticlesComponent from "./components/Particles";
import "./globals.css";
import GradientFollow from "./components/GradientFollow";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-black scroll-smooth">
      <body
        className="min-h-full flex justify-center"
        style={{
          background: `radial-gradient(circle at 40% 30%, rgba(255, 165, 0, 0.2), transparent 50%),
             radial-gradient(circle at 80% 60%, rgba(138, 43, 226, 0.2), transparent 50%),
             linear-gradient(to bottom, #0f0c29, #302b63)`,
          color: "#fff",
        }}
      >
        <GradientFollow/>
        <ParticlesComponent id="particles" />
        {children}
      </body>
    </html>
  );
}
