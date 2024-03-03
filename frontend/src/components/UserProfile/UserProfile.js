import React, { useState } from 'react';
import GridTable from './UserDashboard';

const UserProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [user, setUser] = useState({
    name: 'Srinjoy Das',
    email: 'srinjoydas566@gmail.com',
    country: 'India',
    state: 'West Bengal',
    linkedin: 'https://www.linkedin.com/in/srinjoy-das-174648202/',
    facebook: 'https://www.facebook.com/srinjoy.das.12',
    twitter: 'https://twitter.com/'
  });

  const [editingState, setEditingState] = useState(false);
  const [newState, setNewState] = useState(user.state);
  const [newCountry, setNewCountry] = useState(user.country);
  const [newLinkedin, setNewLinkedin] = useState(user.linkedin);
  const [newFacebook, setNewFacebook] = useState(user.facebook);
  const [newTwitter, setNewTwitter] = useState(user.twitter);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleStateChange = (e) => {
    setNewState(e.target.value);
  };

  const handleCountryChange = (e) => {
    setNewCountry(e.target.value);
  };

  const handleLinkedinChange = (e) => {
    setNewLinkedin(e.target.value);
  };

  const handleFacebookChange = (e) => {
    setNewFacebook(e.target.value);
  };

  const handleTwitterChange = (e) => {
    setNewTwitter(e.target.value);
  };

  const handleSubmit = () => {
    setUser((prevUser) => ({
      ...prevUser,
      state: newState,
      country: newCountry,
      linkedin: newLinkedin,
      facebook: newFacebook,
      twitter: newTwitter
    }));
    setEditingState(false);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center my-8">User Profile and History with Analytics</h1>
    <div className="flex justify-center items-center h-screen md:pt-20">
      <div className="border border-gray-1000 shadow-md p-6 sm:w-full md:w-auto lg:w-3/4 xl:w-2/3" style={{ width: '850px', height: '600px' }}>
        <div className="max-w-4xl mx-auto py-8 flex items-center">
          <div className="mr-8 sm:mr-8 mb-8 md:mb-0">
            {profilePicture ? (
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Profile"
                className="w-60 h-42 object-cover rounded-full"
              />
            ) : (
              <div className="w-52 h-32 bg-gray-300 rounded-full"></div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
              className="mt-4"
            />
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
              <p>{user.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <p>{user.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
              {editingState ? (
                <div className="flex">
                  <input
                    type="text"
                    value={newCountry}
                    onChange={handleCountryChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <p>{user.country}</p>
                  <button
                    onClick={() => setEditingState(true)}
                    className="ml-2 text-blue-500 hover:underline focus:outline-none"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
              {editingState ? (
                <div className="flex">
                  <input
                    type="text"
                    value={newState}
                    onChange={handleStateChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <p>{user.state}</p>
                  <button
                    onClick={() => setEditingState(true)}
                    className="ml-2 text-blue-500 hover:underline focus:outline-none"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn</label>
              {editingState ? (
                <input
                  type="text"
                  value={newLinkedin}
                  onChange={handleLinkedinChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              ) : (
                <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.linkedin}</a>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Facebook</label>
              {editingState ? (
                <input
                  type="text"
                  value={newFacebook}
                  onChange={handleFacebookChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              ) : (
                <a href={user.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.facebook}</a>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Twitter</label>
              {editingState ? (
                <input
                  type="text"
                  value={newTwitter}
                  onChange={handleTwitterChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              ) : (
                <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.twitter}</a>
              )}
            </div>
          </div>
        </div>
        <div>
      <h2 className="py-20 text-4xl font-extrabold text-center dark:text-black">USER HISTORY</h2>
        <GridTable/>
      </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfilePage;
