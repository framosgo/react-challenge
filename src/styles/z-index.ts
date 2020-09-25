type Layer = 'BACKGROUND' | 'CONTENT' | 'SIDEBAR' | 'HEADER' | 'MODAL' | 'NOTIFICATION';

const layers: Layer[] = ['BACKGROUND', 'CONTENT', 'SIDEBAR', 'HEADER', 'MODAL', 'NOTIFICATION'];

const getLayerPosition = (layer: Layer) => layers.findIndex(l => l === layer);

export default getLayerPosition;
