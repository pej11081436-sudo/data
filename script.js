const lessons = [
  {
    icon: "◉", title: "데이터, 넌 누구니?", desc: "생활 속 데이터와 디지털 변환의 가치를 발견해요.", standard: "[9정02-01]",
    storyTitle: "떡볶이는 언제 도착할까?", story: "다온이는 배달 앱을 열었습니다. 지도에는 배달원의 위치, 남은 거리, 예상 도착 시간이 계속 바뀌고 있었어요. 앱은 위치와 속도라는 데이터를 모아 '12분 뒤 도착'이라는 유용한 정보로 바꾼 것입니다. 종이에 적힌 주소도 데이터지만, 디지털로 바꾸면 빠르게 검색하고 계산하고 공유할 수 있어요.",
    concept: ["데이터는 관찰하거나 측정한 값, 문자, 이미지 등의 기록이에요.", "디지털 데이터는 컴퓨터가 저장하고 처리할 수 있는 형태예요.", "디지털 변환은 검색, 복사, 분석, 공유를 쉽고 빠르게 해요."],
    example: "종이 출석부를 디지털 출석부로 바꾸면 결석 횟수를 자동으로 계산하고 월별 변화를 바로 확인할 수 있어요.",
    activity: "오늘 등교 후 만난 데이터 5가지를 적고, 디지털 데이터에는 D, 아날로그 데이터에는 A를 표시해 보세요.",
    quiz: [
      { q: "다음 중 데이터가 아닌 것은?", options: ["오늘 기온 24℃", "급식 만족도 4점", "아무 기록도 하지 않은 생각", "운동장 사진"], answer: 2, why: "기록되지 않은 생각은 컴퓨터가 활용할 수 있는 데이터가 아닙니다." },
      { q: "종이 도서 대출 기록을 디지털로 바꿀 때 가장 큰 장점은?", options: ["종이가 더 많이 필요하다", "인기 도서를 빠르게 검색·분석할 수 있다", "글씨를 반드시 손으로 써야 한다", "자료를 한 명만 볼 수 있다"], answer: 1, why: "디지털 데이터는 검색과 계산, 공유가 빠릅니다." }
    ]
  },
  {
    icon: "01", title: "디지털로 표현하기", desc: "문자, 숫자, 이미지와 소리가 데이터가 되는 원리를 알아봐요.", standard: "[9정02-01]",
    storyTitle: "사진을 확대했더니 네모가 나타났다!", story: "서준이는 친구 사진을 아주 크게 확대했습니다. 매끈했던 얼굴이 빨강, 초록, 파랑빛의 작은 네모로 보였어요. 이 네모는 픽셀입니다. 컴퓨터는 색을 숫자로 바꾸어 저장해요. 글자는 문자 코드, 소리는 일정한 간격으로 측정한 숫자, 사진은 픽셀의 색상값으로 표현합니다.",
    concept: ["컴퓨터는 다양한 데이터를 0과 1의 조합으로 표현해요.", "문자는 약속된 문자 코드, 이미지는 픽셀과 색상값으로 저장해요.", "같은 내용도 숫자, 문자, 표, 그림 등 목적에 맞는 형태로 표현할 수 있어요."],
    example: "교실 온도 25℃는 숫자로 저장할 수 있고, '더움'이라는 문자나 빨간 온도계 그림으로도 표현할 수 있어요.",
    activity: "오늘의 기분을 숫자(1~5), 한 단어, 이모양 그림의 세 가지 방식으로 표현하고 장단점을 비교하세요.",
    quiz: [
      { q: "디지털 사진을 이루는 가장 작은 점은?", options: ["폴더", "픽셀", "파일명", "스피커"], answer: 1, why: "디지털 이미지는 수많은 픽셀의 색상값으로 이루어집니다." },
      { q: "컴퓨터에서 문자 'A'를 저장하는 방법으로 알맞은 것은?", options: ["향기로 바꾼다", "문자 코드에 따른 숫자로 바꾼다", "종이에만 쓴다", "온도로 바꾼다"], answer: 1, why: "컴퓨터는 약속된 문자 코드를 사용해 문자를 숫자로 표현합니다." }
    ]
  },
  {
    icon: "?", title: "좋은 데이터 찾기", desc: "문제 해결에 꼭 필요한 데이터가 무엇인지 판단해요.", standard: "[9정02-02]",
    storyTitle: "매점 줄을 줄여라!", story: "쉬는 시간마다 매점 앞에 긴 줄이 생겼습니다. 민지는 해결을 위해 학생의 키, 좋아하는 색, 도착 시각, 계산 시간, 인기 상품을 모두 모으려 했어요. 하지만 데이터가 많다고 해결이 잘되는 것은 아닙니다. '대기 시간을 줄인다'는 목적과 직접 관련된 도착 시각, 시간대별 인원, 계산 시간이 더 중요한 데이터입니다.",
    concept: ["먼저 해결하려는 문제를 구체적인 질문으로 만들어요.", "문제와 관련 있고 측정 가능한 데이터를 선택해요.", "불필요한 개인정보는 수집하지 않는 것이 원칙이에요."],
    example: "급식 잔반을 줄이려면 학생의 전화번호보다 메뉴별 배식량과 남은 양이 더 적합한 데이터예요.",
    activity: "'아침 지각을 줄이려면?'이라는 문제에 필요한 데이터 3개와 필요하지 않은 데이터 2개를 골라 이유를 써 보세요.",
    quiz: [
      { q: "매점 대기 시간을 줄이기 위해 가장 필요한 데이터는?", options: ["학생이 좋아하는 색", "시간대별 대기 인원", "학생의 혈액형", "교실 창문 수"], answer: 1, why: "시간대별 대기 인원은 혼잡한 시간을 직접 보여 줍니다." },
      { q: "데이터를 수집하기 전에 가장 먼저 할 일은?", options: ["무조건 많이 모으기", "문제와 목적 정하기", "친구 이름 공개하기", "예쁜 그래프 고르기"], answer: 1, why: "목적이 분명해야 어떤 데이터가 필요한지 판단할 수 있습니다." }
    ]
  },
  {
    icon: "▦", title: "수집하고 관리하기", desc: "설문을 설계하고 데이터를 정확하게 분류해요.", standard: "[9정02-02]",
    storyTitle: "선택지가 이상한 설문", story: "학생회가 '학교 축제가 얼마나 재미있었나요?'라고 묻고 선택지를 '매우 재미있다, 정말 재미있다' 두 개만 제시했습니다. 재미없었던 학생은 답할 수 없었죠. 좋은 설문은 질문이 한 가지 뜻으로 분명하고, 선택지가 겹치지 않으며, 누구나 자신의 답을 고를 수 있어야 합니다.",
    concept: ["수집 방법에는 관찰, 측정, 설문, 공개 데이터 활용 등이 있어요.", "분류 기준은 서로 겹치지 않고 빠짐이 없어야 해요.", "오타, 빈칸, 중복값을 확인하고 개인정보를 보호해야 해요."],
    example: "하루 운동 시간을 '0분, 1~30분, 31~60분, 61분 이상'으로 나누면 모든 답이 한 구간에 들어가요.",
    activity: "우리 반이 좋아하는 체육 활동을 알아볼 수 있도록 질문 1개와 겹치지 않는 선택지를 만들어 보세요.",
    quiz: [
      { q: "좋은 설문 문항은?", options: ["운동과 독서를 좋아하나요?", "하루 평균 운동 시간은 몇 분인가요?", "당연히 급식이 맛있죠?", "이름과 비밀번호를 쓰세요"], answer: 1, why: "한 가지 내용을 구체적으로 묻고 측정할 수 있는 질문입니다." },
      { q: "수집한 데이터에서 같은 응답이 두 번 들어갔다면?", options: ["그대로 둔다", "중복 여부를 확인하고 정리한다", "모두 삭제한다", "임의로 값을 바꾼다"], answer: 1, why: "중복과 오류를 점검해야 분석 결과가 정확해집니다." }
    ]
  },
  {
    icon: "▥", title: "표로 정리하기", desc: "복잡한 데이터를 표와 다이어그램으로 구조화해요.", standard: "[9정02-03]",
    storyTitle: "30명의 대답을 3초 만에 읽는 법", story: "반 친구 30명이 좋아하는 급식 메뉴를 말하자 칠판이 글자로 가득 찼습니다. '제육, 카레, 제육, 떡볶이…'만 보고는 인기 메뉴를 알기 어려웠어요. 메뉴별 인원수를 표로 묶고 막대그래프로 바꾸자 제육이 가장 인기 있다는 사실이 바로 보였습니다. 구조화는 흩어진 데이터에 질서를 만드는 일입니다.",
    concept: ["표는 행과 열을 이용해 정확한 값을 찾기 좋아요.", "막대그래프는 항목의 크기 비교, 꺾은선그래프는 시간에 따른 변화에 적합해요.", "제목, 단위, 항목 이름을 표시해야 오해가 없어요."],
    example: "월별 기온 변화는 꺾은선그래프, 통학 수단별 학생 수는 막대그래프로 나타내면 이해하기 쉬워요.",
    activity: "통학 수단 데이터 '도보 8, 버스 12, 자전거 4, 자동차 6'을 표로 그리고 가장 알맞은 그래프를 선택하세요.",
    quiz: [
      { q: "1월부터 12월까지 키의 변화를 나타내기 좋은 것은?", options: ["꺾은선그래프", "낱말 카드", "지도", "사진 한 장"], answer: 0, why: "시간에 따른 연속적인 변화는 꺾은선그래프로 보기 좋습니다." },
      { q: "좋은 그래프에 반드시 표시할 정보는?", options: ["그린 사람의 별명만", "제목과 단위", "좋아하는 노래", "무관한 사진"], answer: 1, why: "제목과 단위가 있어야 무엇을 어떤 크기로 표현했는지 알 수 있습니다." }
    ]
  },
  {
    icon: "↗", title: "관계 발견하기", desc: "데이터의 차이와 경향을 찾아 의미를 해석해요.", standard: "[9정02-04]",
    storyTitle: "잠을 많이 자면 집중력이 높아질까?", story: "유나는 일주일 동안 수면 시간과 다음 날 집중도 점수를 기록했습니다. 대체로 7시간 이상 잔 날의 점수가 높았지만, 하루는 푹 자고도 점수가 낮았어요. 데이터에서 함께 변하는 경향은 찾을 수 있지만, 한 가지 원인이 결과를 반드시 만들었다고 단정하면 안 됩니다. 스트레스나 식사 같은 다른 요인도 있기 때문입니다.",
    concept: ["최댓값, 최솟값, 평균과 변화 방향을 살펴봐요.", "두 데이터가 함께 변하는 경향을 관계라고 할 수 있어요.", "관계가 보인다고 곧바로 원인과 결과라고 단정할 수는 없어요."],
    example: "아이스크림 판매량과 물놀이 사고가 함께 늘어도 아이스크림이 사고의 원인은 아니에요. 더운 날씨라는 공통 요인이 있을 수 있어요.",
    activity: "수면 5시간·집중도 2점, 6시간·3점, 7시간·4점, 8시간·4점 자료에서 보이는 관계와 단정할 수 없는 점을 쓰세요.",
    quiz: [
      { q: "두 데이터가 함께 증가했다면 항상 원인과 결과일까?", options: ["항상 그렇다", "다른 요인을 확인해야 한다", "데이터를 버려야 한다", "큰 값만 보면 된다"], answer: 1, why: "관계는 원인을 뜻하지 않으므로 다른 요인과 충분한 자료를 확인해야 합니다." },
      { q: "3, 5, 7점의 평균은?", options: ["3점", "5점", "7점", "15점"], answer: 1, why: "(3+5+7)÷3 = 5점입니다." }
    ]
  },
  {
    icon: "＋", title: "교과를 연결하기", desc: "여러 학문의 데이터를 함께 보며 해결책을 만들어요.", standard: "[9정02-05]",
    storyTitle: "집중하기 좋은 교실을 찾아라", story: "2교시에는 집중이 잘됐지만 5교시에는 자꾸 졸렸습니다. 과학에서는 온도와 이산화탄소 농도를 측정하고, 수학에서는 평균을 계산하고, 사회에서는 학생 설문을 분석했습니다. 세 교과의 데이터를 합치자 오후에 온도와 이산화탄소 농도가 높다는 사실을 발견했고, 쉬는 시간 환기라는 해결책을 만들었습니다.",
    concept: ["복잡한 문제는 한 종류의 데이터만으로 설명하기 어려워요.", "여러 교과의 관점과 데이터를 연결하면 더 나은 해결책을 찾을 수 있어요.", "해결책은 분석 결과라는 근거와 함께 제시해야 해요."],
    example: "학교 주변 교통 문제는 차량 수(수학), 소음 크기(과학), 주민 의견(사회)을 함께 분석할 수 있어요.",
    activity: "학교 에너지 절약을 위해 과학, 수학, 사회 교과에서 각각 수집할 데이터 한 가지씩을 정하세요.",
    quiz: [
      { q: "교실 집중도 문제를 융합적으로 분석한 것은?", options: ["학생 기분만 묻기", "온도·공기질·집중도 설문을 함께 보기", "창문 색만 조사하기", "데이터 없이 결론 내리기"], answer: 1, why: "환경 측정값과 학생 경험을 함께 보면 문제를 여러 관점에서 이해할 수 있습니다." },
      { q: "데이터 기반 해결책에 꼭 필요한 것은?", options: ["근거가 되는 분석 결과", "가장 큰 목소리", "무조건 비싼 장비", "친구의 추측 하나"], answer: 0, why: "해결책이 왜 효과적인지 보여 주는 데이터 근거가 필요합니다." }
    ]
  },
  {
    icon: "★", title: "데이터로 바꾸기", desc: "학교생활의 문제를 분석하고 해결책을 제안해요.", standard: "종합 프로젝트",
    storyTitle: "잔반 탐정단의 마지막 임무", story: "급식실 잔반이 많다는 말을 들은 탐정단은 '학생들이 편식해서 그래'라고 단정하지 않았습니다. 5일간 메뉴, 배식량, 남은 양, 만족도를 수집했습니다. 국이 많이 남는 날은 양이 많았고, 매운 메뉴는 저학년 만족도가 낮았어요. 탐정단은 작은 국자 선택과 맵기 표시를 제안했고, 다음 주 잔반량이 줄었는지 다시 측정하기로 했습니다.",
    concept: ["문제 정의 → 데이터 수집 → 구조화 → 분석 → 해석 → 해결책 제안 순서로 진행해요.", "좋은 결론은 데이터로 설명할 수 있고 문제와 직접 연결돼요.", "실행 후 다시 측정하면 해결책의 효과를 확인할 수 있어요."],
    example: "'잔반이 많다'보다 '점심 한 끼 평균 잔반량을 20% 줄이자'처럼 측정 가능한 목표가 좋아요.",
    activity: "우리 학교 문제 하나를 골라 조사 질문, 필요한 데이터 3개, 표현 방법, 예상 해결책을 한 장에 설계하세요.",
    quiz: [
      { q: "데이터 프로젝트의 올바른 순서는?", options: ["결론→수집→문제", "문제→수집→분석→제안", "그래프→추측→삭제", "제안→문제→수집"], answer: 1, why: "먼저 문제를 정하고 관련 데이터를 수집·분석한 뒤 근거 있는 해결책을 제안합니다." },
      { q: "해결책을 실행한 뒤 해야 할 일은?", options: ["결과를 확인하지 않는다", "다시 데이터를 측정해 효과를 확인한다", "원래 데이터를 지운다", "무조건 성공했다고 발표한다"], answer: 1, why: "실행 전후 데이터를 비교해야 해결책이 실제로 효과가 있었는지 알 수 있습니다." }
    ]
  }
];

