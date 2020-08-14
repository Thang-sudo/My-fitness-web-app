import React from 'react';
import treadMill from '../assets/treadmill.jpg';
import healthyFood from '../assets/healthyfood.jpg';
import fitnessCommunity from '../assets/fitnessCommunity.jpg';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function Home() {
    const pictureStyle ={
        width: '300px',
        height: '300px',
        borderRadius: '5px'
    }
    return (
        <div>

            <Navbar/>
                <div>
                    <main role="main">
                        <div class="jumbotron jumbotron-fluid">
                                <div class="container">
                                    <h1 class="display-3">Welcome to a healthy life!</h1>
                                    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                                </div>
                        </div>
                        <div className="container-lg">
                            <div class="row">
                                <div class="col-md-4">
                                    <h2>Calories Tracker</h2>
                                    <br/>
                                    <img src={treadMill} style={pictureStyle}/>
                                    <br/><br/>
                                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.  </p>
                                </div>
                                <div class="col-md-4">
                                    <h2>Healthy diet</h2>
                                    <br/>
                                    <img src={healthyFood} style={pictureStyle}/>
                                    <br/><br/>
                                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.  </p>
                                </div>
                                <div class="col-md-4">
                                    <h2>Join our community</h2>
                                    <br/>
                                    <img src={fitnessCommunity} style={pictureStyle}/>
                                    <br/><br/>
                                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            <Footer/>
        </div>
    )
}

export default Home;
