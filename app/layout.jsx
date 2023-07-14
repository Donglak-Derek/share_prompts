import "@styles/globals.css";

export const metadata = {
  title: "Ai 인공지능 프롬프트 천국",
  description: "Ai 인공지능 프롬프트를 발견하고 공유하자",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
