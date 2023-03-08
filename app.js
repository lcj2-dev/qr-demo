const container = document.getElementById('container');

for (let i = 0; i < 10; i++) {
  container.innerHTML += `
    <div id="e${i}" class="box"></div>
  `;

  setTimeout(() => {
    QrCreator.render(
      {
        text: `${i}`,
        radius: 0,
        ecLevel: 'H',
        fill: '#000',
        background: null,
        size: 128
      },
      document.getElementById(`e${i}`)
    );
  }, 10);
}
