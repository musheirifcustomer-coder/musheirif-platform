import "./globals.css";

export const metadata = {
  title: "مركز مشيرف | Musheirif Center",
  description: "مركز خدمات العمالة المنزلية في دولة الإمارات العربية المتحدة",
  keywords: "عمالة منزلية, تدبير, الإمارات, عجمان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body style={{ margin: 0, fontFamily: "Arial", direction: "rtl" }}>
        {children}
      </body>
    </html>
  );
}