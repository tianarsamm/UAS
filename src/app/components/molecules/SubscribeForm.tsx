// components/molecules/SubscribeForm.tsx
import InputEmail from "../atoms/InputEmail";
import SubscribeButton from "../atoms/SubscribeButton";

const SubscribeForm = () => (
  <form className="flex flex-col md:flex-row items-center justify-center gap-4">
    <InputEmail />
    <SubscribeButton />
  </form>
);

export default SubscribeForm;
