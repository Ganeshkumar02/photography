import React from "react";

const posts = [
  {
    image: "/Portfolioimg/img2.jpg",
    likes: "19 likes",
    caption:
      "She wears motherhood like a crown, glowing with love!\n\n#princestudios #photography #photo #maternityphotography #maternityshoot",
  },
  {
    image: "/Portfolioimg/img3.jpg",
    likes: "30 likes",
    caption:
      "Holding hands, chasing sunsets, writing our forever!\n\n#princestudios #photography #prewedding #couplephotography",
  },
  {
    image: "/Portfolioimg/img4.jpg",
    likes: "21 likes",
    caption:
      "One-derful Year! Look who's turning ONE with smiles, sunshine, and a heart full of joy!\n\n#princestudios #photography #babyshoot",
  },
];

const InstagramCollection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gray-700">
            EVERY FRAME TELLS A STORY
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-serif uppercase tracking-wide">
            EXPLORE OUR INSTAGRAM COLLECTION
          </h2>
        </div>

        {/* ✅ Insta Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {posts.map((post, idx) => (
            <InstagramCard key={idx} post={post} />
          ))}
        </div>

        {/* Follow button */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="followBtn"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .followBtn{
          background:#1877f2;
          color:#fff;
          padding:12px 28px;
          border-radius:6px;
          font-size:13px;
          font-weight:600;
          transition:.2s ease;
        }
        .followBtn:hover{
          opacity:.9;
        }
      `}</style>
    </section>
  );
};

export default InstagramCollection;

/* ✅ Instagram UI Card */
const InstagramCard = ({ post }) => {
  return (
    <div className="w-[310px] border border-gray-300 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gray-300 overflow-hidden" />
          <div className="text-[11px] leading-tight">
            <p className="font-semibold">princestudios</p>
            <p className="text-gray-500">Mirzapur, India</p>
          </div>
        </div>
        <button className="bg-[#1877f2] text-white text-[11px] px-3 py-[6px] rounded">
          View profile
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-[340px] bg-gray-100">
        <img
          src={post.image}
          alt="instagram"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* View more link */}
      <div className="px-3 pt-2">
        <p className="text-[11px] text-blue-600 cursor-pointer">
          View more on Instagram
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 px-3 py-2">
        <span className="text-lg cursor-pointer">♡</span>
        <span className="text-lg cursor-pointer">💬</span>
        <span className="text-lg cursor-pointer">↗</span>
        <span className="ml-auto text-lg cursor-pointer">🔖</span>
      </div>

      {/* Likes + caption */}
      <div className="px-3 pb-3">
        <p className="text-[12px] font-semibold">{post.likes}</p>
        <p className="text-[12px] mt-1 font-semibold">prince studios</p>
        <p className="text-[12px] text-gray-800 whitespace-pre-line leading-5">
          {post.caption}
        </p>
      </div>

      {/* Comment box */}
      <div className="border-t border-gray-200 px-3 py-2 text-[12px] text-gray-500">
        Add a comment...
      </div>
    </div>
  );
};
