import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "阿波罗公关咨询",
    description: "品牌公关\口碑营销、舆情优化、负面压制、有偿发帖",
    site: 'https://tyseoer.com/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}
