// -----------------------------
//       로그인 기능 구현
// -----------------------------

function login() {
  const id = document.getElementById("username")?.value;
  const pw = document.getElementById("password")?.value;
  const error = document.getElementById("login-error");

  if (id === "sungjoon" && pw === "dhvmsthtm") {
    window.location.href = "home.html";
  } else if (error) {
    error.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
  }
}

// 로그인 버튼이 존재할 때만 클릭 이벤트 실행
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", login);
}

// -----------------------------
//   메뉴 클릭 시 화면 전환 기능
// -----------------------------

const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".content-section");

if (menuItems.length > 0) {
  menuItems.forEach(item => {
    item.addEventListener("click", () => {

      menuItems.forEach(m => m.classList.remove("active"));
      item.classList.add("active");

      sections.forEach(sec => sec.classList.remove("active"));

      const target = item.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });
}

// -----------------------------
//    오늘 날짜 자동 표시 기능
// -----------------------------

function setTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const dateElement = document.querySelector(".content-date");
  if (dateElement) {
    dateElement.textContent = `${year}.${month}.${day}`;
  }
}

setTodayDate();

// -----------------------------
//      방명록 기능 구현
// -----------------------------

const guestForm = document.getElementById("guestbook-form");
const guestList = document.getElementById("guestbook-list");

if (guestForm) {
  guestForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("guest-name").value;
    const message = document.getElementById("guest-message").value;

    const entry = document.createElement("div");
    entry.classList.add("guest-entry");
    entry.innerHTML = `
      <p><strong>${name}</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
    `;

    guestList.prepend(entry);
    guestForm.reset();
  });
}
