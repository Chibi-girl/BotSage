import React,{useState} from 'react';
import {withRouter} from "react-router-dom";
import CommonPage from "./commonpage";

function Home() {
      
    // component to be rendered when user is in home page
    const home= ( 
    <div>
    <div style={{ padding: '8em 0em' }} vertical>
      <div div stackable verticalAlign='middle'>
        <div>
          <div width={8}>
       <h3 style={{ fontSize: '2em' ,color:'purple'}}>
              We value your privacy
            </h3>
            <p style={{ fontSize: '1.33em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
            </p>
            <h3 style={{ fontSize: '2em' ,color:'purple'}}>
			 One stop solution for all : businesses and individual alike.  
            </h3>
            <p style={{ fontSize: '1.33em' }}>
			The website has been structured so that it strikes a balance between a homely environment and corporate feel. 
            </p>
          </div>
          <div floated='right' width={6}>
            <image bordered rounded size='large' src='/images/logo.jpg' />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>

    <div style={{ padding: '0em' }} vertical>
      <div celled='internally' columns='equal' stackable>
        <div textAlign='center'>
          <div style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <h3 style={{ fontSize: '2em', fontStyle: 'italic' }}>
              "Fluid interface. Seamless connectivity"
            </h3>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </div>
          <div style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <h3 style={{ fontSize: '2em', fontStyle: 'italic' }}>
              "It's a great enough website to make me want to use it as my goto platform for video and audio online calls"
            </h3>
            <p style={{ fontSize: '1.33em' }}>
             Not-so Anonymous User
            </p>
          </div>
        </div>
      </div>
    </div>

    <div style={{ padding: '8em 0em' }} vertical>
      <div text>
        <h3 style={{ fontSize: '2em' ,color:'purple'}}>
          Meet your friends and loved ones. Ace that meeting.
        </h3>
        <p style={{ fontSize: '1.33em' }}>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. 
        </p>
        <button as='a' size='large'>
          Read More
        </button>

        <divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Move to top</a>
        </divider>

        <h3 style={{ fontSize: '2em',color:'purple' }}>
          Quality Assured. And peace of mind.
        </h3>
        <p style={{ fontSize: '1.33em' }}>
     			Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue.
        </p>
        <button as='a' size='large'>
			Might need this in the future
        </button>
      </div>
    </div>
    </div>
    );
     
    return (
    <CommonPage curr={home} active="home"/>
     );
}





export default withRouter(Home);
