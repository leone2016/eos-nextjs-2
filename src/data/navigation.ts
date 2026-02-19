export interface NavigationItem {
    name: string;
    path: string;
    icon?: string;
    submenu?: NavigationItem[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { name: 'Home', path: '/', icon: 'home' },
    {
        name: 'Galapagos',
        path: '/galapagos',
        icon: 'ship',
        submenu: [
            { name: 'Cruises', path: '/galapagos/cruises' },
            { name: 'Land based', path: '/galapagos/land-based' },
            { name: 'Diving', path: '/galapagos/diving' }
        ]
    },
    { name: 'Amazon', path: '/amazon', icon: 'tree' },
    { name: 'Climbing & Trekking', path: '/climbing-trekking', icon: 'mountain' },
    { name: 'Custom Tours', path: '/custom-tours', icon: 'map' },
    { name: 'Contact', path: '/contact', icon: 'mail' }
];
