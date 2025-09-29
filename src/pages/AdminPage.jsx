// // src/pages/AdminPage.jsx
// import React, { useState, useRef, useEffect } from "react";
// import {
//   Upload,
//   X,
//   Trash2,
//   Image,
//   Plus,
//   Calendar,
//   Settings,
// } from "lucide-react";
// import { supabase } from "../supabaseClient";

// export default function AdminPage() {
//   const [events, setEvents] = useState([]);
//   const [title, setTitle] = useState("");
//   const [images, setImages] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [editingEventId, setEditingEventId] = useState(null);
//   const [editedTitle, setEditedTitle] = useState("");
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   // Add authentication check function
//   const checkAuth = async () => {
//     const {
//       data: { session },
//     } = await supabase.auth.getSession();
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();

//     console.log("Session:", session);
//     console.log("User:", user);
//     console.log("Access token:", session?.access_token);
//     console.log("User ID:", user?.id);

//     return { session, user };
//   };

//   async function fetchEvents() {
//     const { data, error } = await supabase
//       .from("events")
//       .select("*")
//       .order("created_at", { ascending: false });
//     if (error) console.error("Error fetching events:", error);
//     else setEvents(data);
//   }

//   async function uploadImage(file) {
//     const filePath = `${Date.now()}_${file.name}`;

//     const { error: uploadError } = await supabase.storage
//       .from("events")
//       .upload(filePath, file);

//     if (uploadError) {
//       console.error("Image upload error:", uploadError);
//       return null;
//     }

//     const {
//       data: { publicUrl },
//     } = supabase.storage.from("events").getPublicUrl(filePath);

//     return publicUrl;
//   }

//   const createEvent = async () => {
//     if (!title || images.length === 0) {
//       alert("Title and images are required!");
//       return;
//     }

//     // Check authentication before proceeding
//     console.log("=== CHECKING AUTHENTICATION ===");
//     const { session, user } = await checkAuth();

//     if (!session || !user) {
//       alert("You are not logged in! Please log in again.");
//       return;
//     }

//     console.log("Authentication OK - User ID:", user.id);
//     console.log("=== PROCEEDING WITH UPLOAD ===");

//     setIsUploading(true);

//     const uploadedUrls = [];
//     for (const img of images) {
//       const url = await uploadImage(img);
//       if (url) uploadedUrls.push(url);
//     }

//     const { data, error } = await supabase
//       .from("events")
//       .insert([{ title, gallery: uploadedUrls }])
//       .select()
//       .single();

//     if (error) {
//       console.error("Error creating event:", error);
//       console.log("Full error details:", JSON.stringify(error, null, 2));
//     } else {
//       setEvents([data, ...events]);
//       setTitle("");
//       setImages([]);

//       const successDiv = document.createElement("div");
//       successDiv.className =
//         "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2";
//       successDiv.innerHTML =
//         '<div class="w-5 h-5 bg-white rounded-full flex items-center justify-center"><svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span>Event uploaded successfully!</span>';
//       document.body.appendChild(successDiv);
//       setTimeout(() => document.body.removeChild(successDiv), 3000);
//     }

//     setIsUploading(false);
//   };

//   const deleteEvent = async (id) => {
//     if (!confirm("Are you sure you want to delete this event?")) return;
//     const { error } = await supabase.from("events").delete().eq("id", id);
//     if (!error) setEvents(events.filter((e) => e.id !== id));
//   };

//   const deleteImage = async (eventId, imageUrl) => {
//     if (!confirm("Are you sure you want to delete this image?")) return;

//     const event = events.find((e) => e.id === eventId);
//     const updatedGallery = event.gallery.filter((img) => img !== imageUrl);

//     const { error } = await supabase
//       .from("events")
//       .update({ gallery: updatedGallery })
//       .eq("id", eventId);

//     if (!error) {
//       setEvents(
//         events.map((e) =>
//           e.id === eventId ? { ...e, gallery: updatedGallery } : e
//         )
//       );
//     }
//   };

//   // New functions for editing title
//   const startEditingTitle = (event) => {
//     setEditingEventId(event.id);
//     setEditedTitle(event.title);
//   };

//   const saveEditedTitle = async (eventId) => {
//     if (!editedTitle.trim()) return;

//     const { error } = await supabase
//       .from("events")
//       .update({ title: editedTitle })
//       .eq("id", eventId);

