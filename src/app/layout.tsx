import "./globals.css"
import { AuthProvider } from "@/context/authContext"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "ResumeTailor",
    description: "Website that helps tailor your resume to open job positions leveraging AI."
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark" style={{ background: "linear-gradient(135deg, hsl(222, 60%, 8%) 0%, hsl(222, 47%, 11%) 50%, hsl(220, 60%, 12%) 100%)", backgroundColor: "#0f172a" }}>
            <body className="flex flex-col h-screen w-screen">
                <AuthProvider>
                    <div className="flex w-full h-full">
                        {children}
                    </div>
                </AuthProvider>
            </body>
        </html>
    )
}
