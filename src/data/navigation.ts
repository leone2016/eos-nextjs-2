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
    {
        name: 'Amazon',
        path: '/amazon',
        icon: 'tree',
        submenu: [
            { name: 'Deep jungle lodge', path: '/amazon/deep-jungle-lodge' },
            { name: 'Accessible lodge', path: '/amazon/accessible-lodge' }
        ]
    },
    { name: 'Custom Tours', path: '/custom-tours', icon: 'map' },
    { name: 'Climbing & Trekking', path: '/climbing', icon: 'mountain' },

    { name: 'Contact', path: '/contact', icon: 'mail' }
];
