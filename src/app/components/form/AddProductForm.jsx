"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import products from "@/app/data/products.json";
import toast from "react-hot-toast";

const AddProductForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      rating: 4.5,
      reviews: [],
      ...formData,
      price: Number(formData.price),
    };

    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || products;

    const updatedProducts = [...storedProducts, newProduct];

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    toast.success("Product added successfully!");

    router.push("/products");
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="text-2xl font-bold text-center mb-4">
          Product Information
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Product Name */}
          <div className="form-control">
            <label className="label font-semibold">Product Name</label>
            <input
              name="name"
              placeholder="Enter product name"
              className="input input-bordered w-full"
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label font-semibold">Price ($)</label>
            <input
              name="price"
              type="number"
              placeholder="Enter price"
              className="input input-bordered w-full"
              onChange={handleChange}
              required
            />
          </div>

          {/* Image */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Image URL</label>
            <input
              name="image"
              placeholder="https://image-url.com"
              className="input input-bordered w-full"
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="laptops">Laptops</option>
              <option value="smartphones">Smartphones</option>
              <option value="audio">Audio</option>
              <option value="wearables">Wearables</option>
              <option value="accessories">Accessories</option>
              <option value="storage">Storage</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write product description..."
              className="textarea textarea-bordered w-full"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button className="btn btn-primary w-full text-lg">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
