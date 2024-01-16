import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { fetchData } from "../redux/actions/actions";
import { UseSelector, useDispatch } from "react-redux/es/hooks/useSelector";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // const baseEndpoint =
  //   'https://strive-benchmark.herokuapp.com/api/jobs?company='

  // useEffect(() => {
  //   getJobs()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.companyName)
  //     if (response.ok) {
  //       const { data } = await response.json()
  //       setJobs(data)
  //     } else {
  //       alert('Error fetching results')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
