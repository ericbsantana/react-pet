import Input from "../layout/Form/Input";
import Textarea from "../layout/Form/Textarea";
import Button from "../layout/Form/Button";

const Signup = () => {
  return (
    <div className="grid grid-cols-12	max-w-7xl mx-auto content-center p-2">
      <div className="col-start-4 col-span-6 p-5">
        <div className="border rounded-lg border-gray-300 bg-gray-100 shadow-2xl p-5">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <div className="grid gap-6">
            <label className="block">
              <span className="text-gray-700">Full name</span>
              <Input name="name" type="text" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-gray-700">Username</span>
              <Input placeholder="Your username" type="text" />
            </label>
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <Input name="email" type="email" placeholder="john@example.com" />
            </label>
            <label className="block">
              <span className="text-gray-700">Password</span>
              <Input name="email" type="password" required />
            </label>
            <label className="block">
              <span className="text-gray-700">Cellphone</span>
              <Input
                name="cellphone"
                type="text"
                placeholder="(XX) XXXXX-XXXX"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Biography</span>
              <Textarea rows="3" />
            </label>
            <label className="block">
              <span className="text-gray-700">CEP</span>
              <Input name="cep" type="text" placeholder="XXXXX-XXX" />
            </label>
            <label className="block">
              <span className="text-gray-700">City</span>
              <Input type="text" name="city" placeholder="City" />
            </label>
            <label className="block">
              <span className="text-gray-700">Address</span>
              <Input type="text" name="address" placeholder="My Street, 999" />
            </label>
            <label className="block">
              <span className="text-gray-700">Website</span>
              <Input type="text" name="address" placeholder="mywebsite.com" />
            </label>
            <Button type="submit">Create Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
