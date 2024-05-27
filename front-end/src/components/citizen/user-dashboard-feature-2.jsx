import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
export default class Feature2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedImage: null,
            showDropdown: false,
            isSidebarOpen: window.screen.width >=768 // Sidebar open by default on desktop and iPad screens
          };
    }

    toggleSidebar = () => {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
    }

    toggleDropdown = () => {
        this.setState({ showDropdown: !this.state.showDropdown });
    }

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
    }

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
              <svg
                className="mr-5 hidden lg:block"
                xmlns="http://www.w3.org/2000/svg"
                width="1.25em"
                height="1em"
                color="white"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                />
              </svg>
              <h1 className="text-white font-Poppins text-2xl font-bold">Citizen Dashboard</h1>
            </div>
      
            <div className="relative">
              <img
                src="./complaints.jpg"
                className="rounded-[50%] object-cover h-[40px] cursor-pointer"
                alt="Complaints"
                onClick={this.toggleDropdown}
              />
             
              {this.state.showDropdown && (
                <div className="absolute right-0 mt-2 bg-white rounded shadow-lg px-5">
                  <ul>
                    <li className="py-4">
                      <a href="#" className="font-bold font-Poppins">Update Profile</a>
                    </li>
                    <li className="py-4">
                      <a href="#" className="font-bold font-Poppins">Logout</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

                    <div className="flex flex-row">
                        
                        <div className={`bg-[#6E9794]  mr-2 w-[25%] h-auto text-[#6E9794] flex flex-col font-Poppins items-center gap-10 pt-20 font-bold text-lg sm:text-sm ${this.state.isSidebarOpen ? 'block' : 'hidden'}`}>
                        <Link to="/feature1" className='bg-[#D9D9D9] w-full text-center'>File a New Complaint</Link>
                        <Link to="/feature2" className='bg-[#D9D9D9] w-full text-center'>View Complaint Status</Link>
                        <Link to="/feedback"  className='bg-[#D9D9D9] w-full text-center'>Give Feedback</Link>
                        </div>


                        <div className="flex flex-col mx-auto lg:w-[80%]">
                            <div className="flex flex-row items-center justify-between sm:flex-col sm:mb-5">
                                <h1 className="font-Poppins font-bold text-[#6E9794] text-xl my-20">All Complaints</h1>
                                <input type="text" name="name" placeholder="Search by ID" className="rounded-[40px] border font-Poppins w-[349px] h-[50px] border-gray-400 py-2 bg-[#6E9794] px-3 sm:w-[250px]"></input>
                            </div>
                            <div className="grid gap-10 grid-cols-3 sm:grid-cols-1">
                                <div className='bg-[#6E9794] h-[330px] w-[270px] rounded-xl mx-auto p-10'>
                                    <div className="font-Poppins text-lg text-center font-bold text-white">Complaint#001: Road Accident in University Road</div>
                                    <img src="https://www.shutterstock.com/image-photo/persons-hand-inserting-complaint-letter-260nw-1289075314.jpg" className="w-[190px] h-[141.93px] object-cover mx-auto" alt="" />
                                    <div className="font-Poppins text-sm text-center font-bold text-white mt-5">Status: Pending</div>
                                </div>
                                <div className='bg-[#6E9794] h-[330px] w-[270px] rounded-xl mx-auto p-10'>
                                    <div className="font-Poppins text-lg text-center font-bold text-white">Complaint#001: Road Accident in University Road</div>
                                    <img src="https://www.shutterstock.com/image-photo/persons-hand-inserting-complaint-letter-260nw-1289075314.jpg" className="w-[190px] h-[141.93px] object-cover mx-auto" alt="" />
                                    <div className="font-Poppins text-sm text-center font-bold text-white mt-5">Status: Pending</div>
                                </div>
                                <div className='bg-[#6E9794] h-[330px] w-[270px] rounded-xl mx-auto p-10'>
                                    <div className="font-Poppins text-lg text-center font-bold text-white">Complaint#001: Road Accident in University Road</div>
                                    <img src="https://www.shutterstock.com/image-photo/persons-hand-inserting-complaint-letter-260nw-1289075314.jpg" className="w-[190px] h-[141.93px] object-cover mx-auto" alt="" />
                                    <div className="font-Poppins text-sm text-center font-bold text-white mt-5">Status: Pending</div>
                                </div>
                                <div className='bg-[#6E9794] h-[330px] w-[270px] rounded-xl mx-auto p-10'>
                                    <div className="font-Poppins text-lg text-center font-bold text-white">Complaint#001: Road Accident in University Road</div>
                                    <img src="https://www.shutterstock.com/image-photo/persons-hand-inserting-complaint-letter-260nw-1289075314.jpg" className="w-[190px] h-[141.93px] object-cover mx-auto" alt="" />
                                    <div className="font-Poppins text-sm text-center font-bold text-white mt-5">Status: Pending</div>
                                </div>
                                <div className='bg-[#6E9794] h-[330px] w-[270px] rounded-xl mx-auto p-10'>
                                    <div className="font-Poppins text-lg text-center font-bold text-white">Complaint#001: Road Accident in University Road</div>
                                    <img src="https://www.shutterstock.com/image-photo/persons-hand-inserting-complaint-letter-260nw-1289075314.jpg" className="w-[190px] h-[141.93px] object-cover mx-auto" alt="" />
                                    <div className="font-Poppins text-sm text-center font-bold text-white mt-5">Status: Pending</div>
                                </div>
                                <div className='bg-[#6E9794] h-[330px] w-[270px] rounded-xl mx-auto p-10'>
                                    <div className="font-Poppins text-lg text-center font-bold text-white">Complaint#001: Road Accident in University Road</div>
                                    <img src="https://www.shutterstock.com/image-photo/persons-hand-inserting-complaint-letter-260nw-1289075314.jpg" className="w-[190px] h-[141.93px] object-cover mx-auto" alt="" />
                                    <div className="font-Poppins text-sm text-center font-bold text-white mt-5">Status: Pending</div>
                                </div>
                                <div className='bg-[#6E9794] h-[330px] w-[270px] rounded-xl mx-auto p-10'>
                                    <div className="font-Poppins text-lg text-center font-bold text-white">Complaint#001: Road Accident in University Road</div>
                                    <img src="https://www.shutterstock.com/image-photo/persons-hand-inserting-complaint-letter-260nw-1289075314.jpg" className="w-[190px] h-[141.93px] object-cover mx-auto" alt="" />
                                    <div className="font-Poppins text-sm text-center font-bold text-white mt-5">Status: Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


