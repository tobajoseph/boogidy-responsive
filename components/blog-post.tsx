import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type BlogPostType = {
  postTitle?: string;
  postDate?: string;
  postImage?: string;
  postDescription?: string;

  /** Style props */
  propOverflow?: Property.Overflow;
  propFlexShrink?: Property.FlexShrink;
};

const BlogPost: NextPage<BlogPostType> = ({
  postTitle,
  postDate,
  postImage,
  postDescription,
  propOverflow,
  propFlexShrink,
}) => {
  const post1Style: CSS.Properties = useMemo(() => {
    return {
      overflow: propOverflow,
      flexShrink: propFlexShrink,
    };
  }, [propOverflow, propFlexShrink]);

  return (
    <article
      className="box-border w-[367.67px] overflow-hidden shrink-0 flex flex-col py-0 px-2 items-center justify-center gap-[16px] text-left text-base text-black font-inter border-[1px] border-solid border-gray-200 md:flex-col md:gap-[8px] md:py-1 md:px-0 md:box-border"
      style={post1Style}
    >
      <img
        className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={postTitle}
      />
      <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
        <div className="self-stretch relative text-sm text-dimgray-200 text-right">
          {postDate}
        </div>
        <a className="[text-decoration:none] self-stretch relative text-9xl font-semibold text-[inherit]">
          {postImage}
        </a>
        <div className="self-stretch relative">{postDescription}</div>
        <a
          className="[text-decoration:none] self-stretch relative text-crimson"
          href="#"
        >
          Read More..
        </a>
      </div>
    </article>
  );
};

export default BlogPost;
