import {resolveAsset} from "@/utils/resolveAsset";

export const CategoriesList = [
    { title: "Living Room", imageURL: resolveAsset('categories', 'living-room.jpeg'), textColor: "black" },
    { title: "Home Office", imageURL: resolveAsset('categories', 'home-office.jpeg'), textColor: "white" },
    { title: "Dining Room", imageURL: resolveAsset('categories', 'dining-room.jpeg'), textColor: "black" },
    { title: "Bedroom", imageURL: resolveAsset('categories', 'bedroom.jpeg'), textColor: "white" }
]