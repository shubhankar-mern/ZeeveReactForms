import React, { useEffect, useState } from 'react';
import Footers2 from './Footers2';
import Card from './Card';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
const axios = require('axios');

const Profile = (props) => {
  console.log('profile component: ', props.formdata);
  let topicsArray = [];
  // const [topics, setTopics] = useState([]);
  const userTopics = (() => {
    if (props.formdata.Business === true) topicsArray.push('Business');
    if (props.formdata.Headlines === true) topicsArray.push('Headlines');
    if (props.formdata.Sports === true) topicsArray.push('Sports');
    if (props.formdata.Technology === true) topicsArray.push('Technology');
  })();

  // this below  states

  const [dataBusiness, setData] = useState([]);
  const [dataHeadlines, setDataH] = useState([]);
  const [dataSports, setDataS] = useState([]);
  const [dataTechnology, setDataT] = useState([]);
  async function fetchData() {
    const newsBusinessAPI = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa'
    );
    const newsHeadlinesAPI = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa'
    );
    const newsSportsAPI = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa'
    );
    const newsTechnologyAPI = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa'
    );

    setData(newsBusinessAPI.data.articles);
    setDataH(newsHeadlinesAPI.data.articles);
    setDataS(newsSportsAPI.data.articles);
    setDataT(newsTechnologyAPI.data.articles);
    //getting all topics
    // setTopics(topicsArray);

    console.log(newsBusinessAPI.data.articles);
    // console.log(dataSports);
    // console.log(dataTechnology);
  }
  useEffect(() => {
    fetchData();
    console.log('TopicsArray ::', topicsArray);
  }, []);

  return (
    <div>
      <div className='heading clip image'>The NewsBingo | Profile</div>
      <div className='miniheading clip image'>Get news of your Interest</div>
      {/* NavBar */}
      <div className='options'>
        <span>Hi, {props.formdata.name}</span>
        <span>Homepage</span>
        <Link to='/home'>
          <span>Logout</span>
        </Link>
      </div>

      {topicsArray.includes('Business') ? (
        <>
          <div className='miniheading clip image'>Business</div>
          <div className='CardHolder'>
            {dataBusiness.map((bit, index) => (
              <Card props={bit} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}

      {topicsArray.includes('Headlines') ? (
        <>
          <div className='miniheading clip image'>Headlines</div>
          <div className='CardHolder'>
            {dataHeadlines.map((bit, index) => (
              <Card props={bit} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}

      {topicsArray.includes('Sports') ? (
        <>
          <div className='miniheading clip image'>Sports</div>
          <div className='CardHolder'>
            {dataSports.map((bit, index) => (
              <Card props={bit} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}

      {topicsArray.includes('Technology') ? (
        <>
          <div className='miniheading clip image'>Technology</div>
          <div className='CardHolder'>
            {dataTechnology.map((bit, index) => (
              <Card props={bit} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}

      <Footers2 />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    formdata: getFormValues('SimpleRegisterForm')(state),
  };
};
export default connect(mapStateToProps)(Profile);
