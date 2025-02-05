import React, { useEffect } from 'react'
// import 'rsuite/dist/styles/rsuite-default.css';
import { connect } from "react-redux";
import { PieChart } from '@rsuite/charts';
import { Template } from '../template';
import { onProjectStats } from '../../redux/actions';

const StatsPieChart =(props)=> {

	const [onProject,setOnProject]= React.useState(3)
	const [onBench,setOnBench]=React.useState(2)
// Sample data
  useEffect(() => {
    props.onProjectStats();

  }, []);

const sampleData = [
	
	['On Project', 4],
	['Off Project', 3],
];

return (
  <Template>
<center>
	<div style={{
	display: 'block',
	}}>
    

  
	<h2>Employees on Project vs On Bench</h2>


 
	<PieChart  
        height={500} name="PieChart" data={sampleData} />
  
	</div >
  <h4>Total Employees : 7</h4>
  </center>
  </Template>
);
}

const mapStateToProps = (state) => {
	return {
		onProjectStatsData: state.testMockApiDataSetup.onProjectStatsData,
	};
  };
  
  const mapDispatchToProps = (dispatch) => {
	return {
		onProjectStats: () => dispatch(onProjectStats()),
	};
  };
  export default connect(mapStateToProps, mapDispatchToProps)(StatsPieChart);