function showPage(pageId) {
    const sections = document.querySelectorAll(".page, .intro");
    sections.forEach(s => s.classList.add("hidden"));
  
    const target = document.getElementById(pageId);
    if (target) target.classList.remove("hidden");
  
    // Autoplay musik
    const music = document.getElementById("bg-music");
    music.volume = 0.5;
    music.play().catch(() => {
      document.addEventListener("click", () => music.play(), { once: true });
    });
  }
  
  function showLetterContent() {
    showPage("letterContent");
  }
  
  function openGift() {
    window.location.href = "https://gifft.me/o/d/jyj49w1or5uc5n3dg3fowu4n";
  }
  
  window.onload = () => {
    showPage("intro");
  };
  
  // Efek bunga jatuh saat scroll
  window.addEventListener("scroll", () => {
    const flower = document.getElementById("flower");
    if (window.scrollY > 50) {
      flower.classList.add("fall");
    } else {
      flower.classList.remove("fall");
    }
  });
  