const standards = [
  ["9정02-01", "실생활 데이터의 디지털 변환과 활용 가치를 탐색하고 다양한 데이터를 디지털 형태로 표현한다."],
  ["9정02-02", "문제 해결에 적합한 데이터를 수집하고 목적에 맞게 구분하여 관리한다."],
  ["9정02-03", "실생활의 데이터를 표, 다이어그램 등 다양한 형태로 구조화한다."],
  ["9정02-04", "데이터 간의 관계를 파악하고 데이터에 기반하여 의미를 해석한다."],
  ["9정02-05", "여러 학문 분야의 데이터를 수집·분석하여 융합적으로 문제를 해결한다."]
];

const lessonGrid = document.querySelector("#lessonGrid");
const tocLessons = document.querySelector("#tocLessons");
const lessonDialog = document.querySelector("#lessonDialog");
const lessonDialogContent = document.querySelector("#lessonDialogContent");
let completed = JSON.parse(localStorage.getItem("dataLessonProgress") || "[]");

function renderLessons() {
  lessonGrid.innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-card ${completed.includes(index) ? "done" : ""}" data-index="${index}" type="button">
      <span class="lesson-number">LESSON ${String(index + 1).padStart(2, "0")}</span>
      <span class="lesson-icon">${lesson.icon}</span>
      <h3>${lesson.title}</h3><p>${lesson.desc}</p>
      <footer><span>${lesson.standard}</span><b>${completed.includes(index) ? "✓" : "→"}</b></footer>
    </button>`).join("");
  document.querySelector("#progressPercent").textContent = `${Math.round(completed.length / lessons.length * 100)}%`;
  const percent = Math.round(completed.length / lessons.length * 100);
  document.querySelector("#tocProgressPercent").textContent = `${percent}%`;
  document.querySelector("#tocProgressBar").style.width = `${percent}%`;
  document.querySelector("#tocProgressText").textContent = `${lessons.length}개 차시 중 ${completed.length}개 완료`;
  tocLessons.innerHTML = lessons.map((lesson, index) => `
    <a href="#lessons" class="toc-lesson ${completed.includes(index) ? "done" : ""}" data-lesson="${index}" data-section="lessons">
      <span>${String(index + 1).padStart(2, "0")}</span><b>${lesson.title}</b><i>${completed.includes(index) ? "✓" : ""}</i>
    </a>`).join("");
}

lessonGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".lesson-card");
  if (!card) return;
  const index = Number(card.dataset.index);
  const lesson = lessons[index];
  lessonDialogContent.innerHTML = `
    <header class="lesson-detail-head">
      <div class="dialog-lesson-icon">${lesson.icon}</div>
      <div><p class="dialog-meta">LESSON ${index + 1} · ${lesson.standard}</p><h2>${lesson.title}</h2><p>${lesson.desc}</p></div>
    </header>
    <section class="story-box"><span>이야기로 시작하기</span><h3>${lesson.storyTitle}</h3><p>${lesson.story}</p></section>
    <section class="concept-box"><span>핵심 개념 3</span><h3>이것만은 꼭 기억해요</h3><ol>${lesson.concept.map(item => `<li>${item}</li>`).join("")}</ol></section>
    <section class="example-box"><div>생활 속 사례</div><p>${lesson.example}</p></section>
    <div class="dialog-activity"><strong>직접 해보기</strong><p>${lesson.activity}</p><textarea rows="3" placeholder="나의 생각을 여기에 적어 보세요." aria-label="활동 답안"></textarea></div>
    <section class="lesson-quiz-section">
      <span>마무리 퀴즈</span><h3>배운 내용을 확인해 볼까요?</h3>
      ${lesson.quiz.map((quiz, quizIndex) => `
        <article class="lesson-quiz" data-quiz="${quizIndex}" data-answer="${quiz.answer}">
          <strong>Q${quizIndex + 1}. ${quiz.q}</strong>
          <div>${quiz.options.map((option, answerIndex) => `<button type="button" data-quiz-answer="${answerIndex}"><b>${answerIndex + 1}</b>${option}</button>`).join("")}</div>
          <p class="lesson-quiz-feedback" aria-live="polite"></p>
        </article>`).join("")}
    </section>
    <div class="lesson-finish"><p>두 문제를 풀었다면 오늘의 탐험 완료!</p><button class="button primary complete-button" type="button" data-complete="${index}">${completed.includes(index) ? "완료 취소" : "학습 완료 표시"}</button></div>`;
  lessonDialog.showModal();
  lessonDialog.scrollTop = 0;
});

tocLessons.addEventListener("click", event => {
  const link = event.target.closest("[data-lesson]");
  if (!link) return;
  event.preventDefault();
  const index = Number(link.dataset.lesson);
  setToc(false);
  document.querySelector(`.lesson-card[data-index="${index}"]`)?.click();
});

lessonDialog.addEventListener("click", (event) => {
  const answerButton = event.target.closest("[data-quiz-answer]");
  if (answerButton) {
    const quizBox = answerButton.closest(".lesson-quiz");
    const selected = Number(answerButton.dataset.quizAnswer);
    const correct = Number(quizBox.dataset.answer);
    quizBox.querySelectorAll("button").forEach((button, buttonIndex) => {
      button.classList.toggle("correct", buttonIndex === correct);
      button.classList.toggle("wrong", buttonIndex === selected && selected !== correct);
    });
    const lessonIndex = Number(lessonDialogContent.querySelector("[data-complete]").dataset.complete);
    const feedback = quizBox.querySelector(".lesson-quiz-feedback");
    feedback.textContent = `${selected === correct ? "정답이에요!" : "아쉬워요. 정답을 확인해 보세요."} ${lessons[lessonIndex].quiz[Number(quizBox.dataset.quiz)].why}`;
    return;
  }
  const button = event.target.closest("[data-complete]");
  if (!button) return;
  const index = Number(button.dataset.complete);
  completed = completed.includes(index) ? completed.filter(item => item !== index) : [...completed, index];
  localStorage.setItem("dataLessonProgress", JSON.stringify(completed));
  renderLessons();
  lessonDialog.close();
});

document.querySelectorAll(".dialog-close").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelector("#standardsList").innerHTML = standards.map(([code, text]) => `<article><b>[${code}]</b><p>${text}</p></article>`).join("");
document.querySelector("#openStandards").addEventListener("click", () => document.querySelector("#standardsDialog").showModal());

document.querySelector("#progressButton").addEventListener("click", () => {
  document.querySelector(".progress-pop")?.remove();
  const pop = document.createElement("div");
  pop.className = "progress-pop";
  pop.innerHTML = `<p><strong>${completed.length}차시</strong>를 완료했어요.</p><small>${lessons.length - completed.length}차시가 남았습니다.</small>`;
  document.body.append(pop);
  setTimeout(() => pop.remove(), 2600);
});

const sideToc = document.querySelector("#sideToc");
const tocToggle = document.querySelector("#tocToggle");
function setToc(open) {
  sideToc.classList.toggle("open", open);
  tocToggle.setAttribute("aria-expanded", String(open));
}
tocToggle.addEventListener("click", () => setToc(!sideToc.classList.contains("open")));
document.querySelector("#tocClose").addEventListener("click", () => setToc(false));
document.querySelector(".toc-nav").addEventListener("click", event => {
  if (event.target.closest("a") && !event.target.closest("[data-lesson]")) setToc(false);
});

const observedSections = ["home", "lessons", "lab", "project"].map(id => document.querySelector(`#${id}`));
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  document.querySelectorAll(".toc-nav a").forEach(link => {
    link.classList.toggle("active", link.dataset.section === visible.target.id);
  });
}, { rootMargin: "-20% 0px -55%", threshold: [0, .2, .5] });
observedSections.forEach(section => sectionObserver.observe(section));

