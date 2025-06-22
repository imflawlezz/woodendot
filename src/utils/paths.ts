const assetRoot = '/';

export const assetPaths = {
    sections: `${assetRoot}sections`,
    categories: `${assetRoot}categories`,
    icons: `${assetRoot}icons`,
    products: `${assetRoot}products`,
    logos: `${assetRoot}logos`,
} as const;

export type AssetCategory = keyof typeof assetPaths;