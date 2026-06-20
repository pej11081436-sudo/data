const lessons = [
  { icon: "◉", title: "데이터, 넌 누구니?", desc: "생활 속 데이터와 디지털 변환의 가치를 발견해요.", standard: "[9정02-01]", activity: "오늘 하루 동안 만난 데이터 5가지를 찾아 아날로그와 디지털로 구분해 보세요." },
  { icon: "01", title: "디지털로 표현하기", desc: "문자, 숫자, 이미지와 소리가 데이터가 되는 원리를 알아봐요.", standard: "[9정02-01]", activity: "같은 정보를 숫자, 기호, 그림의 세 가지 방식으로 표현해 보세요." },
  { icon: "?", title: "좋은 데이터 찾기", desc: "문제 해결에 꼭 필요한 데이터가 무엇인지 판단해요.", standard: "[9정02-02]", activity: "'매점 대기 줄 줄이기'에 필요한 데이터와 필요하지 않은 데이터를 골라 보세요." },
  { icon: "▦", title: "수집하고 관리하기", desc: "설문을 설계하고 데이터를 정확하게 분류해요.", standard: "[9정02-02]", activity: "답하기 쉽고 분석하기 좋은 설문 문항 3개를 만들어 보세요." },
  { icon: "▥", title: "표로 정리하기", desc: "복잡한 데이터를 표와 다이어그램으로 구조화해요.", standard: "[9정02-03]", activity: "우리 반 통학 방법 데이터를 빈도표와 막대그래프로 바꾸어 보세요." },
  { icon: "↗", title: "관계 발견하기", desc: "데이터의 차이와 경향을 찾아 의미를 해석해요.", standard: "[9정02-04]", activity: "수면 시간과 집중도 데이터에서 보이는 경향을 한 문장으로 설명해 보세요." },
  { icon: "＋", title: "교과를 연결하기", desc: "여러 학문의 데이터를 함께 보며 해결책을 만들어요.", standard: "[9정02-05]", activity: "환경, 수학, 사회 교과가 학교 쓰레기 문제에 어떤 데이터를 제공할지 연결해 보세요." },
  { icon: "★", title: "데이터로 바꾸기", desc: "학교생활의 문제를 분석하고 해결책을 제안해요.", standard: "종합 프로젝트", activity: "문제를 정하고 수집, 분석, 해석한 결과를 한 장의 데이터 보고서로 완성해 보세요." }
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
    <div class="dialog-lesson-icon">${lesson.icon}</div>
    <p class="dialog-meta">LESSON ${index + 1} · ${lesson.standard}</p>
    <h2>${lesson.title}</h2><p>${lesson.desc}</p>
    <div class="dialog-activity"><strong>오늘의 탐험 활동</strong><p>${lesson.activity}</p></div>
    <button class="button primary complete-button" type="button" data-complete="${index}">${completed.includes(index) ? "완료 취소" : "학습 완료 표시"}</button>`;
  lessonDialog.showModal();
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
