export function RecruitmentCallout() {
  return (
    <section className="section-shell recruitment-callout" aria-labelledby="recruitment-title">
      <div className="recruitment-copy">
        <p className="eyebrow">Join VAI Lab · 연구실 구성원 모집</p>
        <h2 id="recruitment-title">Undergraduate researchers and graduate students</h2>
        <p>
          자율시스템, 지능형 경로계획, 컴퓨터비전, 의료영상 AI를 함께 연구할 학부 연구생과
          대학원 진학 희망자를 모집합니다. 관심 분야와 간단한 자기소개를 이메일로 보내주세요.
        </p>
      </div>
      <div className="recruitment-actions">
        <a className="button button-light" href="mailto:tgoh@du.ac.kr?subject=VAI%20Lab%20research%20inquiry">
          Contact Prof. Taegeun Oh <span aria-hidden="true">↗</span>
        </a>
        <span>tgoh@du.ac.kr</span>
      </div>
    </section>
  );
}
