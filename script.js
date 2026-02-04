const dialog = document.getElementById('imageDialog');
const dialogImg = document.getElementById('dialogImage');
const closeBtn = document.getElementById('closeBtn');
const triggers = document.querySelectorAll('.popup-trigger');

// 1. 이미지 클릭 시 팝업 열기
triggers.forEach(img => {
  img.addEventListener('click', (e) => {
    dialogImg.src = e.target.src; // 클릭한 이미지 소스 복사
    dialog.showModal(); // 모달 열기 (backdrop 자동 생성)
  });
});

// 2. X 버튼 클릭 시 닫기
closeBtn.addEventListener('click', () => {
  dialog.close();
});

// 3. 외부 영역(Backdrop) 클릭 시 닫기
dialog.addEventListener('click', (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});