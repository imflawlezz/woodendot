import {resolveAsset} from "@/utils/resolveAsset";

export const PaymentMethodList = [
    { name: "Visa", imageURL: resolveAsset('logos','visa.png')},
    { name: "PayPal", imageURL: resolveAsset('logos','paypal.png')},
    { name: "Mastercard", imageURL: resolveAsset('logos','mastercard.png')},
    { name: "American Express", imageURL: resolveAsset('logos','ae.png')},
    { name: "Klarna", imageURL: resolveAsset('logos','klarna.png')}
]