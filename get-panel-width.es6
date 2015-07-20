import DEFAULT from './default-panel-width';
import getViewportWidth from './get-viewport-width';

const PREFERRED = 2 * DEFAULT;

export default function getPanelWidth() {
  const viewportWidth = getViewportWidth();

  return viewportWidth >= PREFERRED ? DEFAULT : viewportWidth;
}
