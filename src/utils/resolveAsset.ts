import { assetPaths, AssetCategory } from './paths';

export const resolveAsset = (
    category: AssetCategory,
    filename: string
): string => {
    return `${assetPaths[category]}/${filename}`.replace(/\/+/g, '/');
};