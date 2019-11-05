interface Frontmatter {
  date: string;
  title: string;
  category: string;
  tags: string[];
  featureImage?: {
    publicURL: string;
    childImageSharp: {
      ogImage: {
        src: string;
      };
    };
  };
  excerpt?: string;
}

export default Frontmatter;
