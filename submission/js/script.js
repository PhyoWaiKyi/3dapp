const initialRotation = '0 1 0 0';
let rotationTimer;
const x3dTransform = document.querySelector('x3d scene Transform');

function changeView(direction) {
  switch (direction) {
    case 'front':
      x3dTransform.setAttribute('rotation', initialRotation);
      break;
    case 'back':
      x3dTransform.setAttribute('rotation', '0 1 0 3.14');
      break;
    case 'left':
      x3dTransform.setAttribute('rotation', '0 1 0 -1.57');
      break;
    case 'right':
      x3dTransform.setAttribute('rotation', '0 1 0 1.57');
      break;
    default:
      break;
  }
}

function startRotation() {
  rotationTimer = setInterval(() => {
    const presentRotation = x3dTransform.getAttribute('rotation');
    const rotationComponents = presentRotation.split(' ');
    const currentAngle = parseFloat(rotationComponents[3]) + 0.1;
    rotationComponents[3] = currentAngle.toString();
    x3dTransform.setAttribute('rotation', rotationComponents.join(' '));
  }, 100);
}

function endRotation() {
  clearInterval(rotationTimer);
}
