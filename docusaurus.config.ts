import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "小小的编程",
    tagline: "",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://hopeworker.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/a-bit-of-program/",
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "hopeworker", // Usually your GitHub org/user name.
    projectName: "a-bit-of-program", // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "zh-Hans",
        locales: ["zh-Hans"],
    },
    // support mermaid for markdown diagram
    markdown: {
        mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "小小的编程",
            logo: {
                alt: "A bit of program",
                src: "img/logo.svg",
            },
            items: [
                {
                    label: "点滴积累",
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                },
                {
                    label: "博客",
                    to: "/blog",
                    position: "left",
                },
                {
                    href: "https://github.com/hopeworker/a-bit-of-program",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                // {
                //   title: 'Docs',
                //   items: [
                //     {
                //       label: 'docusaurus',
                //       to: '/docs/docusaurus/intro',
                //     },
                //   ],
                // },
                // {
                //   title: 'Community',
                //   items: [
                //     {
                //       label: 'Stack Overflow',
                //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //     },
                //   ],
                // },
                // {
                //   title: 'More',
                //   items: [
                //     {
                //       label: 'GitHub',
                //       href: 'https://github.com/facebook/docusaurus',
                //     },
                //   ],
                // },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} 小小的编程`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
