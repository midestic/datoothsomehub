import ContactForm from "@/components/ContactForm";
import { stripe } from "@/lib/stripe";

export default async function ContactPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div className="container border mx-auto py-10  my-10">
      <h1 className="text-center text-3xl">Send Us a Mesage</h1>
      <div className="flex justify-between items-center  max-md:flex-col  mt-[100px]">
        <div className="w-[50%] flex justify-center items-center max-md:w-[100%]">
          <img
            src={products.data[2].images[0]}
            alt="cake"
            className="rounded w-[400px] h-[400px] object-cover max-md:w-[100%]"
          />
        </div>
        <div className=" w-[50%] max-md:w-[100%] max-md:mt-[50px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
