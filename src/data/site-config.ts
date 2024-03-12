export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'María Camila Sánchez Cañón',
    subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        // {
        //     text: 'Acerca de',
        //     href: '/about'
        // },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Terminos',
            href: '/terms'
        },
        // {
        //     text: 'Download theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    socialLinks: [
        // {
        //     text: 'Dribbble',
        //     href: 'https://dribbble.com/'
        // },
        // {
        //     text: 'Instagram',
        //     href: 'https://instagram.com/'
        // },
        // {
        //     text: 'X/Twitter',
        //     href: 'https://twitter.com/'
        // }
    ],
    hero: {
        title: 'Hola, Bienvenidos a mi rincón en la Web!',
        text: "Bienvenidos a mi espacio, donde comparto mi pasión y trabajo en el ámbito del activismo social, centrado en la migración, inclusión y el empoderamiento femenino. Soy **María Camila Sánchez Cañón**, y a través de mi trayectoria, he colaborado con comunidades migrantes y liderado iniciativas para promover sus derechos y su integración en la sociedad.<br><br>Es una ventana a las historias de resiliencia, cambio y esperanza que he encontrado en mi camino. Aquí, reflexionaré sobre las experiencias y lecciones aprendidas, ofreciendo una plataforma para dialogar sobre cómo podemos contribuir a un mundo más justo e inclusivo.",
        image: {
            src: '/maria-camila-black-white.jpg',
            alt: 'A sitting person, reading while is traveling on a metrocable'
        },
        actions: [
            {
                text: 'Contáctame',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Suscríbete al blog de Maria Camila',
    //     text: 'Cada nuevo post directamente a tu correo',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
