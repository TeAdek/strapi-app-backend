import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
query getPageById($reviewId: ID){
  review(id: $reviewId) {
    data {
      id
      attributes {
        body
        title,
        rating,
        body
      }
    }
  }
}
`
export default function ReviewDetails() {
  const {id} = useParams()
  const {loading, error, data} = useQuery(REVIEW, {
    variables: {reviewId: id}
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ;(</p>;

  console.log(data)

  return (
      <div className="review-card">
        <div className="rating">{data.review.data.attributes.rating}</div>
        <h2>{data.review.data.attributes.title}</h2>

        <small>console list</small>

        <p>{data.review.data.attributes.body}</p>
      </div>
    
  )
}
