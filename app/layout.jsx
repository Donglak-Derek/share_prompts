import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Ai 인공지능 프롬프트 천국",
  description: "Ai 인공지능 프롬프트를 발견하고 공유하자",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
