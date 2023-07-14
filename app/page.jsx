const Home = () => {
  // fix flex-center?
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        발견하고 공유하자! <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          인공지능 Ai 프롬프트
        </span>
      </h1>
      <p className="desc text-center">
        프롬프트 천국은 오픈소스 인공지능 AI 시대에 필요한 프롬프팅 툴입니다.
        <br className="max-md:hidden" />
        프로프트를 창조하고 공유해요!
      </p>

      {/** Feed */}
    </section>
  );
};

export default Home;
