const createElements = () => {
  const root = document.createElement("div");
  const text = document.createElement("div");
  const container = document.createElement("div");
  const load = document.createElement("div");
  return { root, text, container, load };
};
const startCouting = ({ width, text, load, interval }) => {
  let count = 0;
  let intervalId;
  const func = () => {
    if (count === width) {
      clearInterval(intervalId);
    }
    text.textContent = `${count}%`;
    load.style.width = `${count}%`;
    count++;
  };
  intervalId = setInterval(func, interval);
};
const setAttribute = ({ root, text, container, load }) => {
  root.setAttribute("class", "root");
  text.setAttribute("class", "text");
  container.setAttribute("class", "container");
  load.setAttribute("class", "load");
};
const init = () => {
  const { root, text, container, load } = createElements();
  setAttribute({ root, text, container, load });

  document.body.appendChild(root);
  root.appendChild(text);
  root.appendChild(container);
  container.appendChild(load);

  startCouting({ width: 99, text, load, interval: 25 });
};

init();
