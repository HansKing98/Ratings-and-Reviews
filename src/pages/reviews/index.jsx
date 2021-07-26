import React, { useState } from "react";
import RatingsAndReviews from "../../mock"; // 模拟请求

import "./index.less"

export default function reviews() {
  console.log(RatingsAndReviews);

  const [reviewsData, setReviewsData] = useState(RatingsAndReviews.results);
  const [reviewsCount, setReviewsCount] = useState(RatingsAndReviews.count);

  console.log(reviewsData);
  console.log(reviewsData[0]);

  return (
    <div className="pm-reviews">
      <div className="left">
        <h5>Ratings & Reviews</h5>
        <h1>
          3.5<span>☆☆☆</span>
        </h1>
      </div>
      <div className="right">
        <div className="total">
          {reviewsCount} reviews，sorted by <a href="google.com">relevance</a>
        </div>
        {reviewsData.map((item, index) => {
          const {
            rating,
            reviewer_name,
            date,
            summary,
            body,
            helpfulness
          } = item;
          return (
            <div key={item.review_id} className="container">
              <div className="head-bar">
                <div className="rating">{rating}☆star</div>
                <div className="reviewer_name">{reviewer_name},</div>
                <div className="date">{date}</div>
              </div>
              <div className="summary">{summary}</div>
              <div className="content">{body}</div>
              <div className="footer-bar">
                <div className="helpfulness">
                  helpful? <a href="#">Yes</a>({helpfulness}) |{" "}
                  <a href="#">Report</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
