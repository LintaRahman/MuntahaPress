import React from 'react';
import { useParams } from 'react-router-dom';
import Policy from '../../components/Policy/Policy';
import policiesList from "../../assets/docs/Policies"
//  const policiesList = [
//     { id: 'enrol', title: "Enrolment", content: "Lorem Ipsum" },
//     { id: 'uniform',title: "Uniform", content: "Lorem Ipsum" },
//     { id: 'behaviour',title: "Behaviour", content: "Lorem Ipsum" },
//   ];

const PolicyPage = () => {
  const { policyId } = useParams();
  const policy = policiesList.find((p) => p.id === policyId);

  if (!policy) {
    return <div>Policy not found</div>;
  }

  return (
      <Policy policy={policy} />
  );
};

export default PolicyPage;
