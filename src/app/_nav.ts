import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Comunidades'
  },
  {
    name: 'Serviços',
    url: '/servicos/listagem',
    icon: 'icon-people'
  },
  {
    name: 'Meus serviços',
    url: '/servicos/minha-listagem',
    icon: 'icon-pencil'
  },
  {
    name: 'Histórico',
    url: '/servicos/historico',
    icon: 'fa fa-history'
  },
  {
    divider: true
  },
];
