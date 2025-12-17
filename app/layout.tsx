export const metadata = {
  title: "PentestX Cybersecurity | VAPT Services",
  description: "PentestX Cybersecurity provides enterprise-grade Vulnerability Assessment and Penetration Testing services."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
