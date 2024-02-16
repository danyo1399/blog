import Link from "next/link";

export function Card(props: {
  imageUrl: string;
  title: string;
  url: string;
  description: string;
}) {
  const { title, imageUrl, description, url } = props;
  return (
    <div className="max-w-[400px] min-w-[300px]">
      <Link href={url}>
        <img
          alt="Card Image"
          className="block w-full rounded-lg object-cover"
          src={imageUrl}
        />
        <h4 className="font-semibold text-lg mt-4 mb-2">{title}</h4>
      </Link>
      <p className="dark:text-dark-secondary text-secondary">{description}</p>
    </div>
  );
}
