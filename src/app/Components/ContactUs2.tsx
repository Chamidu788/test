
const ContactUs2: React.FC = () => {

  return (
    <div className="bg-cover bg-center">
      {/* Hero Section */}
      <div
        className="relative h-[408px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(/ContactUs/ContactUs.png)',
        }}
      >
        <div className="container mx-auto px-10 py-20 relative z-0">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-[64px] font-poppins font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-[18px] max-md mx-auto">
              We specialize in helping you build a team of <br />
              export developers
            </p>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="relative container mx-auto lg:px-[100px] sm:px-5 z-10 py-20">
        <div className="mb-10">
          <h2
            className="text-4xl font-poppins font-bold mb-4 text-center md:text-left"
            style={{
              color: "#16205F",
              fontSize: "42px",
            }}
          >
            Get in Touch
          </h2>
          <p
            className="text-lg text-center md:text-left"
            style={{
              color: "#16205F",
              fontSize: "18px",
            }}
          >
            Please feel free to get in touch with us via any convenient means
            (phone, <br /> Whatsapp, email, submit a contact form). We will be
            glad to answer your <br /> questions as soon as possible.
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default ContactUs2;
