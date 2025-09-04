// src/pages/AdminPage.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function AdminPage() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);

  // ---------------- EVENTS ----------------
  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) return console.error(error);
    setEvents(data || []);
  };

  const createEvent = async () => {
    if (!title || images.length === 0)
      return alert("Title and images are required!");

    try {
      const uploadedUrls = [];

      for (let img of images) {
        const { data, error } = await supabase.storage
          .from("events")
          .upload(`images/${Date.now()}_${img.name}`, img, { upsert: true });

        if (error) throw error;

        const { data: publicData } = supabase.storage
          .from("events")
          .getPublicUrl(data.path);
        uploadedUrls.push(publicData.publicUrl);
      }

      const { error: insertError } = await supabase
        .from("events")
        .insert([{ title, gallery: uploadedUrls }]);

      if (insertError) throw insertError;

      alert("Event uploaded successfully!");
      setTitle("");
      setImages([]);
      fetchEvents();
    } catch (err) {
      console.error(err);
      alert("Upload failed: " + err.message);
    }
  };

  const deleteEvent = async (id, gallery) => {
    try {
      if (gallery && gallery.length > 0) {
        const paths = gallery.map(
          (url) => url.split("/storage/v1/object/public/events/")[1]
        );
        await supabase.storage.from("events").remove(paths);
      }

      const { error } = await supabase.from("events").delete().eq("id", id);
      if (error) throw error;

      fetchEvents();
    } catch (err) {
      console.error(err);
      alert("Failed to delete event: " + err.message);
    }
  };

  // ✅ Delete a single image from gallery
  const deleteImage = async (eventId, imageUrl, gallery) => {
    try {
      const path = imageUrl.split("/storage/v1/object/public/events/")[1];
      await supabase.storage.from("events").remove([path]);

      const updatedGallery = gallery.filter((url) => url !== imageUrl);
      const { error } = await supabase
        .from("events")
        .update({ gallery: updatedGallery })
        .eq("id", eventId);

      if (error) throw error;
      fetchEvents();
    } catch (err) {
      console.error(err);
      alert("Failed to delete image: " + err.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Top Bar */}
      <header className="bg-gray-900 shadow p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* Upload New Event */}
        <div className="bg-gray-700 p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload New Event</h2>
          <input
            type="text"
            placeholder="Event Title"
            className="border p-2 w-full mb-3 rounded text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Image Preview before Upload */}
          <input
            type="file"
            multiple
            className="mb-3"
            onChange={(e) => setImages(Array.from(e.target.files))}
          />
          {images.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-3">
              {images.map((file, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          )}

          <button
            onClick={createEvent}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Upload Event
          </button>
        </div>

        {/* Events List */}
        <h2 className="text-xl font-semibold mb-4">Manage Events</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 rounded-2xl p-4 shadow-lg flex flex-col"
            >
              <h3 className="font-bold text-lg mb-3">{event.title}</h3>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {event.gallery?.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={img}
                      alt="event"
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => deleteImage(event.id, img, event.gallery)}
                      className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition"
                    >
                      ❌
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => deleteEvent(event.id, event.gallery)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg mt-auto"
              >
                Delete Event
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
