export interface FooterLink {
    text: string;
    link: string;
}

export interface FooterColumnProps {
    title: string;
    links: FooterLink[];
}