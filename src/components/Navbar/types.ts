export interface INavbarProps {
    logo?: string; // URL do logo (opcional)
    links: ILinkProps[];
  }
  
export interface ILinkProps {
    label: string;
    href: string;
  }
  