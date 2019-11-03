interface Frontmatter {
  date: string;
  title: string;
  category: string;
  tags: string[];
  featureImage?: {
    publicURL: string;
  };
  excerpt?: string;
}

export default Frontmatter;
