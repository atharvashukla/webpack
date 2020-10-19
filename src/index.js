import { join } from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, now `import`ed 
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());