/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
function getNode(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

const body = getNode("body");
const nav = getNode("ul");
const img = getNode(".visual img");
const container = getNode(".container");

function setBgColor(data, index) {
  body.style.background = `linear-gradient(to bottom, ${data[index - 1].color[0]}, ${data[index - 1].color[1]})`;
}

function setImage(data, index) {
  img.src = `/mission02/client/assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  img.alt = data[index - 1].alt;
}

function setNameText(ele, type, title) {
  ele.insertAdjacentHTML(`${type}`, title);
}
function handler(e) {
  e.preventDefault();

  const target = e.target.closest("li");
  const list = [...this.children];

  if (!target) return;

  const index = target.dataset.index;
  const nickName = getNode(".nickName");
  //원래 함수 실행되는 시점에서 가져오지 않고 함수 밖에서 가져왔더니 삭제가 안되고 계속 추가되는 현상이 생겼다
  const title = `<h1 class="nickName">${data[index - 1].name}</h1>`;

  list.forEach((li) => li.classList.remove("is-active"));

  if (nickName) {
    nickName.remove();
  }

  setNameText(container, "afterbegin", title);
  setBgColor(data, index);
  setImage(data, index);

  target.classList.add("is-active");
}

nav.addEventListener("click", handler);
