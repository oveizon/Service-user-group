import Navbar from "@/components/Navbar";
import review from "@/styles/Review.module.scss";
import invoice from "@/styles/Invoice.module.scss";
import Table, { TableHeaders } from "@/components/Table";
import Link from "next/link";

interface Requests {
  [key: string]: string;
}
const Review = () => {
  const requests: Requests[] = [
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "1",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "2",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "3",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "4",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "4",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "4",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "4",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "4",
    },

    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      rating: "4.5",
      review: "Good Job",
      id: "4",
    },
  ];

  return (
    <div className={review.review}>
      <Navbar />
      <>
        <TableHeaders
          column1="NAME"
          column2="SERVICE TYPE"
          column3="DATE"
          column4="RATING"
          column5="REVIEW TEXT"
        />

        <div>
          {requests.map((request) => {
            return (
              <>
                <Table
                  key={request.id}
                  col1={request.name}
                  col2={request.service}
                  col3={request.date}
                  col4={request.rating}
                  col5={request.review}
                  src=""
                />
              </>
            );
          })}
        </div>
      </>
      <div className={invoice.link}>
        <Link href="#">
          See All <img src="/forward.png" alt="see all" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Review;
