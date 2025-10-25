import { use, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import userIcon from '../assets/userIcon.png'

const MyProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [editing, setEditing] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ displayName: name, photoURL: photo })
    .then(()=>{
    setEditing(false);
      alert("Profile updated successfully!");
    })
      .catch ((err)=> {
      console.error(err);
      alert("Failed to update profile");
    })
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4">
      <div className="bg-base-200 p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <div className="flex flex-col items-center">
          <img className={editing? 'hidden' : 'w-28 h-28 rounded-full border-4 border-white shadow-md object-cover'}
            src={photo || userIcon}
            referrerPolicy="no-referrer"
            alt="User"
          />
          {editing ? (
            <form onSubmit={handleUpdate} className="mt-4 w-full">
              <input
                type="text"
                placeholder="Enter new name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-white mb-2 p-2 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-base-300" required
              />
              <input
                type="text"
                placeholder="Enter new photo URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full text-white mb-4 p-2 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-base-300" required
              />
              <button
                type="submit"
                className="bg-base-300 text-white px-4 py-2 rounded-lg hover:bg-base-200 transition"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <>
              <h2 className="mt-4 text-xl font-semibold text-white">
                {user?.displayName || "Unnamed User"}
              </h2>
              <p className="text-gray-100 text-sm">{user?.email}</p>

              <button
                onClick={() => setEditing(true)}
                className="mt-5 bg-base-300 text-white px-4 py-2 rounded-lg hover:bg-base-200 transition"
              >
                Update Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
