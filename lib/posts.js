const posts = [
    {
        id: 1,
        title: "Chinese roast chicken",
        author: "Tuomo Kankann",
        coverImage: "/images/chinese-roast-chicken-recipe.jpg",
        excerpt: "Tasty chinese roast chicken recipe",
        publishDate: "21.01.2025",
        content: `You need a whole chicken: mine was 1.4 kg. If yours is bigger, the cooking and marinating time will increase.
        If not marinated for long enough, the flavor won't be able to permeate all the way into the flash.) 
        If cooking a smaller bird, you need to reduce the cooking time to get juicy chicken. Whole chicken 
        is usually cheaper than chicken parts. It's perfect for Lunar New Year too! A whole chicken on the 
        Chinese New Year table represents family unity, which is thought to bring good luck. For more 
        money-saving whole chicken recipes, click here. Chinese families turn the bones into chicken stock 
        (a key ingredient in Chinese cooking) after carving.`,
        slug: "chinese-roast-chicken",
    },
    {
        id: 2,
        title: "Easy sticky chinese spare ribs braised",
        author: "Thomas Richard",
        coverImage: "/images/easy-sticky-chinese-spare-ribs-braised.jpg",
        excerpt: "A recipe for tender, bite-size pieces of pork ribs coated in a sweet and savory sticky glaze",
        publishDate: "24.01.2025",
        content: `Cut your spare ribs into their individual ribs.
        Boil cut ribs in water for 5 minutes to remove scum.
        In a wok or deep non stick pan, melt brown sugar over medium heat along with 2 tbsp water. The water helps melt the sugar faster.
        Once sugar is melted, add the ribs into the wok and give it a quick stir.
        Add soy sauce, dark soy sauce, Shaoxing rice wine, rice vinegar, ½ water, scallions, ginger, and garlic. Stir again then cover and allow to simmer for 45 minutes.
        Remove the lid and turn up the heat to med-high for 10 minutes or until sauce has thickened and coats ribs well.
        Serve on rice and top with sesame seeds and green onions.`,
        slug: "spare-ribs",
    
    },
    {
        id: 3,
        title: "Vegan lumpia superbowl",
        author: "Tuomo Kankann",
        coverImage: "/images/vegan-lumpia-superbowl.jpg",
        excerpt: "These cigar-shaped spring rolls are the perfect combination of crispy, savory, and salty goodness!",
        publishDate: "27.01.2025",
        content: `Start by sauteeing onion in some sesame oil, just until they’re slightly translucent. Then add shredded carrot, 
        and the plant based ground. Break the meat alternative up with a wooden spatula and cook it all the way through.Then add 
        garlic, soy sauce, salt and pepper to the mixture, and cook until the garlic is fragrant. Let the mixture cool before 
        wrapping it up in spring roll or lumpia wrappers. Shallow fry the lumpia for 3-4 minutes, turning occasionally to brown
        all sides. Serve with homemade sweet and sour sauce or sweet chilli sauce.`,
        slug: "vegan-lumpia",
    },
];

export function getAllPosts() {
    return posts;
}

export function getAllSlugs() {
    let slugs = [];
    getAllPosts().map(p => slugs.push(`/blog/${p.slug}`));
    return slugs;
}

export function getPostData(slug) {
    let post = null;
    getAllPosts().map((p) => {
        if (p.slug === slug) {
            post = p;
            return;
        }
    });
    return post;

}