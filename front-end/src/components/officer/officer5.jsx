import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Officer5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImage: null,
      showDropdown: false,
      isSidebarOpen: window.innerWidth >= 768, // Sidebar open by default on desktop and iPad screens
      selectedFiles: []
    };
    this.fileInputRef = React.createRef();
  }

  handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    this.setState({ selectedFiles: [...this.state.selectedFiles, ...files] });
  };

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
          <div className="flex flex-col mx-auto w-[75%]">
            <h1 className="font-Poppins font-bold text-[#6E9794] text-3xl my-14 sm:text-2xl">Complaint#001: </h1>
            <div className="flex flex-col w-[65%] h-[30%] mx-auto text-xl sm:text-lg">
              <div className="flex flex-col text-black font-Poppins gap-10">
                <p><b>User Email:</b> user@gmail.com</p>
                <p><b>Complaint Subject: </b> Road Accident On University Road</p>
                <p><b>Complaint Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, repudiandae consequatur placeat dolor architecto. Modi explicabo eius commodi veritatis!</p>
                <p><b>City:</b> Karachi</p>
                <p><b>Location:</b> University Road</p>
                <b>Image:</b>
                <img className="object-contain w-4/5 h-3/6 mx-auto" src="./pic32.webp" alt="complaint" />
                <div className="w-[50%] text-center mx-auto sm:w-[100%]">
                  <button className="bg-[#D9D9D9] p-4 w-[100%] mx-auto rounded-md hover:bg-stone-400 text-center cursor-pointer font-bold drop-shadow-xl sm:text-sm">Update Status to Completed</button>
                </div>
                <div>
                  <label htmlFor="proof" className="text-lg font-bold">Upload Proof of Completion:</label>
                  <textarea type="text" id="proof" className="w-full h-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-stone-300 mt-4 sm:text-sm" placeholder="Description"></textarea>
                </div>
                <div>
                  <label className="block mt-10 mb-4 font-bold text-lg text-gray-700" htmlFor="fileInput">
                    Upload Image:
                  </label>
                  <div className="w-full h-40 border border-dashed border-gray-300 rounded-md flex flex-wrap justify-center items-center cursor-pointer">
                    {this.state.selectedFiles.map((file, index) => (
                      <img key={index} src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} className="h-16 w-16 object-cover m-2" />
                    ))}
                    <input
                      type="file"
                      id="fileInput"
                      ref={this.fileInputRef}
                      accept="image/*"
                      className="hidden w-65%"
                      onChange={this.handleFileChange}
                      multiple
                    />
                    <label htmlFor="fileInput" className="absolute flex justify-center items-center h-32 w-32 p-8 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </label>
                  </div>
                </div>
                <div className="w-[50%] text-center mx-auto sm:w-[100%]">
                  <button className="bg-[#D9D9D9] p-4 w-[100%] mx-auto rounded-md hover:bg-stone-400 text-center cursor-pointer font-bold drop-shadow-xl sm:text-sm">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
