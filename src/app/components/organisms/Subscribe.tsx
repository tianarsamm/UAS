// components/organisms/Subscribe.tsx
import TextHeading from "../atoms/TextHeading";
import TextDescription from "../atoms/TextDescription";
import SubscribeForm from "../molecules/SubscribeForm";

export default function Subscribe() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="text-green-500 font-semibold text-sm mb-2">SUBSCRIBE</p>
        <TextHeading>
          Subscribe To Get The Latest <br /> News About Us
        </TextHeading>
        <TextDescription>
          Please Drop Your Email Below To Get Daily Update About What We Do
        </TextDescription>
        <SubscribeForm />
      </div>
    </section>
  );
}
