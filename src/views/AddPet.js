import AddPetForm from "../components/layout/Form/AddPetForm.js";

const Add = () => {
  return (
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="col-start-4 col-span-6 p-5">
          <div className="border rounded-lg border-gray-300 bg-gray-100 shadow-2xl p-5">
            <AddPetForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
