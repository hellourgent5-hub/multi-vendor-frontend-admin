import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://multi-vendor-app-ey66.onrender.com/api";

export default function AddProduct() {
  const [modules, setModules] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [vendors, setVendors] = useState([]);

  const [selectedModule, setSelectedModule] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");

  // Load modules + vendors at first
  useEffect(() => {
    axios.get(`${API}/modules`).then(res => setModules(res.data));
    axios.get(`${API}/vendors`).then(res => setVendors(res.data));
  }, []);

  // Load categories when module selected
  useEffect(() => {
    if (!selectedModule) return;
    axios.get(`${API}/categories?module=${selectedModule}`)
      .then(res => setCategories(res.data));
  }, [selectedModule]);

  // Load subcategories when category selected
  useEffect(() => {
    if (!selectedCategory) return;
    axios.get(`${API}/subcategories?category=${selectedCategory}`)
      .then(res => setSubcategories(res.data));
  }, [selectedCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/products`, {
        vendor: selectedVendor,
        module: selectedModule,
        category: selectedCategory,
        subcategory: selectedSubCategory,
        name,
        description,
        price,
        stock,
        images: images.split(",")
      });

      alert("Product Added Successfully");
      window.location.reload();
    } catch (error) {
      alert(error.response?.data?.message || "Error adding product");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Module */}
        <select
          className="border p-2 w-full"
          value={selectedModule}
          onChange={(e) => setSelectedModule(e.target.value)}
        >
          <option value="">Select Module</option>
          {modules.map(m => (
            <option key={m._id} value={m._id}>{m.name}</option>
          ))}
        </select>

        {/* Category */}
        <select
          className="border p-2 w-full"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          disabled={!selectedModule}
        >
          <option value="">Select Category</option>
          {categories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>

        {/* Subcategory */}
        <select
          className="border p-2 w-full"
          value={selectedSubCategory}
          onChange={(e) => setSelectedSubCategory(e.target.value)}
          disabled={!selectedCategory}
        >
          <option value="">Select SubCategory</option>
          {subcategories.map(s => (
            <option key={s._id} value={s._id}>{s.name}</option>
          ))}
        </select>

        {/* Vendor */}
        <select
          className="border p-2 w-full"
          value={selectedVendor}
          onChange={(e) => setSelectedVendor(e.target.value)}
        >
          <option value="">Select Vendor</option>
          {vendors.map(v => (
            <option key={v._id} value={v._id}>{v.name}</option>
          ))}
        </select>

        {/* Product Name */}
        <input
          className="border p-2 w-full"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Price */}
        <input
          className="border p-2 w-full"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* Stock */}
        <input
          className="border p-2 w-full"
          placeholder="Stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        {/* Description */}
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Images */}
        <input
          className="border p-2 w-full"
          placeholder="Image URLs (comma separated)"
          value={images}
          onChange={(e) => setImages(e.target.value)}
        />

        <button className="bg-blue-600 text-white p-2 w-full rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
