export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite + React</title>
            </head>
            <body>
                <div id="root">{children}</div>
                <script type="module" src="/src/main.jsx"></script>
            </body>
        </html>
    )
}