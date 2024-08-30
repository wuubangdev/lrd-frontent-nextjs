import slugify from "slugify";

export const toSlugify = (title: string | undefined) => {
    if (title) {
        return slugify(title.toLowerCase(), {
            lower: false,
            locale: 'vi',
        });
    }
    return "";
}

export const getIdFromSlug = (slug: string) => {
    if (slug) {
        const firstString = slug.split('.html')[0];
        const id = firstString.split("-").pop();
        return id;
    }
    return "";
}