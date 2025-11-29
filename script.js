// small interactive hint: floating glow follow pointer (subtle)
document.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.glow-circle');
  if (!glow) return;
  const rect = glow.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  const dx = (e.clientX - cx) * 0.02;
  const dy = (e.clientY - cy) * 0.02;
  glow.style.transform = translate(${dx + 10}px, ${dy}px);
});