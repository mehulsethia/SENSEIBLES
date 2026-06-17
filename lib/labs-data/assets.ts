'use client';

import works from './works';

type ExperimentItem = {
  id: string;
  swapperContent: string[];
  textureUrl: string;
  pageUrl?: string;
  color: string;
};

export type LabsAssetGroup = { name: 'experiments'; items: ExperimentItem[] };

const colorPalette = [
  '#d8d8da',
  '#c3c5ce',
  '#dadbe1',
  '#e3d9f1',
  '#d2e5f5',
  '#f4d9d0',
  '#f0e1b9',
  '#d4dbe0',
  '#f5d2e3',
  '#d1f0e3',
  '#e1d8f9',
  '#f6e6c8',
  '#dce7f3',
  '#ede0ff',
  '#f7d4c3',
  '#d8f3dc',
  '#f5c6ec',
  '#dce4ff',
  '#f3ead0',
  '#e1f5f2',
  '#f8dada',
  '#e7d3f5',
  '#d9f2ff',
  '#f2e8d8',
];

const labsAssets: LabsAssetGroup[] = [
  {
    name: 'experiments',
    items: works.map((work, index) => ({
      id: work.id,
      swapperContent: [work.title],
      textureUrl: work.textureUrl,
      pageUrl: work.pageUrl,
      color: colorPalette[index % colorPalette.length],
    })),
  },
];

export default labsAssets;
