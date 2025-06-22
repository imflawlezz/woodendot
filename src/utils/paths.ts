const assetRoot = '/';

export const assetPaths = {
    sections: `${assetRoot}sections`,
    categories: `${assetRoot}categories`,
    icons: `${assetRoot}icons`,
    products: `${assetRoot}products`,
    logos: `${assetRoot}logos`,
    awards: `${assetRoot}awards`,
} as const;

export type AssetCategory = keyof typeof assetPaths;