//     if (!error) {
//       setEvents(
//         events.map((e) => (e.id === eventId ? { ...e, title: editedTitle } : e))
//       );
//       setEditingEventId(null);
//       setEditedTitle("");
//     } else {
//       console.error("Error updating title:", error);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };
//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };
//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const files = Array.from(e.dataTransfer.files).filter((f) =>
//       f.type.startsWith("image/")
//     );
//     setImages((prev) => [...prev, ...files]);
//   };
//   const handleFileSelect = (e) => {
//     setImages((prev) => [...prev, ...Array.from(e.target.files)]);
//   };
//   const removeImageFromList = (i) => {
//     setImages((prev) => prev.filter((_, index) => index !== i));
//   };

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#008A5E] via-[#00B273] to-[#005F46]">
//       {/* Header */}
//       <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-r from-[#008A5E] to-[#00B273] rounded-xl flex items-center justify-center">
//               <Settings className="w-5 h-5 text-white" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
//               <p className="text-sm text-slate-400">
//                 Manage your events and media
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2 text-slate-400">
//             <Calendar className="w-5 h-5" />
//             <span className="text-sm">{events.length} Events</span>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto p-6">
//         {/* Upload Section */}
//         <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
//           <div className="flex items-center space-x-3 mb-6">
//             <div className="w-8 h-8 bg-gradient-to-r from-[#008A5E] to-[#00B273] rounded-lg flex items-center justify-center">
//               <Plus className="w-4 h-4 text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-white">Create New Event</h2>
//           </div>

//           {/* Title Input */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-white-300 mb-2">
//               Event Title
//             </label>
//             <input
//               type="text"
//               placeholder="Enter event title..."
//               className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#008A5E] focus:ring-2 focus:ring-[#008A5E]/20"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           {/* Image Drop Area */}
//           <div
//             className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer ${
//               isDragging
//                 ? "border-[#008A5E] bg-[#008A5E]/10 scale-[1.02]"
//                 : "border-slate-600 hover:border-[#008A5E] hover:bg-[#008A5E]/5"
//             }`}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//             onClick={() => fileInputRef.current?.click()}
//           >
//             <input
//               ref={fileInputRef}
//               type="file"
//               multiple
//               accept="image/*"
//               onChange={handleFileSelect}
//               className="hidden"
//             />
//             <div className="space-y-4">
//               <div className="w-12 h-12 mx-auto bg-gradient-to-r from-[#008A5E] to-[#00B273] rounded-full flex items-center justify-center">
//                 <Upload className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-1">
//                   Drop images here or click to browse
//                 </h3>
//                 <p className="text-sm text-slate-400">
//                   Supports: JPG, PNG, GIF, WebP • Max size: 10MB per file
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Preview */}
//           {images.length > 0 && (
//             <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
//               {images.map((file, i) => (
//                 <div
//                   key={i}
//                   className="relative bg-white/5 rounded-xl overflow-hidden border border-white/10"
//                 >
//                   <img
//                     src={URL.createObjectURL(file)}
//                     alt="preview"
//                     className="w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       removeImageFromList(i);
//                     }}
//                     className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
//                   >
//                     <X className="w-3 h-3 text-white" />
//                   </button>
//                   <div className="p-2 text-xs text-slate-400">
//                     {file.name} ({formatFileSize(file.size)})
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Button */}
//           <button
//             onClick={createEvent}
//             disabled={!title || images.length === 0 || isUploading}
//             className={`w-full mt-6 py-4 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 ${
//               !title || images.length === 0 || isUploading
//                 ? "bg-slate-600 cursor-not-allowed"
//                 : "bg-gradient-to-r from-[#008A5E] to-[#00B273] hover:shadow-lg hover:scale-[1.02]"
//             }`}
//           >
//             {isUploading ? (
//               <>
//                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                 <span>Uploading...</span>
//               </>
//             ) : (
//               <>
//                 <Upload className="w-5 h-5" />
//                 <span>Create Event</span>
//               </>
//             )}
//           </button>
//         </div>

//         {/* Event List */}
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
//               <Image className="w-7 h-7" />
//               <span>Manage Events</span>
//             </h2>
//             <span className="bg-[#008A5E]/20 text-[#00B273] px-4 py-2 rounded-full text-sm font-medium">
//               {events.length} Total Events
//             </span>
//           </div>

