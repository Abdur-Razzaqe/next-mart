import AddProductForm from "../components/form/AddProductForm";

const AddProductPage = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Add New Product
        </h2>

        <AddProductForm />
      </div>
    </div>
  );
};

export default AddProductPage;
