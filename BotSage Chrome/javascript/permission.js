navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  alert('Microphone access granted to BotSage. Happy learning! ;)');
  window.close();
});
