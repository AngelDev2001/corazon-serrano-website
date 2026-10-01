import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Corazón Serrano | Música que nos une', description: 'Escucha a Corazón Serrano: cumbia peruana para sentir, cantar y bailar.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
