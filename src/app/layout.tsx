import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de Notas",
  description: "Seu gerenciador de lista de notas!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
