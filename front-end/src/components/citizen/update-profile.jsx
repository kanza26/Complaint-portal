import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

export default class Update_Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          uploadedImage: null,
          showDropdown: false,
          isSidebarOpen: window.screen.width >=768 // Sidebar open by default on desktop and iPad screens
        };
        this.handleFileUpload = this.handleFileUpload.bind(this);
      }
    
      handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          this.setState({
            uploadedImage: reader.result
          });
        };
        reader.readAsDataURL(file);
      }
    
      toggleDropdown = () => {
        this.setState({ showDropdown: !this.state.showDropdown });
      }
    
      toggleSidebar = () => {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
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
          <div className="flex flex-row gap-20 h-[100vh]"> 
            <div className={`bg-[#6E9794] mr-2 w-[25%] h-auto text-[#6E9794] flex flex-col font-Poppins items-center gap-10 pt-20 font-bold text-lg sm:text-sm ${this.state.isSidebarOpen ? 'block' : 'hidden'}`}>
              <a href="" className='bg-[#D9D9D9] w-full text-center'>File a New Complaint</a>
              <a href="" className='bg-[#D9D9D9] w-full text-center'>View Complaint Status</a>
              <a href="" className='bg-[#D9D9D9] w-full text-center'>Give Feedback</a>
            </div>


            <div className="flex flex-col gap-10 flex-1 items-center mt-20">
            <div className="font-Poppins font-bold text-2xl text-[#6E9794]  mx-auto">
                    Update Profile
                </div>
              <div className='flex flex-col w-3/4'>
                <label htmlFor="email" className='font-Poppins font-bold text-left mb-2'>
                  Reset Your Email
                </label>
                <input type="email" name="email" className="w-full rounded-[37px] border border-gray-400 py-2 px-3"></input>
              </div>
              <div className='flex flex-col w-3/4 items-center'>
                <label htmlFor="file-upload" className='font-Poppins font-bold text-left mb-2'>
                  Reset Your Profile Picture
                </label>
                <input type="file" id="file-upload" name="file-upload" className="w-full rounded-[37px] py-2 px-3" onChange={this.handleFileUpload}></input>
                <div className="w-48 h-48 border border-gray-400 mt-2 flex items-center justify-center">
                  {this.state.uploadedImage && <img src={this.state.uploadedImage} alt="Uploaded" className="h-full w-full object-cover" />}
                </div>
                <button className="bg-[#6E9794] hover:bg-[#70aca8] text-white font-bold py-2 px-4 rounded w-1/2 md:w-1/2 mt-4">
              Post
            </button>
              </div>

            </div>
          </div>
        </div>
        
      </>
    );
  }
}