//           {events.length === 0 ? (
//             <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
//               <p className="text-white">No Events Yet</p>
//             </div>
//           ) : (
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {events.map((event) => (
//                 <div
//                   key={event.id}
//                   className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-[#008A5E]/50 transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     {editingEventId === event.id ? (
//                       <div className="flex flex-1 space-x-2">
//                         <input
//                           type="text"
//                           value={editedTitle}
//                           onChange={(e) => setEditedTitle(e.target.value)}
//                           className="flex-1 rounded-xl px-2 py-1 text-black"
//                         />
//                         <button
//                           onClick={() => saveEditedTitle(event.id)}
//                           className="bg-green-500 px-3 py-1 rounded text-white"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => setEditingEventId(null)}
//                           className="bg-red-500 px-3 py-1 rounded text-white"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     ) : (
//                       <>
//                         <h3 className="font-bold text-xl text-white flex-1 pr-2">
//                           {event.title}
//                         </h3>
//                         <button
//                           onClick={() => startEditingTitle(event)}
//                           className="bg-green-500 px-3 py-1 rounded text-white ml-2"
//                         >
//                           Edit
//                         </button>
//                       </>
//                     )}

//                     <button
//                       onClick={() => deleteEvent(event.id)}
//                       className="w-8 h-8 bg-red-500/20 hover:bg-red-500 rounded-lg flex items-center justify-center text-red-400 hover:text-white ml-2"
//                     >
//                       <Trash2 className="w-4 h-4" />
//                     </button>
//                   </div>

//                   <div className="mb-4">
//                     <span className="text-sm text-slate-300">Images</span>
//                     <div className="grid grid-cols-3 gap-2 mt-2">
//                       {event.gallery.map((img, i) => (
//                         <div
//                           key={i}
//                           className="relative aspect-square rounded-lg overflow-hidden"
//                         >
//                           <img
//                             src={img}
//                             alt="event"
//                             className="w-full h-full object-cover"
//                           />
//                           <button
//                             onClick={() => deleteImage(event.id, img)}
//                             className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center text-white"
//                           >
//                             <Trash2 className="w-5 h-5" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="text-xs text-slate-500">
//                     Created: {new Date(event.created_at).toLocaleDateString()}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// src/pages/AdminPage.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Upload,
  X,
  Trash2,
  Image,
  Plus,
  Calendar,
  Settings,
} from "lucide-react";
import { supabase } from "../supabaseClient";

export default function AdminPage({ isAuthenticated }) {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [isAuthenticated]);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents(data || []);
    }
  }

  async function uploadImage(file) {
    const filePath = `${Date.now()}_${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("events")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Image upload error:", uploadError);
      return null;
    }

    const { data } = supabase.storage.from("events").getPublicUrl(filePath);
    return data.publicUrl;
  }

  const createEvent = async () => {
    if (!isAuthenticated) {
      alert("You must be logged in to create events.");
      return;
    }

    if (!title || images.length === 0) {
      alert("Title and images are required!");
      return;
    }

    setIsUploading(true);

    const uploadedUrls = [];
    for (const img of images) {
      const url = await uploadImage(img);
      if (url) uploadedUrls.push(url);
    }

    const { data, error } = await supabase
      .from("events")
      .insert([{ title, gallery: uploadedUrls }])
      .select()
      .single();

    if (error) {
      console.error("Error creating event:", error);
    } else {
      setEvents([data, ...events]);
      setTitle("");
      setImages([]);
    }

    setIsUploading(false);
  };

  const deleteEvent = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (!error) setEvents(events.filter((e) => e.id !== id));
  };

  const deleteImage = async (eventId, imageUrl) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    const event = events.find((e) => e.id === eventId);
    const updatedGallery = event.gallery.filter((img) => img !== imageUrl);

    const { error } = await supabase
      .from("events")
      .update({ gallery: updatedGallery })
      .eq("id", eventId);

    if (!error) {
      setEvents(
        events.map((e) =>
          e.id === eventId ? { ...e, gallery: updatedGallery } : e
        )
      );
    }
  };

  const startEditingTitle = (event) => {
    setEditingEventId(event.id);
    setEditedTitle(event.title);
  };

  const saveEditedTitle = async (eventId) => {
    if (!editedTitle.trim()) return;

    const { error } = await supabase
      .from("events")
      .update({ title: editedTitle })
      .eq("id", eventId);

    if (!error) {
      setEvents(
        events.map((e) => (e.id === eventId ? { ...e, title: editedTitle } : e))
      );
      setEditingEventId(null);
      setEditedTitle("");
    } else {
      console.error("Error updating title:", error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/")
    );
    setImages((prev) => [...prev, ...files]);
  };
  const handleFileSelect = (e) => {
    setImages((prev) => [...prev, ...Array.from(e.target.files)]);
  };
  const removeImageFromList = (i) => {
    setImages((prev) => prev.filter((_, index) => index !== i));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#008A5E] via-[#00B273] to-[#005F46]">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#008A5E] to-[#00B273] rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-sm text-slate-400">
                Manage your events and media
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">{events.length} Events</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Upload Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-[#008A5E] to-[#00B273] rounded-lg flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Create New Event</h2>
          </div>

          {/* Title Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-white-300 mb-2">
              Event Title
            </label>
            <input
              type="text"
              placeholder="Enter event title..."
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#008A5E] focus:ring-2 focus:ring-[#008A5E]/20"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Image Drop Area */}
          <div
            className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer ${
              isDragging
                ? "border-[#008A5E] bg-[#008A5E]/10 scale-[1.02]"
                : "border-slate-600 hover:border-[#008A5E] hover:bg-[#008A5E]/5"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-[#008A5E] to-[#00B273] rounded-full flex items-center justify-center">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Drop images here or click to browse
                </h3>
                <p className="text-sm text-slate-400">
                  Supports: JPG, PNG, GIF, WebP • Max size: 10MB per file
                </p>
              </div>
            </div>
          </div>

          {/* Preview */}
          {images.length > 0 && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((file, i) => (
                <div
                  key={i}
                  className="relative bg-white/5 rounded-xl overflow-hidden border border-white/10"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImageFromList(i);
                    }}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <X className="w-3 h-3 text-white" />
                  </button>
                  <div className="p-2 text-xs text-slate-400">
                    {file.name} ({formatFileSize(file.size)})
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Button */}
          <button
            onClick={createEvent}
            disabled={!title || images.length === 0 || isUploading}
            className={`w-full mt-6 py-4 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 ${
              !title || images.length === 0 || isUploading
                ? "bg-slate-600 cursor-not-allowed"
                : "bg-gradient-to-r from-[#008A5E] to-[#00B273] hover:shadow-lg hover:scale-[1.02]"
            }`}
          >
            {isUploading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                <span>Create Event</span>
              </>
            )}
          </button>
        </div>

        {/* Event List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
              <Image className="w-7 h-7" />
              <span>Manage Events</span>
            </h2>
            <span className="bg-[#008A5E]/20 text-[#00B273] px-4 py-2 rounded-full text-sm font-medium">
              {events.length} Total Events
            </span>
          </div>

          {events.length === 0 ? (
            <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white">No Events Yet</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-[#008A5E]/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-4">
                    {editingEventId === event.id ? (
                      <div className="flex flex-1 space-x-2">
                        <input
                          type="text"
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="flex-1 rounded-xl px-2 py-1 text-black"
                        />
                        <button
                          onClick={() => saveEditedTitle(event.id)}
                          className="bg-green-500 px-3 py-1 rounded text-white"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingEventId(null)}
                          className="bg-red-500 px-3 py-1 rounded text-white"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-bold text-xl text-white flex-1 pr-2">
                          {event.title}
                        </h3>
                        <button
                          onClick={() => startEditingTitle(event)}
                          className="bg-green-500 px-3 py-1 rounded text-white ml-2"
                        >
                          Edit
                        </button>
                      </>
                    )}

                    <button
                      onClick={() => deleteEvent(event.id)}
                      className="w-8 h-8 bg-red-500/20 hover:bg-red-500 rounded-lg flex items-center justify-center text-red-400 hover:text-white ml-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-slate-300">Images</span>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {event.gallery.map((img, i) => (
                        <div
                          key={i}
                          className="relative aspect-square rounded-lg overflow-hidden"
                        >
                          <img
                            src={img}
                            alt="event"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => deleteImage(event.id, img)}
                            className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center text-white"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">
                    Created: {new Date(event.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
