import { useState } from "react";
import { toast } from "sonner@2.0.3";
import imgImage6 from "figma:asset/b975e3c21fa0c0e891f7aabb3ceaa9a530623e3a.png";

function ContactTabs() {
  return (
    <div className="flex gap-[39px] items-center leading-[normal] not-italic text-[40px] text-nowrap whitespace-pre mb-12">
      <p className="capitalize text-[#8e8585]">contact us</p>
      <p className="[text-underline-position:from-font] decoration-solid text-black underline">
        Schedule a Call
      </p>
    </div>
  );
}

interface ContactFormProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

function ContactForm({ contactRef }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div ref={contactRef} className="w-full max-w-[441px]">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[23px]">
        <div className="content-stretch flex flex-col gap-2 items-start w-full">
          <p className="capitalize leading-[normal] not-italic text-[16px] text-black text-nowrap whitespace-pre">
            name
          </p>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-[42px] w-full border border-black border-solid px-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#c02071] focus:ring-opacity-50"
          />
        </div>
        <div className="content-stretch flex flex-col gap-2 items-start w-full">
          <p className="leading-[normal] not-italic text-[16px] text-black text-nowrap whitespace-pre">
            Email
          </p>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="h-[42px] w-full border border-black border-solid px-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#c02071] focus:ring-opacity-50"
          />
        </div>
        <div className="content-stretch flex flex-col gap-2 items-start w-full">
          <p className="capitalize leading-[normal] not-italic text-[16px] text-black text-nowrap whitespace-pre">
            message
          </p>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="h-[77px] w-full border border-black border-solid p-3 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#c02071] focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="bg-[#c02071] box-border content-stretch flex gap-6 items-center justify-center overflow-clip px-[53px] py-3 rounded-lg hover:bg-[#d02881] transition-colors cursor-pointer"
        >
          <p className="leading-[normal] not-italic text-[20px] text-nowrap text-white whitespace-pre">
            Send
          </p>
        </button>
      </form>
    </div>
  );
}

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
  return (
    <div className="w-full relative py-24 px-8">
      {/* Background gradient on left */}
      <div
        className="absolute left-0 top-0 h-full w-[710px] opacity-20"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 710 935\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-20.1 10.05 -9.392 -22.038 27.5 563)\\'><stop stop-color=\\'rgba(218,97,87,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(225,134,127,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(233,172,167,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(240,209,206,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(247,246,246,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          backgroundSize: "cover",
        }}
      />

      {/* Background gradient on right (rotated) */}
      <div
        className="absolute right-0 top-0 h-[935px] w-[710px] rotate-180 -scale-y-100"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 710 935\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-21.65 14.35 -13.867 -23.966 -0.00003204 353.5)\\'><stop stop-color=\\'rgba(218,97,87,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(225,134,127,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(233,172,167,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(240,209,206,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(247,246,246,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <ContactTabs />

        <div className="flex items-start justify-between gap-12">
          <ContactForm contactRef={contactRef} />

          <div className="w-[578px] h-[506px] relative">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
