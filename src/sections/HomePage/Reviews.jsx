import topCurve from "../../assets/top-curce.png";
import kaystringImg from "../../assets/kaystring-1.png";
import saheed1 from "../../assets/saheed-1.png";
import blueStar from "../../assets/icons/active-star.svg";
import greyStar from "../../assets/icons/inactive-star.svg";
const Reviews = () => {
  return (
    <section className="container-full bg-bluegray-2 pb-16">
      <img src={topCurve} alt="curve" className="pb-10" />
      <div className="container-108">
        <h2 className="text-center font-bold text-xl text-pri-blue mb-2">
          RECENT REVIEW
        </h2>
        <h2 className="text-center font-bold text-3xl text-bluegray-9 mb-8">
          Unfiltered opinions from verified consumers
        </h2>

        <div className="w-full flex items-center justify-center">
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

const reviews = [
  {
    profile: { name: "Enoch", initial: "E", location: "Mumbai, India" },
    review: {
      stars: 2,
      text: "The overview of design principles described in the first half of the book are interesting. I certainly became more aware of the kinds of poor design choices outlined and certainly learned a few things that will be helpful in my communications and systems development role at work.",
      picture: [],
    },
  },
  {
    profile: { name: "Kaystring", initial: "K", location: "Hindu, India" },
    review: {
      stars: 5,
      text: "Shadybae’s Ochaprapra skincare makes my skin glow and radiate in the glory of the Lord",
      picture: [kaystringImg],
    },
  },
  {
    profile: { name: "Saheed", initial: "S", location: "Lagos, Nigeria" },
    review: {
      stars: 3,
      text: "The overview of design principles described in the first half of the book are interesting. I certainly became more aware of the kinds of poor design choices outlined and certainly learned a few things that will be helpful in my communications and systems development role at work.",
      picture: [saheed1, saheed1],
    },
  },
];

const ReviewList = ({ reviews }) => {
  return (
    <div className="scroll-side">
      {reviews.map((review, index) => (
        <div className="side">
          <div
            className="bg-white p-5 flex gap-4 flex-col"
            key={index}
          >
            <div className="flex gap-4 items-center justify-start">
              <div className="rounded-full bg-blue-900 text-white py-3 px-5 text-xl">{review.profile.initial}</div>
              <div>
              <h2 className="text-xl font-normal">{review.profile.name}</h2>
              <p className="text-sm font-normal text-bluegray-7">{review.profile.location}</p>
              </div>
            </div>
            <div className="flex gap-3">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={starIndex < review.review.stars ? blueStar : greyStar}
                  alt={
                    starIndex < review.review.stars ? "Blue Star" : "Grey Star"
                  }
                />
              ))}
            </div>
            <hr />
            <p className="text-base font-normal w-100">{review.review.text}</p>
            <div className="flex gap-3">
              {review.review.picture.map((picture, picIndex) => (
                <img
                  key={picIndex}
                  src={picture}
                  alt={`Picture ${picIndex + 1}`}
                  className="w-39 h-39 object-contain object-top"
                />
              ))}
            </div>

            <p className="font-normal text-xs text-bluegray-5 inline">Reviewed <p className="text-bluegray-9 inline underline">ShadyBae Glow skin</p> on April 23, 2021</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
