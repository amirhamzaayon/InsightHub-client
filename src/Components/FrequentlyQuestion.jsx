import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FrequentlyQuestion = () => {
  return (
    <div>
      <div>
        <h2 className="mb-12 font-bold text-center text-gray-800 text-3xl/normal">
          know More About Us
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full p-6 border rounded-lg sm:p-12 border-green-600/25 bg-green-50/50"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            1. What is the purpose of this platform?
          </AccordionTrigger>
          <AccordionContent>
            Our platform is designed to connect users with reliable services
            while allowing them to share honest feedback. Whether you're adding
            services, reading reviews, or managing your own, our goal is to
            enhance trust and transparency in the service community.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2. How can I add a new service?</AccordionTrigger>
          <AccordionContent>
            Adding a service is simple! Just log in, navigate to the "Add
            Service" page, and fill in the required details like the title,
            description, price, and image. Click the “Add Service” button, and
            your service will be live for others to explore.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            3. Can I update or delete services and reviews?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! You can easily manage your services and reviews from the
            “My Services” and “My Reviews” pages. Use the update button to
            modify details or the delete button to remove entries—everything is
            at your fingertips.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>4. Is the platform secure?</AccordionTrigger>
          <AccordionContent>
            Yes, security is our priority! We use advanced JWT authentication to
            protect your data and ensure secure interactions. Your credentials
            and sensitive information are always safe with us.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            5. Can I filter and search for specific services?
          </AccordionTrigger>
          <AccordionContent>
            Yes! Use our powerful search and filter features to find services by
            category, title, or company name. This helps you quickly locate the
            services that best meet your needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            6. How do reviews work on this platform?
          </AccordionTrigger>
          <AccordionContent>
            Reviews are at the heart of our platform! Users can post their
            experiences, provide ratings, and leave feedback on services they've
            used. This helps others make informed decisions based on real
            customer experiences.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