const sampleData = [{ name: "하늘", time: 2 }, { name: "윤서", time: 4.5 }, { name: "지우", time: 3 }];
let chartData = JSON.parse(localStorage.getItem("screenTimeData") || "null") || sampleData;
const chart = document.querySelector("#chart");
const insight = document.querySelector("#insight p");

function renderChart() {
  const max = Math.max(...chartData.map(item => item.time), 1);
  chart.innerHTML = chartData.map(item => `<div class="bar-wrap"><strong>${item.time}h</strong><div class="bar" style="height:${item.time / max * 82}%"></div><span>${item.name}</span></div>`).join("");
  const average = chartData.reduce((sum, item) => sum + item.time, 0) / chartData.length;
  const highest = chartData.reduce((a, b) => a.time > b.time ? a : b);
  insight.textContent = `${chartData.length}명의 평균은 ${average.toFixed(1)}시간이고, 가장 긴 기록은 ${highest.name}의 ${highest.time}시간이에요.`;
}

document.querySelector("#dataForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#studentName").value.trim();
  const time = Number(document.querySelector("#screenTime").value);
  if (!name || Number.isNaN(time)) return;
  chartData.push({ name, time });
  localStorage.setItem("screenTimeData", JSON.stringify(chartData));
  event.target.reset();
  renderChart();
});

document.querySelector("#resetData").addEventListener("click", () => {
  chartData = [...sampleData];
  localStorage.removeItem("screenTimeData");
  renderChart();
});

document.querySelector("#quizOptions").addEventListener("click", event => {
  const option = event.target.closest("button");
  if (!option) return;
  document.querySelectorAll("#quizOptions button").forEach(button => button.classList.remove("correct", "wrong"));
  const correct = option.dataset.correct === "true";
  option.classList.add(correct ? "correct" : "wrong");
  document.querySelector("#quizFeedback").textContent = correct ? "정답이에요! 실제 기록을 근거로 비교한 해석입니다." : "다시 생각해 봐요. 느낌이나 단정이 아니라 관찰한 데이터가 근거로 제시되어야 해요.";
});

document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
}));

renderLessons();
renderChart();
