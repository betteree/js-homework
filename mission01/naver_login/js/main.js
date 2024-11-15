const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

// getNode
function getNode(node, context = document) {
  if (typeof context === "string") context = document.querySelector(context);

  return context.querySelector(node);
}

// 변수 선언 해주기
const email_c = getNode(".user-email");
const pw_c = getNode(".user-password");
const email_input = getNode("input", email_c);
const pw_input = getNode("input", pw_c);
const email_span = getNode("span", email_c);
const pw_span = getNode("span", pw_c);
// 비밀번호와 아이디 올바른 형식
function email_vali(text) {
  if (!emailReg(text)) {
    email_span.style.display = "block";
  } else {
    email_span.style.display = "none";
  }
}

function pw_vali(text) {
  if (!pwReg(text)) {
    pw_span.style.display = "block";
  } else {
    pw_span.style.display = "none";
  }
}

email_input.addEventListener("input", (e) => {
  const email = e.target.value;
  email_vali(email);
});

pw_input.addEventListener("input", (e) => {
  const pw = e.target.value;
  pw_vali(pw);
});

// 클릭 이벤트

// 변수
const click_evt = getNode("button");

function clickhandler(e) {
  e.preventDefault();
  if (email_input.value === user.id && pw_input.value === user.pw) {
    window.location.href = "welcome.html";
  } else {
    console.log("로그인 실패!");
  }
}

click_evt.addEventListener("click", clickhandler);

// 형식 검사 함수
function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
