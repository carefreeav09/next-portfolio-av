export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Carefreeav</title>
      </head>

      <body
        style={{
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
