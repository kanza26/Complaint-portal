import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Officer3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImage: null,
      showDropdown: false,
      isSidebarOpen: window.innerWidth >= 768 // Sidebar open by default on screens wider than 768px
    };
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({ isSidebarOpen: !prevState.isSidebarOpen }));
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      this.setState({ isSidebarOpen: false });
    }
  };

  render() {
    return (
      <>
        <div className="application">
          <Helmet>
            <style>{'body { background-color: #DDF1F2; }'}</style>
          </Helmet>
          <div className="flex flex-row bg-[#6E9794] h-[84px] items-center justify-between px-6">
            <div className="block">
              <button className="text-2xl text-white" onClick={this.toggleSidebar}>
                ☰
              </button>
            </div>
            <div className="flex items-center justify-center flex-1">
              <h1 className="text-white font-Poppins text-3xl sm:text-2xl font-extrabold">Officer Dashboard</h1>
            </div>
            <div className="relative">
              <img className="rounded-[100%] object-cover h-10 cursor-pointer" src="./complaints1.webp" alt="profile" />
            </div>
          </div>
          <div className="flex flex-row h-full gap-5">
            <div className={`bg-[#6E9794] h-auto w-[20%] text-[#6E9794] flex flex-col font-Poppins items-center gap-10 pt-20 font-bold text-lg sm:text-xs sm:gap-6 ${this.state.isSidebarOpen ? 'block' : 'hidden'}`}>
              <a href="" className="bg-[#D9D9D9] p-4 w-full text-center sm:p-0">View Pending Complaints</a>
              <a href="http://localhost:5179/officer4" className="bg-[#D9D9D9] p-4 w-full text-center sm:p-0">View Feedback</a>
            </div>
            <div className="flex flex-col mx-auto">
              <h1 className="font-Poppins font-bold text-[#6E9794] text-center text-4xl my-14 sm:text-2xl sm:text-center sm:mx-auto">View Pending Complaints</h1>
              <div className="grid grid-cols-3 gap-10 sm:grid-cols-1">
                <a href='/'>
                  <div className="bg-[#6E9794] h-[330px] w-[270px] rounded-xl mx-auto px-10 sm:w-[230px] sm:px-5 py-8">
                    <div className="font-Poppins text-lg text-center font-bold text-white">Complaint#001: Road Accident in University Road</div>
                    <img src="https://www.shutterstock.com/image-photo/persons-hand-inserting-complaint-letter-260nw-1289075314.jpg" className="w-[190px] h-[141.93px] mt-4 object-cover" alt="complaint" />
                    <div className="font-Poppins text-sm text-center font-bold text-white mt-5">Status: Pending</div>
                  </div>
                </a>
                {/* Repeat similar div structure for other complaints */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
