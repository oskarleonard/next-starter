function ArticlePortraitCard({ title, imageUrl, description }: any) {
  return (
    <div>
      <img
        className="object-cover"
        src="https://storage.opensea.io/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb-featured-1556589448.png"
        alt="punk"
        height="248"
      />
      <h3 className="text-2xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ArticlePortraitCard;
