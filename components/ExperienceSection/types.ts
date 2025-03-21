import { ReactNode } from "react";

export type ExperienceItemType = {
    id: number;
    role: string;
    company: string;
    company_logo: ReactNode | string;
    company_link: string;
    start_date?: string;
    end_date?: string;
    tech?: string[];
    industry?: string;
    achievements?: string[];
    links?: ExperienceLinkProps[];
}

export type ExperienceItemProps = {
    item: ExperienceItemType;
    isOpen: boolean;
    setOpen: (id: number | null) => void;
}

export type ExperienceLinkProps = {
    label: string;
    href: string;
}