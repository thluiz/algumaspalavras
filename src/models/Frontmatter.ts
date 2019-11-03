interface Frontmatter {
  date: string;
  title: string;
  category: string;
  tags: string[];
  featureImage?: {
    publicURL: string;
  };
}

export default Frontmatter;
