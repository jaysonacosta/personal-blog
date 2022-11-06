import type React from "react";

type Props = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const Post: React.FC<Props> = ({ title, description, date, slug }) => {
  return (
    <a href={slug}>
      <div className="flex flex-col gap-y-5 rounded bg-white p-5 shadow duration-200 ease-in hover:shadow-md">
        <span className="text-2xl font-bold text-neutral-900">{title}</span>
        <span className="text-neutral-600">{description}</span>
        <span className="text-neutral-600">{date}</span>
      </div>
    </a>
  );
};

export default Post;
