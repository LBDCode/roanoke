import React, {useState, useCallback, useMemo, useEffect} from 'react';
import Flowchart from '../Flowchart';
import Stagechart from '../Stagechart';
import API from '../../utils/api';
import { useGlobal } from 'reactn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Dashboard = (props) => {

  // hooks for global gage state and local flow data state
  const [ currentGage, setGage ] = useGlobal('currentGage');
  const [flowData, setFlowData] = useState(null);
  const [stageData, setStageData] = useState(null);


  function cleanGageData(data) {
    let gageData = data.data.value.timeSeries[0].values[0].value;
    return gageData;
  }


  // update info displayed in dashboard when currentGage
  useEffect(() => {
    if (props.currentGage.id) {
      // clean and set flow data for selected gage, if available
      API.getGagesHistory(props.currentGage.id, "flow").then(response => {
        if (response.data.value.timeSeries[0]) {
          // let val = response.data.value.timeSeries[0].values[0].value[0].value;
          setFlowData(cleanGageData(response));
        } else {
          setFlowData("no flow data available");
        }
      });
      // clean and set stage data for selected gage, if available
      API.getGagesHistory(props.currentGage.id, "stage").then(response => {
        if (response.data.value.timeSeries[0]) {
          // let val = response.data.value.timeSeries[0].values[0].value[0].value;
          setStageData(cleanGageData(response));
        } else {
          setStageData("no flow data available");
        }
      });

    }

  },[props.currentGage.id]);

  return (
    <>
    {/* if a gage is selected (props passed w/ current gage name), return dashboard container.  Else return empty fragment. */}
    {props.currentGage.name ? 
        <Container className="dashboardWrapper"> 
          <h5 id="dashboardTitle">{props.currentGage.name}</h5>
          <p>gage #{props.currentGage.id}</p>
          
          <Row>
            <Col >
              <div className="dashboardItem">
                <h6>Current Status</h6>
                <img src=""></img>
                <p>
                  Stage: { (stageData &&  stageData[stageData.length - 1 ].value) ? stageData[stageData.length - 1 ].value + " ft" : "no stage data available"}
                  <br></br>
                  Flow: {(flowData && flowData[flowData.length - 1 ].value) ? flowData[flowData.length - 1 ].value + " cfs": "no flow data available"}
                </p>
                <small>last reading: 
                  { (stageData && stageData[stageData.length - 1 ].dateTime) ? stageData[stageData.length - 1 ].dateTime
                    : null
                  }

                </small>
              </div>
            </Col>
            <Col>
              <div className="dashboardItem">
                <h6>Flow Chart (cfs) </h6>
                {(flowData && flowData[flowData.length - 1 ].value) ?
                <Flowchart data={flowData}></Flowchart>
                :
                <small>no flow data for this gage</small>
              }
              </div>
            </Col>
            <Col>
            <div className="dashboardItem">
              <h6>Stage Hydrograph (ft)</h6>
              { (stageData &&  stageData[stageData.length - 1 ].value) ? 
              <Stagechart data={stageData}></Stagechart>
              :
              <p>no stage data for this gage</p>
            }
            </div>
            </Col>
          </Row>
        </Container>
    :
            <></>

    }
    
    </>

    
  );
};

export default Dashboard;