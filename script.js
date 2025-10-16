const updateTime = () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  const currentTimeMs = Date.now();

  timeElement.textContent = currentTimeMs;
  timeElement.setAttribute("datetime", new Date(currentTimeMs).toISOString());
};

updateTime();
setInterval(updateTime, 1000);
