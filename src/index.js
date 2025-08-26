function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Budget!'

  return element;
}

document.body.appendChild(component());